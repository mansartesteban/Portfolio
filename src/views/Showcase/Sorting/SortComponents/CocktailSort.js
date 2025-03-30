import SortComponent from "../SortComponent";

class CocktailSort extends SortComponent {
  process() {
    let start = 0;
    let end = this.serie.numbers.length - 1;
    let swapped = true;

    while (swapped) {
      swapped = false;

      // Parcours gauche -> droite
      for (let i = start; i < end; i++) {
        this.saveStep("processing", { index: i });
        if (this.serie.numbers[i].value > this.serie.numbers[i + 1].value) {
          let tmp = this.serie.numbers[i + 1];
          this.serie.numbers[i + 1] = this.serie.numbers[i];
          this.serie.numbers[i] = tmp;
          this.saveStep("swap", { indexA: i, indexB: i + 1 });
          swapped = true;
        } else {
          this.saveStep("unsorted", { index: i });
        }
      }
      this.saveStep("sorted", { index: end });
      end--;

      if (!swapped) break;

      swapped = false;

      // Parcours droite -> gauche
      for (let i = end; i > start; i--) {
        this.saveStep("processing", { index: i });
        if (this.serie.numbers[i - 1].value > this.serie.numbers[i].value) {
          let tmp = this.serie.numbers[i - 1];
          this.serie.numbers[i - 1] = this.serie.numbers[i];
          this.serie.numbers[i] = tmp;
          this.saveStep("swap", { indexA: i - 1, indexB: i });
          swapped = true;
        } else {
          this.saveStep("unsorted", { index: i - 1 });
        }
      }
      this.saveStep("sorted", { index: start });
      start++;
    }

    this.validate();
  }
}

export default CocktailSort;
