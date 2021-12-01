import FooterHelp from './FooterHelp.vue';
import Link from '../Link/Link.vue';

export default {
  title: 'Navigation/FooterHelp',
  component: FooterHelp,
};

const Template = (args) => ({
  components: { FooterHelp, Link },
  setup() {
    return { args };
  },
  template: `
    <FooterHelp>
    Learn more about <Link external url="https://help.idiogi.com/manual">fulfiling orders</Link>
    </FooterHelp>
  `,
});

export const DefaultFooterHelp = Template.bind({});
