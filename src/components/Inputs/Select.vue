<template>
  <form class="w-full mx-auto">
    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <select
      v-model="model"
      @change="onChange"
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option
        selected
        disabled
      >
        {{ label }}
      </option>
      <option
        v-for="option in computedOptions"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </form>
</template>

<script setup>
  const props = defineProps({
    options: {
      type: Array,
    },
    label: String,
    returnValue: {
      type: String,
      default: null,
    },
  });

  const emit = defineEmits(["change", "update:modelValue"]);
  const model = defineModel({
    set: (v) => {
      let option = computedOptions.value.find((option) => option.value === v);
      let value = props.returnValue ? option[props.returnValue] : option;
      return value;
    },
  });

  const computedOptions = computed(() => {
    return props.options.map((option) => {
      if (typeof option === "object") {
        return option;
      } else {
        return {
          label: option,
          value: option,
        };
      }
    });
  });

  const onChange = () => {
    let value = props.returnValue
      ? model.value[props.returnValue]
      : model.value;
    console.log("value to emit", model.value, props.returnValue, value);
    emit("change", value);
  };
</script>
