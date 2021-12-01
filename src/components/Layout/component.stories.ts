import Layout from './Layout.vue';
import LayoutSection from './LayoutSection.vue';
import AnnotatedLayoutSection from './AnnotatedLayoutSection.vue';
import Card from '../Card/Card.vue';
import FormLayout from '../FormLayout/FormLayout.vue';
import TextField from '../TextField/TextField.vue';
import Button from '../Button/Button.vue';

export default {
  title: 'Structure/Layout',
  component: Layout,
};

export const OneColumnLayout = (args) => ({
  components: { Layout, LayoutSection, Card },

  setup() {
    return { args };
  },

  template: `
    <Layout>
    <LayoutSection>
      <Card title="Online store dashboard" sectioned>
        <p>View a summary of your online store’s performance.</p>
      </Card>
    </LayoutSection>
    </Layout>
  `,
});

export const TwoColumnsWithPrimaryAndSecondaryWidths = (args) => ({
  components: { Layout, LayoutSection, Card },

  setup() {
    return { args };
  },

  template: `
    <Layout>
    <LayoutSection>
      <Card title="Order details" sectioned>
        <p>View a summary of your order.</p>
      </Card>
    </LayoutSection>
    <LayoutSection secondary>
      <Card title="Tags" sectioned>
        <p>Add tags to your order.</p>
      </Card>
    </LayoutSection>
    </Layout>
  `,
});

export const TwoColumnsWithEqualWidth = (args) => ({
  components: { Layout, LayoutSection, Card },

  setup() {
    return { args };
  },

  template: `
    <Layout>
    <LayoutSection one-half>
      <Card title="Order details" sectioned>
        <p>View a summary of your order.</p>
      </Card>
    </LayoutSection>
    <LayoutSection one-half>
      <Card title="Tags" sectioned>
        <p>Add tags to your order.</p>
      </Card>
    </LayoutSection>
    </Layout>
  `,
});

export const AnnotatedLayout = (args) => ({
  components: { Layout, AnnotatedLayoutSection, LayoutSection, Card, FormLayout, TextField, Button },

  setup() {
    return { args };
  },

  template: `
    <Layout>
    <AnnotatedLayoutSection id="storeDetails" title="Store details" description="Shopify and your customers will use this information to contact you.">
      <Card sectioned>
        <FormLayout>
          <TextField label="Store name" />
          <TextField
            type="email"
            label="Account email"
            autoComplete="email"
          />
          <Button>Save changes</Button>
        </FormLayout>
      </Card>
    </AnnotatedLayoutSection>
    </Layout>
  `,
});
