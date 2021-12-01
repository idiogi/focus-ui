import Heading from './Heading.vue';
import { Button } from '../Button';

export default {
  title: 'Titles and Text/Heading',
  component: Heading,
};

export const TypographicHeading = (args) => ({
  components: { Heading, Button },
  setup() {
    return { args };
  },
  template: `
    <Heading v-bind="args">Online store dashboard</Heading>`,
});
