<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { Stack, Distribution as StackDistribution } from '../Stack';
import { ComplexAction, DisableableAction, LoadableAction } from '../../types';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

export default defineComponent({
  components: { Stack, Button, ButtonGroup },

  props: {
    /** The primary action for the page. */
    primaryAction: {
      type: Object as PropType<DisableableAction & LoadableAction>,
      required: true,
    },

    /** The secondary actions for the page */
    secondaryActions: {
      type: Array as PropType<ComplexAction[]>,
      default: () => ([]),
    },
  },

  setup(props) {
    const distribution = props.secondaryActions.length > 0
      ? StackDistribution.EqualSpacing
      : StackDistribution.Trailing;

    return {
      distribution,
    };
  },
});

</script>

<template>
  <div class="page-actions">
    <Stack :distribution="distribution">
      <ButtonGroup v-if="secondaryActions.length">
        <Button
          v-for="(action, actionIndex) in secondaryActions"
          v-bind="action"
          :key="actionIndex"
        >
          {{ action.content }}
        </Button>
      </ButtonGroup>
      <Button
        primary
        v-bind="primaryAction"
      >
        {{ primaryAction.content }}
      </Button>
    </Stack>
  </div>
</template>

<style lang="scss">
@import "./PageActions.scss";
</style>
