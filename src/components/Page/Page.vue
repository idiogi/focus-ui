<script lang="ts">

import { defineComponent } from 'vue';
import Header from './Header.vue';

export default defineComponent({
  components: { Header },

  props: {
    /** Remove the normal max-width on the page. */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    /** Primary page-level action. */
    primaryAction: {
      type: Object,
    },

    /** Collection of secondary page-level actions. */
    secondaryAction: {
      type: Object,
    },

    /** The page title, in large type. */
    title: {
      type: String,
      required: true,
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
  <div
    :class="{ 'page--full-width': fullWidth }"
    class="page"
  >
    <Header v-bind="$props" />
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import "./Page.scss";
</style>
