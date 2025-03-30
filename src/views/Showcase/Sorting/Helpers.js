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
