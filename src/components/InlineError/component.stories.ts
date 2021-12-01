import InlineError from './InlineError.vue';

export default {
  title: 'Forms/Inline Error',
  component: InlineError,
};

export const DefaultInlineError = (args) => ({
  components: { InlineError },

  setup() {
    return { args };
  },

  template: `
    <InlineError message="Store name is required" field-id="myFieldID" />
  `,
});
