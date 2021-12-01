import Page from './Page.vue';

export default {
  title: 'Structure/Page',
  component: Page,
};

export const DefaultPage = (args) => ({
  components: { Page },

  setup() {
    return { args };
  },

  template: `
    <Page title="3/4 inch Leather pet collar" subtitle="Perfect for any pet">
      <p>Page content</p>
    </Page>
  `,
});
