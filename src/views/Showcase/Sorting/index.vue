<template>
  <div class="flex flex-col items-start gap-16 h-100">
    <div class="flex flex-row gap-4">
      <Button
        class="p-2 rounded text-gray-900"
        color="success"
        @click="setBubbleSort"
        >Bubble sort</Button
      >
      <Button
        class="p-2 rounded text-gray-900"
        color="success"
        @click="setSelectionSort"
        >Selection sort</Button
      >
      <Button
        class="p-2 rounded text-gray-900"
        color="error"
        @click="setRandomizeSort"
        >Randomize</Button
      >
      <Button
        class="p-2 rounded"
        @click="play"
        ><PlayIcon style="width: 20px; height: 20px"></PlayIcon
      ></Button>
      <Button
        class="p-2 rounded"
        @click="pause"
        ><PauseIcon style="width: 20px; height: 20px"></PauseIcon
      ></Button>
      <Button class="p-2 rounded"
        ><StopIcon style="width: 20px; height: 20px"></StopIcon
      ></Button>
      <Button
        class="p-2 rounded"
        @click="prev"
        ><BackwardIcon style="width: 20px; height: 20px"></BackwardIcon
      ></Button>
      <Button
        class="p-2 rounded"
        @click="next"
        ><ForwardIcon style="width: 20px; height: 20px"></ForwardIcon
      ></Button>
      <Range
        :label="`Vitesse: ${speed}`"
        v-model="speed"
        min="1"
        max="500"
        step="1"
      ></Range>
    </div>
    <hr />

    <!-- <input
      v-model="arrayLength"
      type="number"
      class="bg-slate-500 p-2 rounded"
      min="5"
      max="200"
    /> -->

    <div class="flex gap-1 h-64 overflow-x-auto w-full">
      <template v-for="data in datas">
        <div class="flex flex-col justify-end items-center gap-4 h-full flex-1">
          <div
            ref="animatedBars"
            :class="`rounded-md w-full transition-transform duration-[${speed}ms]`"
            :style="{
              background: getColor(data),
              height: `${getSize(data, serie.numbers)}%`,
            }"
            :data-number="data.value"
          ></div>
        </div>
      </template>
    </div>
    <div class="flex items-center gap-8">
      <div
        v-for="state in states"
        class="flex items-center gap-2"
      >
        <div
          class="h-4 w-4 rounded"
          :style="`background-color: ${state.color};`"
        ></div>
        {{ state.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
  // import { onMounted } from "vue";
  import Button from "../../../components/Button.vue";
  import Range from "../../../components/Inputs/Range.vue";
  import { getColor, getSize, playSound, sleep, states } from "./Helpers";
  // import { debounce } from "./Helpers";
  import Serie from "./Serie";
  import BubbleSort from "./SortComponents/BubbleSort";
  import RandomizeSort from "./SortComponents/RandomizeSort";
  import SelectionSort from "./SortComponents/SelectionSort";

  import {
    PlayIcon,
    PauseIcon,
    StopIcon,
    ForwardIcon,
    BackwardIcon,
  } from "@heroicons/vue/16/solid";

  const datas = ref([]);
  const serie = new Serie();
  const playing = ref(false);
  const speed = ref(28);

  serie.onUpdate(() => {
    datas.value = [...serie.numbers];
  });

  const setBubbleSort = () => {
    serie.setSort(new BubbleSort());
  };
  const setSelectionSort = () => {
    serie.setSort(new SelectionSort());
  };
  const setRandomizeSort = () => {
    serie.setSort(new RandomizeSort());
    serie.applySort();
  };
  const play = () => {
    playing.value = true;
    loopAnimate();
  };

  const next = () => {
    let step = serie.sort.next();
    return new Promise((res) => {
      if (step) {
        return animate(step).then(res);
      } else {
        playing.value = false;
        res();
      }
    });
  };

  const prev = () => {
    let step = serie.sort.prev();
    return new Promise((res) => {
      if (step) {
        return animate(step).then(res);
      } else {
        playing.value = false;
        res();
      }
    });
  };

  const loopAnimate = () => {
    next().then(async () => {
      await sleep(speed.value);
      if (playing.value) {
        loopAnimate();
      }
    });
  };

  const pause = () => {
    playing.value = false;
  };

  const animatedBars = ref();
  const animate = async (step) => {
    if (step.type === "sorted") {
      datas.value[step.step.index].state = "sorted";
    } else if (step.type === "swap") {
      playSound(datas.value[step.step.indexA].value, serie);
      playSound(datas.value[step.step.indexB].value, serie);
      let indexA = step.step.indexA;
      let indexB = step.step.indexB;
      animatedBars.value[indexA].style.transitionProperty = ``;
      animatedBars.value[indexB].style.transitionProperty = `transform`;

      let positionA = animatedBars.value[indexA].getBoundingClientRect();
      let positionB = animatedBars.value[indexB].getBoundingClientRect();

      let delta = positionB.left - positionA.left;

      animatedBars.value[indexA].style.transform = `translateX(${delta}px)`;
      animatedBars.value[indexB].style.transform = `translateX(${-delta}px)`;

      sleep(speed.value).then(async () => {
        animatedBars.value[indexA].style.transitionProperty = `none`;
        animatedBars.value[indexB].style.transitionProperty = `none`;
        animatedBars.value[indexA].style.transform = ``;
        animatedBars.value[indexB].style.transform = ``;
        let tmp = datas.value[indexA];
        datas.value[indexA] = datas.value[indexB];
        datas.value[indexB] = tmp;
      });
    } else if (step.type === "processing") {
      datas.value[step.step.index].state = "processing";
      playSound(datas.value[step.step.index].value, serie);
    } else if (step.type === "unsorted") {
      datas.value[step.step.index].state = "unsorted";
    } else if (step.type === "save") {
      playSound(datas.value[step.step.index].value, serie);
      datas.value[step.step.index].state = "save";
    }
  };

  onMounted(() => {
    serie.length = 30;
    setRandomizeSort();
  });
</script>

<!--
TODO
- OK Pause/resume
- OK Animation while swap values
- OK Change speed animation (make a slide)
- Change length of a list
- Randomize + animation
- Don't click multiple time the same button
-->
