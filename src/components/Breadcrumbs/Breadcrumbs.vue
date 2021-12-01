<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { CallbackAction, LinkAction } from '../../types';

export default defineComponent({
  props: {
    /** Collection of breadcrumbs */
    breadcrumbs: {
      type: Array as PropType<(CallbackAction | LinkAction)[]>,
      default: () => ([]),
    },
  },

  setup(props) {
    return {
      breadcrumb: props.breadcrumbs[props.breadcrumbs.length - 1],
    };
  },
});

</script>

<template>
  <a
    v-if="url in breadcrumb"
    :href="breadcrumb.url"
    class="breadcrumb"
  >
    {{ breadcrumb.content }}
  </a>
  <button
    v-else
    class="breadcrumb"
    type="button"
    @click="breadcrumb.onAction"
  >
    <img
      width="20"
      height="20"
      src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2016a.997.997%200%2001-.707-.293l-5-5a.999.999%200%20010-1.414l5-5a.999.999%200%20111.414%201.414L8.414%2010l4.293%204.293A.999.999%200%200112%2016z%22%20fill%3D%22%235C5F62%22%2F%3E%3C%2Fsvg%3E"
    >
    {{ breadcrumb.content }}
  </button>
</template>

<style lang="scss">
@import "./Breadcrumbs";
</style>
