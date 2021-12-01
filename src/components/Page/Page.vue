<script lang="ts">

import { defineComponent, PropType } from 'vue';
import Header from './Header.vue';
import { CallbackAction, LinkAction } from '../../types';

export default defineComponent({
  components: { Header },

  props: {
    /** Collection of breadcrumbs */
    breadcrumbs: {
      type: Array as PropType<(CallbackAction | LinkAction)[]>,
      default: () => ([]),
    },

    /** Remove the normal max-width on the page. */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    /** Primary page-level action. */
    primaryAction: {
      type: Object,
      default: null,
    },

    /** Collection of secondary page-level actions. */
    secondaryAction: {
      type: Object,
      default: null,
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
