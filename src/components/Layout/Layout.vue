<script lang="ts">

import { defineComponent, h } from 'vue';
import LayoutSection from './LayoutSection.vue';

export default defineComponent({
  components: { LayoutSection },

  props: {
    /** Automatically adds sections to layouts. */
    sectioned: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots }) {
    const slotContent = props.sectioned
      ? h(LayoutSection, {}, slots.default())
      : slots.default();

    return () => h('div', { class: 'layout' }, slotContent);
  },
});

</script>

<style lang="scss">
@import "./Layout.scss";
</style>
