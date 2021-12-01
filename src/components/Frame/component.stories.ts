import Frame from './Frame.vue';
import Page from '../Page/Page.vue';

export default {
  title: 'Structure/Frame',
  component: Frame,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultFrame = (args) => ({
  components: { Frame, Page },
  setup() {
    return { args };
  },
  template: `
    <Frame>
      <template v-slot:navigation>
        test
      </template>
      <Page title="3/4 inch Leather pet collar" subtitle="Perfect for any pet">
        <p>Page content</p>
      </Page>
    </Frame>
  `
});
