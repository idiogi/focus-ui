import Toast from './Toast.vue';

export default {
  title: 'Titles and Text/Toast',
  component: Toast,
};

export const ToastHeading = (args) => ({
  components: { Toast },
  setup() {
    return { args };
  },
  template: '<Toast>Fulfilled</Toast>',
});
