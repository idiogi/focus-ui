import Badge from './Badge.vue';

export default {
  title: 'Images and Icons/Badge',
  component: Badge,
};

export const DefaultBadge = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<badge>Fulfilled</badge>',
});

export const InformationalBadge = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<badge size="small" status="info">Published</badge>',
});

export const SuccessBadge = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<badge status="success">Funds recovered</badge>',
});

export const AttentionBadge = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<badge status="attention">Unfulfilled</badge>',
});

export const CriticalBadge = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<badge status="critical">Not approved</badge>',
});
