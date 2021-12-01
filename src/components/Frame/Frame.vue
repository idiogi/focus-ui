<script lang="ts">

import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup(_, { slots }) {
    const hasNavigation = computed(() => typeof slots['navigation'] === 'function');
    const hasTopBar = computed(() => typeof slots['top-bar'] === 'function');

    return {
      hasNavigation,
      hasTopBar,
      classes: computed(() => ([
        'frame',
        { 'frame--sans-nav': !hasNavigation.value },
      ])),
    };
  },
});

</script>

<template>
  <div :class="classes">
    <header
      v-if="hasTopBar"
      class="frame__top-bar"
    >
      <slot name="top-bar" />
    </header>

    <nav
      v-if="hasNavigation"
      class="frame__navigation"
    >
      <slot name="navigation" />
    </nav>

    <main class="frame__main">
      <slot />
    </main>
  </div>
  <div id="toast-manager" />
  <div id="modal-manager" />
</template>

<style lang="scss">
@import "./Frame.scss";
</style>
