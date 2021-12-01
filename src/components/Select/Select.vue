<script lang="ts">

import { computed, defineComponent } from 'vue';
import InputLabel from '../InputLabel/InputLabel.vue';
import { useUniqueId } from '../../composables/useUniqueId';
import Icon from '../Icon/Icon.vue';

export default defineComponent({
  components: { InputLabel, Icon },

  props: {
    modelValue: {
      type: [String, Number],
    },

    options: {
      type: Array,
      default: () => ([]),
    },

    /** Disable the input. */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** ID for the input. */
    id: {
      type: String,
      default: null,
    },

    /** Label for the input. */
    label: {
      type: String,
      default: null,
    },

    /** Specifies which form element a label is bound to. */
    labelFor: {
      type: String,
      default: null,
    },

    /** Hides the label. */
    labelHidden: {
      type: Boolean,
      default: false,
    },

    /** The placeholder text. */
    placeholder: {
      type: String,
      default: null,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const elementId = computed(() => props.id || useUniqueId('select'));

    return {
      elementId,
      onChange: (e) => emit('update:modelValue', e.target.value),
    };
  },
});

</script>

<template>
  <InputLabel
    v-if="label"
    :label="label"
    :label-for="elementId"
    :label-hidden="labelHidden"
  />
  <div
    class="select-input"
    tabindex="0"
  >
    <select
      :id="elementId"
      :aria-disabled="disabled"
      :disabled="disabled"
      :value="modelValue"
      @change="onChange"
    >
      <option
        v-if="placeholder"
        value=""
        disabled
        selected
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, key) in options"
        :key="key"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <div class="select-input__content">
      <div class="select-input__selected-option">
        {{ modelValue }}
      </div>
      <div class="select-input__icon">
        <Icon
          icon="select"
          large
        />
      </div>
    </div>
    <div class="select-input__backdrop" />
  </div>
</template>

<style lang="scss">
@import "./Select";
</style>
