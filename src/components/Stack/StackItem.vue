<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'StackItem',

  props: {
    /** Fill the remaining horizontal space in the stack with the item. */
    fill: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      classes: computed(() => [
        'stack-item',
        { 'stack-item--fill': props.fill },
      ])
    };
  },
});

</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
