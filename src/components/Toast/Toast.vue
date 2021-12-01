<script lang="ts">

import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue';
import Icon from '../Icon/Icon.vue';

export const DEFAULT_TOAST_DURATION = 5000;

export default defineComponent({
  components: { Icon },

  props: {
    /** The content that should appear in the toast message. */
    content: {
      type: String,
      required: true,
    },

    /** If the toast is visible by default. */
    isVisible: {
      type: Boolean,
      default: false,
    },

    /** The length of time in milliseconds the toast message should persist. */
    duration: {
      type: Number,
      default: DEFAULT_TOAST_DURATION,
    },

    destroyOnClose: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const isMounted = ref(false);

    onMounted(() => {
      isMounted.value = true;
    });

    watchEffect(() => {
      setTimeout(() => {
        console.log('uitzetten');
      }, props.duration);
    });

    return {
      isMounted,
      visible: computed(() => props.isVisible),
    };
  },
});

</script>

<template>
  <teleport
    v-if="isMounted"
    to="#toast-manager"
  >
    <div
      v-if="visible"
      ref="toast"
      aria-live="polite"
    >
      <div class="toast">
        <span class="toast__content">{{ content }}</span>
        <button
          type="button"
          class="toast__close-button"
          @click="close"
        >
          <Icon icon="cancel" />
        </button>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss">
@import "./Toast.scss";
</style>
