<script lang="ts">

import { Spinner } from '../Spinner';
import { computed, defineComponent, h, reactive } from 'vue';

export default defineComponent({
  components: { Spinner },

  props: {
    /** Visually hidden text for screen readers. */
    ariaLabel: {
      type: String,
    },

    /** Id of the element this button controls. */
    ariaControls: {
      type: String,
    },

    /** Tells the screen reader the controlled element is expanded. */
    ariaExpanded: {
      type: Boolean,
      default: false,
    },

    /** A unique identifier for the button. */
    id: {
      type: String,
    },

    /** Disables the button, disallowing interaction. */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Forces the url to open in a new tab. */
    external: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      required: false,
    },

    /** Replaces the button text with a spinner. */
    loading: {
      type: Boolean,
      default: false,
    },

    /** Provides extra visual weight and identifies the primary action in a set of buttons. */
    primary: {
      type: Boolean,
      default: false,
    },

    /** Indicates a dangerous or potentially negative action. */
    destructive: {
      type: Boolean,
      default: false,
    },

    /** Renders a button that looks like a link. */
    plain: {
      type: Boolean,
      default: false,
    },

    /** A destination to link to, rendered in a href attribute of a link. */
    url: {
      type: String,
      default: null,
    },

    /** Allows the button to submit a form. */
    submit: {
      type: Boolean,
      default: false,
    },

    /** Denotes the target route of the link. */
    to: {
      type: [String, Object],
    },
  },

  setup(props, { slots }) {
    props = reactive(props);

    const isDisabled = computed(() => props.disabled || props.loading);

    const classes = computed(() => ({
      'button': !props.plain,
      'button-plain': props.plain,
      'button--primary': props.primary,
      'button--destructive': props.destructive,
      'button--loading': props.loading,
      'button--disabled': isDisabled.value,
    }));

    const label = h('span', { class: 'button__label' }, slots.default());

    const buttonType = computed(() => props.submit ? 'submit' : 'button');

    const defaultAttrs = {
      ariaLabel: props.ariaLabel,
      ariaControls: props.ariaControls,
      ariaExpanded: props.ariaExpanded,
      ariaDisabled: props.disabled,
      id: props.id,
      target: props.external ? '_blank' : null,
      disabled: isDisabled.value,
      tabindex: 0,
    };

    if (props.url !== null) {
      return () => h('a', {
        ...defaultAttrs,
        href: props.url,
        class: classes.value,
      }, [label, props.loading ? h(Spinner) : null]);
    }

    return () => h('button', {
      ...defaultAttrs,
      role: 'button',
      type: buttonType.value,
      class: classes.value,
    }, [label, props.loading ? h(Spinner) : null]);
  },
});

</script>

<style lang="scss">
@import "./Button";
</style>
