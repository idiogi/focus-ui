<script lang="ts">

import { defineComponent, h } from 'vue';

export default defineComponent({
  setup(_, { slots }) {
    return () => h('div', { class: 'form-layout' }, slots.default().map((slot) => {
      return h('div', { class: 'form-layout__item' }, slot);
    }));
  },
});

</script>

<style lang="scss">
@import "./FormLayout";
</style>
