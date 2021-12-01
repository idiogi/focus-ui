<script lang="ts">

import { computed, defineComponent, PropType } from 'vue';

export enum Spacing {
  Tight = 'tight',
  Loose = 'loose',
}

export default defineComponent({
  props: {
    spacing: {
      type: String as PropType<Spacing>,
      default: null,
      validator: (value: string): boolean => Object.values(Spacing).includes(value as Spacing),
    },
  },

  setup(props) {
    return {
      classes: computed(() => ([
        'text-container',
        { [`text-container--${props.spacing}`]: props.spacing !== null },
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
@import "./TextContainer.scss";
</style>
