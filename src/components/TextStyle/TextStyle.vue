<script lang="ts">

import { computed, defineComponent } from 'vue';

export enum Variation {
  Positive = 'positive',
  Negative = 'negative',
  Strong = 'strong',
  Subdued = 'subdued',
  Code = 'code',
}

export default defineComponent({
  props: {
    /** Give text additional visual meaning. */
    variation: {
      type: String,
      default: null,
      validator: (value: string): boolean => Object.values(Variation).includes(value as Variation),
    },
  },

  setup(props) {
    return {
      classes: computed(() => ([
        'text-style',
        { [`text-style--${props.variation}`]: props.variation },
      ])),
    };
  },
});

</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<style lang="scss">
@import "./TextStyle.scss";
</style>
