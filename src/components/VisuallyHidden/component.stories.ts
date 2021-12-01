import VisuallyHidden from './VisuallyHidden.vue';

export default {
  title: 'Titles and Text/VisuallyHidden',
  component: VisuallyHidden,
};

export const VisuallyHiddenHeading = (args) => ({
  components: { VisuallyHidden },
  setup() {
    return { args };
  },
  template: '<VisuallyHidden>Fulfilled</VisuallyHidden>',
});
