<script lang="ts">

import { defineComponent } from 'vue';
import TextContainer from '../TextContainer/TextContainer.vue';
import Heading from '../Heading/Heading.vue';

export default defineComponent({
  components: { TextContainer, Heading },

  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
      default: null,
    },

    id: {
      type: String,
      required: false,
      default: null,
    },
  },
});

</script>

<template>
  <div class="layout__annotated-section">
    <div class="layout__annotated-wrapper">
      <div class="layout__annotated">
        <TextContainer>
          <Heading :id="id">
            {{ title }}
          </Heading>
          <div class="layout__annotated-description">
            <p>{{ description }}</p>
          </div>
        </TextContainer>
      </div>

      <div class="layout__annotated-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Layout.scss";
</style>
