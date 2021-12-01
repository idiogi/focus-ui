import MyButton from './Button.vue';

export default {
  title: 'Actions/Button',
  component: MyButton,
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args">{{ args.label }}</my-button>',
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true,
};
