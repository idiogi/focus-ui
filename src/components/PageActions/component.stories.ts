import PageActions from './PageActions.vue';

export default {
  title: 'Structure/Page Actions',
  component: PageActions,
};

export const DefaultPageActions = (args) => ({
  components: { PageActions },
  setup() {
    return { args };
  },
  template: `<PageActions :primaryAction="{ content: 'Save' }" :secondary-actions="[{ content: 'Delete', destructive: true }]" />`,
});
