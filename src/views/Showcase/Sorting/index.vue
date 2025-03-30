<template>
  <div class="flex flex-col lg:flex-row gap-16">
    <div class="flex flex-col flex-1 items-center gap-16">
      <div class="flex flex-col gap-4 items-center">
        <div class="flex items-end gap-4">
          <Select
            v-model="itemCount"
            @change="onCountChange"
            label="Nombre d'éléments"
            class="w-32"
            return-value="value"
            :options="[5, 10, 20, 50, 100, 200]"
          ></Select>
          <Button
            class="p-2 rounded text-gray-900"
            color="error"
            @click="setRandomizeSort"
            >Mélanger</Button
          >
        </div>
        <!-- <div class="w-full md:w-0" ></div> -->
        <div class="flex gap-4">
          <Button
            class="p-2 rounded"
            @click="playing ? pause() : play()"
            ><PlayIcon
              v-if="!playing"
              style="width: 20px; height: 20px"
            ></PlayIcon>
            <PauseIcon
              v-if="playing"
              style="width: 20px; height: 20px"
            ></PauseIcon
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
          <Button
            class="p-2 rounded"
            @click="muted = !muted"
          >
            <SpeakerWaveIcon
              v-if="!muted"
              style="width: 20px; height: 20px"
            ></SpeakerWaveIcon>
            <SpeakerXMarkIcon
              v-if="muted"
              style="width: 20px; height: 20px"
            ></SpeakerXMarkIcon>
          </Button>
          <Range
            :label="`Vitesse: ${speed}`"
            v-model="speed"
            min="1"
            max="100"
            step="1"
            class="w-32"
          ></Range>
        </div>
      </div>

      <div class="flex gap-1 h-64 overflow-x-auto w-full">
        <template v-for="data in datas">
          <div
            class="flex flex-col justify-end items-center gap-4 h-full flex-1"
          >
            <div
              ref="animatedBars"
              :class="`rounded-md w-full transition-transform duration-[${
                1000 / speed
              }ms]`"
              :style="{
                background: getColor(data),
                height: `${getSize(data, serie.numbers)}%`,
              }"
              :data-number="data.value"
            ></div>
          </div>
        </template>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-8">
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
    <div
      class="p-12 md:w-1/4 flex flex-col gap-3 shadow-xl shadow-[rgba(0,0,0,.25)] rounded-3xl bg-slate-800"
    >
      <Select
        v-model="activeSort"
        label="Sélectionner un tri"
        :options="sorts"
        @change="onSortChange"
      ></Select>
      <template v-if="activeSort.value === 'selection'">
        <div class="text-primary text-2xl font-bold mt-4">
          Tri par sélection (Selection Sort)
        </div>
        <div>📍 Pour chaque position du tableau :</div>
        <div>
          🔎 Cherche le plus petit élément restant dans la partie non triée
        </div>
        <div>🔄 Échange ce minimum avec l’élément courant</div>
        <div>🧱 La partie gauche devient triée, la droite reste à trier</div>
        <div>✅ Répète jusqu’à ce que tout soit trié</div>
        <h3 class="text-xl font-bold mt-4">Avantages et inconvénients</h3>
        <div>👎 Lent (O(n²)) — à éviter pour les gros tableaux</div>
        <div>👍 Simple et déterministe</div>
      </template>
      <template v-else-if="activeSort.value === 'bubble'">
        <div class="text-primary text-2xl font-bold mt-4">
          Tri à bulle (Bubble Sort)
        </div>
        <div>🔍 Compare deux éléments voisins</div>
        <div>🔄 Si le premier est plus grand, on les échange</div>
        <div>
          👉 Répète l’opération pour chaque paire, jusqu’à la fin du tableau
        </div>
        <div>⬇️ L’élément le plus grand "bulle" vers la fin</div>
        <div>
          🔁 Recommence depuis le début, en ignorant la dernière position (déjà
          triée)
        </div>
        <div>✅ Continue jusqu’à ce qu’il n’y ait plus d’échange</div>
        <h3 class="text-xl font-bold mt-4">Avantages et inconvénients</h3>
        <div>👎 Lent (O(n²)) — à éviter pour les gros tableaux</div>
        <div>👍 Simple à comprendre et à implémenter</div>
      </template>
      <template v-else-if="activeSort.value === 'quick'">
        <div class="text-primary text-2xl font-bold mt-4">
          Tri rapide (Quick Sort)
        </div>
        <div>
          🎯 Choisir un pivot (souvent le 1er, dernier, médian ou aléatoire)
        </div>

        <div>↔️ Réorganiser (partionner) le tableau :</div>
        <ul>
          <li class="ml-8">🔽 Tous les éléments < pivot vont à gauche</li>
          <li class="ml-8">🔼 Tous les éléments > pivot vont à droite</li>
        </ul>
        <div>
          🔁 Répéter récursivement sur chaque sous-tableau 🧠 Compléxité :
          Moyenne - O(n log n)
        </div>

        <h3 class="text-xl font-bold mt-4">Avantage et inconvénient</h3>
        <div>👍 Avantages</div>
        <ul>
          <li class="ml-8">Très rapide en pratique : O(n log n) en moyenne</li>
          <li class="ml-8">Fonctionne en place (peu de mémoire utilisée)</li>
          <li class="ml-8">Très efficace pour grands tableaux</li>
        </ul>
        <div>👎 Inconvénients</div>
        <ul>
          <li class="ml-8">⚠️ Pire cas : O(n²) (si pivot mal choisi)</li>
          <li class="ml-8">
            ⚙️ Récursif → nécessite une bonne gestion de la pile
          </li>
        </ul>
      </template>
      <template v-else-if="activeSort.value === 'insertion'">
        <div class="text-primary text-2xl font-bold mt-4">
          Tri par insertion (Insertion Sort)
        </div>
        <div>📍 Parcourt le tableau de gauche à droite</div>
        <div>
          🧠 Pour chaque élément, cherche sa bonne place dans la partie déjà
          triée
        </div>
        <div>🔁 Décale les éléments plus grands vers la droite</div>
        <div>🧷 Insère l’élément à la bonne position</div>
        <div>✅ Répète jusqu’à la fin du tableau</div>

        <h3 class="text-xl font-bold mt-4">Avantage et inconvénient</h3>
        <div>👍 Avantages</div>
        <ul>
          <li>
            🔥 Très efficace pour petits tableaux ou tableaux presque triés
          </li>
          <li>✅ Facile à implémenter</li>
          <li>📦 En place (pas de copie de tableau)</li>
        </ul>

        <div>👎 Inconvénients</div>
        <ul>
          <li>📉 Performance : O(n²) en pire cas</li>
          <li>⏱️ Lent sur grands tableaux désordonnés</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script setup>
  import Button from "../../../components/Button.vue";
  import Range from "../../../components/Inputs/Range.vue";
  import { getColor, getSize, playSound, sleep, states } from "./Helpers";
  import Serie from "./Serie";
  import BubbleSort from "./SortComponents/BubbleSort";
  import RandomizeSort from "./SortComponents/RandomizeSort";
  import SelectionSort from "./SortComponents/SelectionSort";
  import QuickSort from "./SortComponents/QuickSort";

  import {
    PlayIcon,
    PauseIcon,
    ForwardIcon,
    BackwardIcon,
    SpeakerWaveIcon,
    SpeakerXMarkIcon,
  } from "@heroicons/vue/16/solid";
  import InsertionSort from "./SortComponents/InsertionSort";

  const datas = ref([]);
  const serie = new Serie();
  const playing = ref(false);
  const speed = ref(10);
  const muted = ref(false);
  const itemCount = ref(10);
  const activeSort = ref({});
  const sorts = reactive([
    {
      value: "bubble",
      label: "Tri à bulle (bubble-sort)",
      sortComponent: BubbleSort,
    },
    {
      value: "selection",
      label: "Tri par sélection (selection-sort)",
      sortComponent: SelectionSort,
    },
    {
      value: "quick",
      label: "Tri rapide (quick-sort)",
      sortComponent: QuickSort,
    },
    {
      value: "insertion",
      label: "Tri par insertion (insertion-sort)",
      sortComponent: InsertionSort,
    },
  ]);

  const onSortChange = (value) => {
    serie.setSort(new value.sortComponent());
  };

  const onCountChange = (v) => {
    setRandomizeSort();
  };

  serie.onUpdate(() => {
    datas.value = [...serie.numbers];
  });

  const setRandomizeSort = () => {
    let currentSort = activeSort.value;
    serie.length = itemCount.value;
    serie.setSort(new RandomizeSort());
    serie.applySort().then(() => {
      if (currentSort && currentSort.value) {
        console.log("current", currentSort);
        activeSort.value = currentSort;
        serie.setSort(new activeSort.value.sortComponent());
      } else {
        activeSort.value = "";
      }
    });
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
      await sleep(1000 / speed.value);
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
      if (!muted.value) {
        playSound(datas.value[step.step.indexA].value, serie);
        playSound(datas.value[step.step.indexB].value, serie);
      }
      let indexA = step.step.indexA;
      let indexB = step.step.indexB;
      animatedBars.value[indexA].style.transitionProperty = ``;
      animatedBars.value[indexB].style.transitionProperty = `transform`;

      let positionA = animatedBars.value[indexA].getBoundingClientRect();
      let positionB = animatedBars.value[indexB].getBoundingClientRect();

      let delta = positionB.left - positionA.left;

      animatedBars.value[indexA].style.transform = `translateX(${delta}px)`;
      animatedBars.value[indexB].style.transform = `translateX(${-delta}px)`;

      sleep(1000 / speed.value).then(async () => {
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
      if (!muted.value) {
        playSound(datas.value[step.step.index].value, serie);
      }
    } else if (step.type === "unsorted") {
      datas.value[step.step.index].state = "unsorted";
    } else if (step.type === "save") {
      if (!muted.value) {
        playSound(datas.value[step.step.index].value, serie);
      }
      datas.value[step.step.index].state = "save";
    } else if (step.type === "temp") {
      if (!muted.value) {
        playSound(datas.value[step.step.index].value, serie);
      }
      datas.value[step.step.index].state = "temp";
    }
  };

  onMounted(() => {
    setRandomizeSort();
  });
</script>

<!--
TODO
- OK Pause/resume
- OK Animation while swap values
- OK Change speed animation (make a slide)
- ABANDON Change length of a list
- ABANDON Randomize + animation
- OK Don't click multiple time the same button
-->
