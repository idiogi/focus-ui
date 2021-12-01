<script lang="ts">

import { defineComponent } from 'vue';
import Icon from '../Icon/Icon.vue';

export default defineComponent({
  components: { Icon },
});

</script>

<template>
  <div class="footer-help">
    <div class="footer-help__content">
      <div class="footer-help__icon">
        <Icon icon="question-mark" />
      </div>
      <div class="footer-help__txt">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./FooterHelp.scss";
</style>
