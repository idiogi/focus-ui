<script lang="ts">

import { defineComponent, h, resolveComponent } from 'vue';

export default defineComponent({
  props: {
    /** Use for a link that opens in a different window. */
    external: {
      type: Boolean,
      default: false,
    },

    /** The url to link to. */
    url: {
      type: String,
      default: null,
    },

    /** Denotes a target route of the link. */
    to: {
      type: [String, Object],
      default: null,
    },
  },

  setup(props, { slots }) {
    const attrs = {};

    if (props.external) {
      attrs.target = '_blank';
      attrs.rel = 'noopener noreferrer';
    }

    if (props.to) {
      const component = resolveComponent('router-link');
      return () => h(component, {
        ...attrs,
        to: props.to,
        class: 'link',
      }, [slots.default()]);
    }

    return () => h('a', {
      ...attrs,
      href: props.url,
      class: 'link'
    }, [slots.default()]);
  },
});

</script>

<style lang="scss">
@import "./Link.scss";
</style>
