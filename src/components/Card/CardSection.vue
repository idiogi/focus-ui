<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    /**
     * A less prominent card.
     */
    subdued: {
      type: Boolean,
      default: false,
    },

    /**
     * Minimize the cards' padding.
     */
    shallow: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return {
      classes: computed(() => ([
        'card__section',
        { 'card__section--subdued': props.subdued },
        { 'card__section--shallow': props.shallow },
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
@import "./CardSection";
</style>
