<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { Button, ButtonGroup, Heading, Stack, StackItem } from '../../components';
import { DisableableAction } from '../../types';

export default defineComponent({
  components: { Button, ButtonGroup, Heading, Stack, StackItem },

  props: {
    title: {
      type: String,
      default: null,
    },

    actions: {
      type: Array as PropType<DisableableAction[]>,
      default: () => ([]),
    },
  },

  setup(props) {
    return {

    };
  }
});

</script>

<template>
  <div class="card__header">
    <Stack alignment="baseline">
      <StackItem fill>
        <Heading v-if="title">
          {{ title }}
        </Heading>
      </StackItem>

      <ButtonGroup>
        <Button
          v-for="(action, index) in actions"
          :key="index"
          plain
          v-bind="action"
        >
          {{ action.content }}
        </Button>
      </ButtonGroup>
    </Stack>
  </div>
</template>
