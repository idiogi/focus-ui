<script lang="ts">

import { defineComponent } from 'vue';
import { useUniqueId } from '../../composables/useUniqueId';
import Icon from '../Icon/Icon.vue';

export default defineComponent({
  components: { Icon },

  props: {
    /** Content briefly explaining how to resolve the invalid form field input. */
    message: {
      type: String,
      required: true,
    },

    /** Unique identifier of the invalid form field that the error message describes */
    fieldId: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    const errorId = props.fieldId || useUniqueId('error');

    return {
      errorId,
    };
  },
});

</script>

<template>
  <div
    :id="errorId"
    class="inline-error"
  >
    <div class="inline-error__icon">
      <Icon icon="circle-alert" />
    </div>
    {{ message }}
  </div>
</template>

<style lang="scss">
@import "./InlineError";
</style>
