import Select from './Select.vue';
import { ref } from 'vue';

export default {
  title: 'Forms/Select',
  component: Select,
};

export const DefaultSelect = (args) => ({
  components: { Select },

  setup() {
    return {
      args,
      value: ref(1),
      handleSelectChange: () => console.log('test'),
    };
  },

  template: `
    {{ value }}
    <Select label="Test label" v-model="value" :options="[
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 days', value: 'lastWeek'},
    ]" />
  `,
});
