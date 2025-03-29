<template>
  <div
    v-for="(item, index) in items"
    class="flex pt-4 h-full"
  >
    <div
      class="flex flex-col items-center animate__animated animate__fadeInLeft"
      :style="`animation-delay: ${index * 700 + 500}ms`"
    >
      <div
        class="rounded-full p-[.25rem] bg-slate-700 border-slate-700 border-4 top-10 relative"
      >
        <component
          v-if="item.icon"
          :is="item.icon"
          class="w-4 h-4 text-slate-500"
        ></component>
        <div
          v-else
          class="rounded-full w-4 h-4 border-slate-500 border-4 border-dotted"
        ></div>
      </div>
      <div class="border-l-4 border-solid border-slate-700 flex-1 mt-4"></div>
    </div>

    <div
      class="relative flex flex-col rounded-xl bg-slate-700 mt-8 ml-8 lg:m-8 p-4 flex-1 transition-transform animate__animated animate__fadeInRight"
      :class="index === 0 && 'border border-amber-400'"
      :style="`animation-delay: ${index * 700 + 500}ms`"
    >
      <div
        class="absolute bg-slate-700 w-4 h-4 top-4 -left-2 rotate-45 border-l border-b"
        :class="index === 0 ? 'border-amber-400' : 'border-slate-700'"
      ></div>
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-xl font-bold title">{{ item.title }}</span>
          <span
            >{{ item.dateFrom }} - {{ item.dateTo }}
            <span class="font-bold text-xs"
              >({{
                `${item.duration.years} ans
                            ${item.duration.months}
                            mois`
              }})</span
            ></span
          >
        </div>
        <div
          class="flex flex-col align-center justify-center rounded-xl bg-white h-10 md:h-12 lg:h-16 w-16 md:w-20 lg:w-32"
        >
          <img
            :src="item.image"
            class="object-contain m-2 md:m-4 lg:m-6"
          />
        </div>
      </div>
      <div class="text-lg font-bold title mt-4 mb-2 text-slate-500">
        {{ item.subtitle }}
      </div>
      <div class="w-full">
        <slot
          name="item-content"
          v-bind="{ item }"
        ></slot>
        <div
          v-if="item.subitems"
          class="mt-4"
        >
          <div class="font-bold my-4">Mes fiertés</div>
          <div
            v-for="subitem in item.subitems"
            class="ml-4"
          >
            <li>{{ subitem }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    items: Array,
  });
</script>
