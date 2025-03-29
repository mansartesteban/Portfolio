import { validateSerie } from "../Helpers";
import SortComponent from "../SortComponent";

class BubbleSort extends SortComponent {
  process() {
    for (let j = this.serie.numbers.length - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        this.saveStep("processing", { index: i });
        if (this.serie.numbers[i].value > this.serie.numbers[i + 1].value) {
          let tmp = this.serie.numbers[i + 1];
          this.serie.numbers[i + 1] = this.serie.numbers[i];
          this.serie.numbers[i] = tmp;
          this.saveStep("swap", { indexA: i, indexB: i + 1 });
        } else {
          this.saveStep("unsorted", { index: i });
        }
      }
      this.saveStep("sorted", { index: j });
    }

    for (let i = 0; i < this.serie.numbers.length; i++) {
      this.saveStep("processing", { index: i });
      this.saveStep("sorted", { index: i });
    }
  }
}

export default BubbleSort;
