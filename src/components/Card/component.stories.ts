import Card from './Card.vue';
import { CardSection, Button, ButtonGroup } from '../';

export default {
  title: 'Structure/Card',
  component: Card,
};

export const DefaultCard = (args) => ({
  components: { Card, Button, ButtonGroup },

  setup() {
    return { args };
  },

  template: `
    <Card title="Online store dashboard" sectioned>
      <p>View a summary of your online store’s performance.</p>
    </Card>`,
});

export const CardWithHeaderActions = (args) => ({
  components: { Card, Button, ButtonGroup },

  setup() {
    return { args };
  },

  template: `
    <Card title="Variants" sectioned :actions="[{ content: 'Add variant' }]">
      <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
    </Card>`,
});

export const CardWithFooterActions = (args) => ({});

export const CardWithMultipleFooterActions = (args) => ({});

export const CardWithCustomFooterActions = (args) => ({});

export const CardWithDestructiveFooterAction = (args) => ({});

export const CardWithMultipleSections = (args) => ({
  components: { Card, Button, ButtonGroup, CardSection },

  setup() {
    return { args };
  },

  template: `
    <Card title="Online store dashboard">
      <CardSection>
        <p>View a summary of your online store’s performance.</p>
      </CardSection>
      <CardSection>
        View a summary of your online store’s performance, including sales,
        visitors, top products, and referrals.
      </CardSection>
    </Card>`,
});
