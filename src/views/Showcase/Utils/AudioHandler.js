class AudioHandler {
  pool;
  maxSize;

  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this.pool = [];
  }

  generateWeirdWave1(ctx, harmonics = 20) {
    const real = new Float32Array(harmonics);
    const imag = new Float32Array(harmonics);

    for (let i = 1; i < harmonics; i++) {
      real[i] = Math.random() * (i % 2 === 0 ? -1 : 1); // alternance aléatoire
      imag[i] = Math.sin((i * Math.PI) / 3) / i; // vague ondulée
    }

    return ctx.createPeriodicWave(real, imag);
  }

  generateWeirdWave2(ctx, harmonics = 30) {
    const real = new Float32Array(harmonics);
    const imag = new Float32Array(harmonics);

    for (let i = 1; i < harmonics; i++) {
      real[i] = 0;
      imag[i] = (Math.sin(i) + Math.sin(i * 0.5)) / i;
    }

    return ctx.createPeriodicWave(real, imag);
  }

  generateMetallicWave(ctx, harmonics = 25) {
    const real = new Float32Array(harmonics);
    const imag = new Float32Array(harmonics);

    for (let i = 1; i < harmonics; i++) {
      real[i] = Math.cos(i * 0.2) / ((i % 3) + 1);
      imag[i] = Math.sin(i * 2) / ((i % 5) + 1);
    }

    return ctx.createPeriodicWave(real, imag);
  }

  playSound(freq = 0, decay = 0.05) {
    const audioContext = this.getAvailableContext();
    if (!audioContext) return;

    // create oscillator, gain and compressor nodes
    let osc = audioContext.createOscillator();
    let vol = audioContext.createGain();
    let compressor = audioContext.createDynamicsCompressor();

    // set the supplied values
    osc.frequency.value = freq;
    // osc.type = "custom";

    // set the volume value so that we do not overload the destination
    // when multiple voices are played simmultaneously
    vol.gain.value = 0.1;

    const real = new Float32Array(2);
    const imag = new Float32Array(2);
    real[0] = 0;
    imag[0] = 0;
    real[1] = 1;
    imag[1] = 0;

    // const wave = audioContext.createPeriodicWave(real, imag);
    const wave = this.generateWeirdWave2(audioContext, 12);

    osc.setPeriodicWave(wave);

    //create the audio graph
    osc.connect(vol).connect(compressor).connect(audioContext.destination);

    // ramp up to volume so that we minimise the
    // ugly "click" when the key is pressed
    vol.gain.exponentialRampToValueAtTime(
      0.05,
      audioContext.currentTime + decay
    );

    osc.start(audioContext.currentTime);
    osc.stop(audioContext.currentTime + decay);
    osc.onended = () => {
      this.releaseContext(audioContext);
    };
  }

  getAvailableContext() {
    // Cherche un contexte libre
    for (const ctx of this.pool) {
      if (ctx._available) {
        ctx._available = false;
        return ctx;
      }
    }

    // Sinon, en créer un nouveau si on peut
    if (this.pool.length < this.maxSize) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctx._available = false;
      this.pool.push(ctx);
      return ctx;
    }

    // Sinon, attendre qu’un contexte se libère (optionnel)
    console.warn("AudioContextPool: all contexts busy");
    return null;
  }

  releaseContext(ctx) {
    ctx._available = true;
  }
}

export default AudioHandler;
