<script lang="ts">

import { defineComponent } from 'vue';
import Title from './Title.vue';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.vue';

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
    },

    secondaryAction: {
      type: Object,
    },
  },

  setup() {

  },
});

</script>

<template>
  <div class="page-header">
    <div class="page-header__row">
      <Breadcrumbs :breadcrumbs="[{ content: 'Products' }]" />
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
