<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    /** The label for the input. */
    label: {
      type: String,
      required: true,
    },

    /** Specifies which form element a label is bound to. */
    labelFor: {
      type: String,
      default: null,
    },

    /** Hides the label. */
    labelHidden: {
      type: Boolean,
      default: false,
    },
  },
});

</script>

<template>
  <label
    v-if="! labelHidden"
    :for="labelFor"
    class="input-label"
  >
    {{ label }}
  </label>
</template>

<style lang="scss">
@import "./InputLabel";
</style>
