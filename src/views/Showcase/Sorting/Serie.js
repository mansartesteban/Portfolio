import SortComponent from "./SortComponent";

class Serie {
  #length = 0;
  numbers = [];
  sort;
  onUpdateCallback;

  constructor() {}

  get min() {
    return Math.min(...this.numbers.map((n) => n.value));
  }
  get max() {
    return Math.max(...this.numbers.map((n) => n.value));
  }

  set length(length) {
    if (length < 5) {
      length = 5;
    } else if (length > 200) {
      length = 200;
    }
    this.#length = length;
  }

  get length() {
    return this.#length;
  }

  setSort(sort) {
    if (!(sort instanceof SortComponent)) {
      throw "The sort argument given is not an instance of 'SortComponent'";
    }
    sort.serie = this;
    this.sort = sort;
    this.sort.process();
  }

  applySort() {
    return this.sort.play().then(this.onUpdateCallback);
  }

  onUpdate(callback) {
    this.onUpdateCallback = callback;
  }
}

export default Serie;
