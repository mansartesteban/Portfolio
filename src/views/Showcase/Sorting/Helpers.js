export const validateSerie = async () => {
  // for (let data of datas.value) {
  //   data.state = "processing";
  //   playSound(data.value, animationSpeed.value);
  //   await sleep(animationSpeed.value);
  //   data.state = "sorted";
  // }
};

export const mapRange = (value, in_min, in_max, out_min, out_max) => {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export const sleep = (delay) => new Promise((r) => setTimeout(r, delay));

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
export const playSound = (freq = 0, serie, decay = 0.05) => {
  freq = mapRange(freq, serie.min, serie.max, 200, 800);

  // create oscillator, gain and compressor nodes
  let osc = audioContext.createOscillator();
  let vol = audioContext.createGain();
  let compressor = audioContext.createDynamicsCompressor();

  // set the supplied values
  osc.frequency.value = freq;
  osc.type = "sine";

  // set the volume value so that we do not overload the destination
  // when multiple voices are played simmultaneously
  vol.gain.value = 0.1;

  //create the audio graph
  osc.connect(vol).connect(compressor).connect(audioContext.destination);

  // ramp up to volume so that we minimise the
  // ugly "click" when the key is pressed
  vol.gain.exponentialRampToValueAtTime(
    0.003,
    audioContext.currentTime + decay
  );

  osc.start(audioContext.currentTime);
  osc.stop(audioContext.currentTime + decay);
};

export const getColor = (data) =>
  states.find((d) => d.name === data.state).color;

export const getSize = (data, serie) =>
  Math.max((data.value / Math.max(...serie.map((d) => d.value))) * 100, 1);

export const debounce = (callback, delay) => {
  var timer;
  return function () {
    var args = arguments;
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, delay);
  };
};

export const states = [
  {
    name: "sorted",
    color: "#4fd967",
    label: "Trié",
  },
  {
    name: "unsorted",
    color: "#d94f4f",
    label: "Pas triée",
  },
  {
    name: "processing",
    color: "#0bf5e8",
    label: "En traitement",
  },
  {
    name: "save",
    color: "#e17b30",
    label: "En état de sauvegarde",
  },
  {
    name: "temp",
    color: "#83239e",
    label: "État temporaire",
  },
];
