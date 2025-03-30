import SortComponent from "../SortComponent";

class MergeSort extends SortComponent {
  process() {
    this.mergeSort(this.serie.numbers);
    this.validate();
  }

  mergeSort(arr) {
    if (arr.length <= 1) return arr; // base : rien à trier

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  merge(left, right) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }

    // Ajoute le reste
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}

export default MergeSort;
