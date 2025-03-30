import { sleep } from "../Helpers";
import { randomNumber } from "@mansartesteban/utils";
import SortComponent from "../SortComponent";

class RandomizeSort extends SortComponent {
  steps = [];
  currentStep = 0;

  process() {
    this.serie.numbers = [];
    for (let i = 0; i < this.serie.length; i++) {
      let data = {
        value: Math.floor(randomNumber(0, 10000)),
        state: "unsorted",
      };
      this.serie.numbers[i] = data;
    }
  }
}
export default RandomizeSort;
