import Serie from "./Serie";

class SortComponent {
  #serie;

  #steps = [];
  #currentStep = 0;

  get serie() {
    return this.#serie;
  }

  set serie(serie) {
    if (!(serie instanceof Serie)) {
      throw "Given serie argument is not an instance of 'Serie'";
    }

    this.#serie = serie;
  }

  get steps() {
    return this.#steps;
  }

  saveStep(type, step) {
    this.#steps.push({ type, step });
  }

  next() {
    this.#currentStep++;
    return this.#steps[this.#currentStep - 1];
  }

  prev() {
    this.#currentStep--;
    return this.#steps[this.#currentStep + 1];
  }

  /*
  stepType:
  - replace
  - compare
  - process
  - save
  - swap
  - sorted
  - move (special swap)
  */

  async play() {
    for (let i = 0; i < this.steps.length; i++) {
      this.next();
    }
  }

  validate() {
    for (let i = 0; i < this.serie.numbers.length; i++) {
      this.saveStep("processing", { index: i });
      this.saveStep("sorted", { index: i });
    }
  }
}

export default SortComponent;
