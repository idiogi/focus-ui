import TextStyle from './TextStyle.vue';

export default {
  title: 'Titles and text/Text style',
  component: TextStyle,
};

export const SubduedTextStyle = (args) => ({
  components: { TextStyle },

  setup() {
    return { args };
  },

  template: '<TextStyle variation="subdued">No supplier listed</TextStyle>',
});

export const StrongTextStyle = (args) => ({
  components: { TextStyle },

  setup() {
    return { args };
  },

  template: '<TextStyle variation="strong">Total</TextStyle>',
});

export const PositiveTextStyle = (args) => ({
  components: { TextStyle },

  setup() {
    return { args };
  },

  template: '<TextStyle variation="positive">Orders increased</TextStyle>',
});

export const NegativeTextStyle = (args) => ({
  components: { TextStyle },

  setup() {
    return { args };
  },

  template: '<TextStyle variation="negative">Orders decreased</TextStyle>',
});

export const CodeTextStyle = (args) => ({
  components: { TextStyle },

  setup() {
    return { args };
  },

  template: `
    <p>
    New URL that visitors should be forwarded to. If you want your store’s
    homepage, <TextStyle variation="code">enter / (a forward slash).</TextStyle>
    </p>
  `,
});
