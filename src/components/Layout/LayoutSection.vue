<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    secondary: {
      type: Boolean,
      default: false,
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    oneHalf: {
      type: Boolean,
      default: false,
    },

    oneThird: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const classes = computed(() => ([
      'layout__section',
      { 'layout__section--secondary': props.secondary },
      { 'layout__section--full-width': props.fullWidth },
      { 'layout__section--one-half': props.oneHalf },
      { 'layout__section--one-third': props.oneThird },
    ]));

    return {
      classes,
    };
  },
});

</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="scss">
@import "./Layout.scss";
</style>
