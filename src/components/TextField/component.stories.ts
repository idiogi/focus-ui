import TextField from './TextField.vue';

export default {
  title: 'Forms/Text field',
  component: TextField,
};

export const DefaultTextField = (args) => ({
  components: { TextField },
  setup() {
    return { args };
  },
  template: `
    <TextField label="Application name" placeholder="Gave dingen" />
  `
});
