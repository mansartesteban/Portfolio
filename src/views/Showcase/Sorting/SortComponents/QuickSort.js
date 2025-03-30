import SortComponent from "../SortComponent";

class QuickSort extends SortComponent {
  process() {
    this.quickSortInPlace(this.serie.numbers);

    console.log("ended");
    this.validate();
  }

  quickSortInPlace(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    const pivotIndex = this.partition(arr, start, end);
    this.quickSortInPlace(arr, start, pivotIndex - 1);
    this.saveStep("sorted", { index: start });

    this.quickSortInPlace(arr, pivotIndex + 1, end);
    if (pivotIndex + 1 < arr.length) {
      this.saveStep("sorted", { index: pivotIndex + 1 });
    }
  }

  partition(arr, start, end) {
    const pivot = arr[end];
    this.saveStep("temp", { index: end });
    let i = start;

    for (let j = start; j < end; j++) {
      this.saveStep("processing", { index: j });
      if (arr[j].value < pivot.value) {
        this.saveStep("swap", { indexA: i, indexB: j });
        [arr[i], arr[j]] = [arr[j], arr[i]]; // échange
        i++;
      }
      this.saveStep("unsorted", { index: j });
    }

    [arr[i], arr[end]] = [arr[end], arr[i]]; // place le pivot au bon endroit
    this.saveStep("swap", { indexA: i, indexB: end });
    this.saveStep("sorted", { index: i });
    return i;
  }
}

export default QuickSort;
