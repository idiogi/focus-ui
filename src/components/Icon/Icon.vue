<script lang="ts">

import { computed, defineComponent } from 'vue';
import Cancel from '../../assets/icons/cancel.vue';
import CircleAlert from '../../assets/icons/circle-alert.vue';
import QuestionMark from '../../assets/icons/question-mark.vue';
import Select from '../../assets/icons/select.vue';

const icons = {
  'cancel': Cancel,
  'circle-alert': CircleAlert,
  'question-mark': QuestionMark,
  'select': Select,
};

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value: string): boolean => Object.prototype.hasOwnProperty.call(icons, value),
    },

    large: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return {
      classes: computed(() => ([
        'icon',
        { 'icon--large': props.large },
      ])),
      iconComponent: computed(() => {
        return icons[props.icon];
      }),
    };
  },
});

</script>

<template>
  <div :class="classes">
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
