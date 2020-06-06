<template>
  <div>
    <div v-for="image in test" :key="image.id">
      <div :id="image.id">
        <img :src="image.src" :alt="image.alt" srcset="" />

        <!-- https://html.com/attributes/img-srcset/ -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc } from '@/components/ImageViewer/types.ts';

export default Vue.extend({
  name: 'Example',
  components: {},
  props: {
    images: {
      type: Array as () => Array<ImageSrc>
    }
  },
  computed: {
    test() {
      return this.images;
    }
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
// header > div {
//   justify-content: space-between !important;
//   background-color: red;
// }
</style>
