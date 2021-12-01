import ButtonGroup from './ButtonGroup.vue';
import { Button } from '../Button';

export default {
  title: 'Actions/ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => ({
  components: { ButtonGroup, Button },
  setup() {
    return { args };
  },
  template: `
    <ButtonGroup v-bind="args">
      <Button primary>A Button</Button>
      <Button>Another Button</Button>
    </ButtonGroup>`,
});

export const DefaultButtonGroup = Template.bind({});

DefaultButtonGroup.args = {};
