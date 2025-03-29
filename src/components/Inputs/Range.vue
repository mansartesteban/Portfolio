<template>
  <div class="flex flex-col justify-center">
    <label
      v-if="label"
      for="default-range"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <input
      id="default-range"
      type="range"
      v-model="model"
      :min="min"
      :max="max"
      :step="step"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String,
    min: [String, Number],
    max: [String, Number],
    step: [String, Number],
  });

  const model = defineModel();
</script>
