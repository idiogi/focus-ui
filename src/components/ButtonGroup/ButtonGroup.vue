<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    /** Buttons with stretch/shrink to occupy the full width. */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    /** Join buttons as a segmented group. */
    segmented: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return {
      classes: computed(() => ([
        'button-group',
        { 'button-group--fullWidth': props.fullWidth },
        { 'button-group--segmented': props.segmented }
      ])),
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
@import "./ButtonGroup";
</style>
