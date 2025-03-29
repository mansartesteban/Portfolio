import SortComponent from "../SortComponent";

class SelectionSort extends SortComponent {
  process() {
    let minPosition = 0;
    for (let j = 0; j < this.serie.numbers.length - 1; j++) {
      minPosition = j;
      this.serie.numbers[minPosition].state = "save";
      this.saveStep("save", { index: minPosition });
      for (let i = j; i < this.serie.numbers.length; i++) {
        if (i > j) {
          this.serie.numbers[i].state = "processing";
          this.saveStep("processing", { index: i });
        }
        if (
          this.serie.numbers[i].value < this.serie.numbers[minPosition].value
        ) {
          this.serie.numbers[minPosition].state = "unsorted";
          this.saveStep("unsorted", { index: minPosition });
          minPosition = i;
          this.serie.numbers[i].state = "save";
          this.saveStep("save", { index: i });
        }
        if (this.serie.numbers[i].state === "processing") {
          this.serie.numbers[i].state = "unsorted";
          this.saveStep("unsorted", { index: i });
        }
      }
      let tmp = this.serie.numbers[j];
      this.serie.numbers[j] = this.serie.numbers[minPosition];
      this.serie.numbers[minPosition] = tmp;
      this.saveStep("swap", { indexA: j, indexB: minPosition });
      this.saveStep("sorted", { index: j });
    }
    this.saveStep("sorted", { index: this.serie.numbers.length - 1 });

    for (let i = 0; i < this.serie.numbers.length; i++) {
      this.serie.numbers[i].state = "unsorted";
      this.saveStep("processing", { index: i });
      this.saveStep("sorted", { index: i });
    }
  }
}

export default SelectionSort;
