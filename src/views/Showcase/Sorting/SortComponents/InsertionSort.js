import SortComponent from "../SortComponent";

class InsertionSort extends SortComponent {
  process() {
    for (let i = 1; i < this.serie.numbers.length; i++) {
      let number = this.serie.numbers[i];
      let j = i - 1;

      this.saveStep("save", { index: i });

      while (j >= 0 && this.serie.numbers[j].value > number.value) {
        this.saveStep("processing", { index: j });
        this.saveStep("swap", { indexA: j, indexB: j + 1 });
        this.serie.numbers[j + 1] = this.serie.numbers[j]; // décale les éléments plus grands
        this.saveStep("unsorted", { index: j });
        this.saveStep("unsorted", { index: j + 1 });
        j--;
      }

      // this.saveStep("sorted", { index: j + 1 });
      this.serie.numbers[j + 1] = number; // insère à la bonne position
    }

    this.validate();
  }
}

export default InsertionSort;
