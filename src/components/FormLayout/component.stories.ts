import FormLayout from './FormLayout.vue';
import { TextField } from '../../';

export default {
  title: 'Forms/Form layout',
  component: FormLayout,
};

export const DefaultFormLayout = (args) => ({
  components: { FormLayout, TextField },
  setup() {
    return { args };
  },
  template: `
    <FormLayout>
      <TextField label="Application name" />
      <TextField label="Account email" />
    </FormLayout>
  `
});
