<script lang="ts">

import { defineComponent, PropType, h } from 'vue';

export enum ElementType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
}

export default defineComponent({
  props: {
    /** The element name to use for the heading. */
    element: {
      type: String as PropType<ElementType>,
      default: ElementType.H2,
    },

    /** A unique identifier for the heading, used for reference in anchor links. */
     id: {
      type: String,
      default: null,
    },
  },

  setup(props, { slots }) {
    return () => h(props.element, { class: 'heading', id: props.id }, slots.default());
  }
});

</script>

<style lang="scss">
@import "./Heading";
</style>
