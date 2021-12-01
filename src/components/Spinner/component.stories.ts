import Spinner from './Spinner.vue';

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
};

const Template = (args) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<spinner v-bind="args" />',
});

export const DefaultSpinner = Template.bind({});
