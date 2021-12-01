<script lang="ts">

import { computed, defineComponent } from 'vue';
import Cancel from '../../assets/icons/cancel.vue';
import CircleAlert from '../../assets/icons/circle-alert.vue';
import QuestionMark from '../../assets/icons/question-mark.vue';

const icons = {
  'cancel': Cancel,
  'circle-alert': CircleAlert,
  'question-mark': QuestionMark,
};

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value: string): boolean => Object.prototype.hasOwnProperty.call(icons, value),
    },
  },

  setup(props) {
    return {
      iconComponent: computed(() => {
        return icons[props.icon];
      }),
    };
  },
});

</script>

<template>
  <div class="icon">
    <div class="icon__image">
      <component
        :is="iconComponent"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "./Icon";
</style>
