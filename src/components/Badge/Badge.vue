<script lang="ts">

import { computed, defineComponent, PropType } from 'vue';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden.vue';

export enum Status {
  Success = 'success',
  Info = 'info',
  Attention = 'attention',
  Critical = 'critical',
}

export default defineComponent({
  components: { VisuallyHidden },

  props: {
    /** Set the color of the badge for the given status. */
    status: {
      type: String as PropType<Status>,
      default: null,
    },
  },

  setup(props) {
    return {
      classes: computed(() => ([
        'badge',
        { [`badge--status-${props.status}`]: props.status },
      ])),
    };
  },
});

</script>

<template>
  <span :class="classes">
    <VisuallyHidden v-if="status">
      {{ status }}
    </VisuallyHidden>
    <slot />
  </span>
</template>

<style lang="scss">
@import "./Badge";
</style>
