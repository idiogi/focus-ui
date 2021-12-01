<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    /** Page title, in large type */
    title: {
      type: String,
      required: true,
      default: null,
    },

    /** Page subtitle, in regular type. */
    subtitle: {
      type: String,
      default: null,
    },
  },
});

</script>

<template>
  <div>
    <div class="page-title">
      {{ title }}
    </div>

    <div
      v-if="subtitle"
      class="page-subtitle"
    >
      {{ subtitle }}
    </div>
  </div>
</template>

<style lang="scss">
@import "./PageTitle";
</style>
