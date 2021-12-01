<script lang="ts">

import { computed, defineComponent } from 'vue';
import { useUniqueId } from '../../composables/useUniqueId';
import InputLabel from '../InputLabel/InputLabel.vue';

export enum FieldTypes {
  Email = 'email',
  Number = 'number',
  Password = 'password',
  Search = 'search',
  Tel = 'tel',
  Text = 'text',
  URL = 'url',
}

export default defineComponent({
  components: { InputLabel },

  props: {
    /** Indicates the id of a component controlled by the input. */
    ariaControls: {
      type: String,
      default: null,
    },

    /** Automatically focus the input. */
    autoFocus: {
      type: Boolean,
      default: false,
    },

    /** Force the focus state on the input. */
    focussed: {
      type: Boolean,
      default: false,
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

    /** The input type. */
    type: {
      type: String,
      default: FieldTypes.Text,
      validator: (value: string): boolean => Object.values(FieldTypes).includes(value as FieldTypes),
    },

    /** Indicates whether or not the character count should be displayed. */
    showCharacterCount: {
      type: Boolean,
      default: false,
    },

    /** Maximum character length for an input. */
    maxLength: {
      type: Number,
      default: null,
    },
  },

  emits: ['update'],

  setup(props, { emit }) {
    const elementId = computed(() => props.id || useUniqueId('textField'));

    const classes = computed(() => ([
      'text-field',
    ]));

    return {
      elementId,
      classes,
      onChanged: (e) => emit('update', e),
    };
  },
});

</script>

<template>
  <div :class="classes">
    <InputLabel
      v-if="label"
      :label="label"
      :label-for="elementId"
      :label-hidden="labelHidden"
    />

    <input
      :id="elementId"
      :type="type"
      class="text-field__input"
      :aria-controls="ariaControls"
      :aria-disabled="disabled"
      :autofocus="autoFocus"
      :disabled="disabled"
      :maxlength="maxLength"
      :placeholder="placeholder"
      autocomplete="off"
      tabindex="0"
      v-bind="$attrs"
      @input="onChanged"
    >
  </div>
</template>

<style lang="scss">
@import "./TextField";
</style>
