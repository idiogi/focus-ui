<script lang="ts">

import { defineComponent, PropType } from 'vue';
import Title from './Title.vue';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.vue';
import { CallbackAction, LinkAction } from '../../types';

export default defineComponent({
  components: { Breadcrumbs, Title },

  props: {
    /** Page title, in large type */
    title: {
      type: String,
      required: true,
      default: null,
    },

    /** Page subtitle, in regular type. */
    subtitle: {
      type: String,
      default: null,
    },

    /** Primary page-level action. */
    primaryAction: {
      type: Object,
      default: null,
    },

    /** Collection of secondary page-level actions. */
    secondaryAction: {
      type: Object,
      default: null,
    },

    /** Collection of breadcrumbs */
    breadcrumbs: {
      type: Array as PropType<(CallbackAction | LinkAction)[]>,
      default: () => ([]),
    },
  },

  setup() {

  },
});

</script>

<template>
  <div class="page-header">
    <div class="page-header__row">
      <Breadcrumbs
        v-if="breadcrumbs.length > 0"
        :breadcrumbs="breadcrumbs"
      />
    </div>
    <div class="page-header__row">
      <Title
        :title="title"
        :subtitle="subtitle"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "./PageHeader.scss";
</style>
