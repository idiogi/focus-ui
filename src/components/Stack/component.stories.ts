import Stack from './Stack.vue';
import StackItem from './StackItem.vue';
import { Heading } from '../../';

export default {
  title: 'Structure/Stack',
  component: Stack,
};

export const DefaultStack = (args) => ({
  components: { Stack },
  setup() {
    return { args };
  },
  template: `
  <Stack>
    <div>Paid</div>
    <div>Processing</div>
    <div>Fulfilled</div>
    <div>Completed</div>
  </Stack>
  `,
});

export const SpacingOptions = (args) => ({
  components: { Stack },
  setup() {
    return { args };
  },
  template: `
    <Stack spacing="loose">
      <div>Paid</div>
      <div>Fulfilled</div>
    </Stack>
  `,
});

export const VerticalCenteringWithAStack = (args) => ({
  components: { Stack, Heading },
  setup() {
    return { args };
  },
  template: `
  <Stack alignment="center">
    <Heading>
      Order
      <br />
      #1136
      <br />
      was paid
    </Heading>
    <div>Paid</div>
    <div>Fulfilled</div>
  </Stack>
  `,
});

export const FillAvailableSpaceProportionally = (args) => ({
  components: { Stack, Heading },
  setup() {
    return { args };
  },
  template: `
    <Stack distribution="fill">
      <Heading>Order #1136</Heading>
      <div>Paid</div>
      <div>Fulfilled</div>
    </Stack>
  `,
});

export const StackWhereItemsFillSpaceEvenly = (args) => ({
  components: { Stack, Heading },
  setup() {
    return { args };
  },
  template: `
    <Stack distribution="fill-evenly">
      <Heading>Order #1136</Heading>
      <div>Paid</div>
      <div>Fulfilled</div>
    </Stack>
  `,
});

export const StackWhereASingleItemFillsTheRemainingSpace = (args) => ({
  components: { Stack, StackItem, Heading },
  setup() {
    return { args };
  },
  template: `
    <Stack>
      <StackItem fill>
        <Heading>Order #1136</Heading>
      </StackItem>
      <div>Paid</div>
      <div>Fulfilled</div>
    </Stack>
  `,
});
