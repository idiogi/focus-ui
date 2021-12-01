import Toast from './Toast.vue';
import Frame from '../Frame/Frame.vue';
import Button from '../Button/Button.vue';
import { reactive, ref } from 'vue';

export default {
  title: 'Titles and Text/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

export const ToastHeading = (args) => ({
  components: { Toast, Frame, Button },

  setup() {
    const toastVisible = ref(false);

    return {
      args,
      toastVisible,
      toggleActive: () => toastVisible.value = !toastVisible.value,
    };
  },

  template: `
    <Frame>
      <Button @click="toggleActive">Show toast</Button>
      {{ toastVisible }}
      <Toast :is-visible="toastVisible" content="Gave dingen" />
    </Frame>
  `,
});
