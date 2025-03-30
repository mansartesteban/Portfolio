<template>
  <button
    class="select-none h-10 flex items-center justify-center"
    :class="computedBtnClasses"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
      required: false,
      validator: (v) =>
        [
          "primary",
          // "secondary",
          "success",
          "warning",
          "warn",
          "danger",
          "error",
        ].includes(v),
    },
  });

  const computedBtnClasses = computed(() => {
    let classes = [];

    // Colors
    const colors = {
      primary: ["bg-primary text-white"],
      success: ["bg-green-500 text-slate-900"],
      warning: ["bg-amber-500 text-slate-900"],
      warn: ["bg-amber-500 text-slate-900"],
      danger: ["bg-red-500 text-white"],
      error: ["bg-red-500 text-white"],
    };
    classes.push(colors[props.color]);

    // Disabled
    if (props.disabled) {
      classes.push("disabled");
    }

    return classes;
  });
</script>
