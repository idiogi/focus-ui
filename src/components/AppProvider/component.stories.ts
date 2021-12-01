import AppProvider from './AppProvider.vue';

export default {
  title: 'Structure/AppProvider',
  component: AppProvider,
};

const Template = (args) => ({
  components: { AppProvider },
  setup() {
    return { args };
  },
  template: `
    <AppProvider />`,
});

export const DefaultProvider = Template.bind({});

DefaultProvider.args = {};
