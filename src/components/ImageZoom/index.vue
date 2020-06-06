<template>
  <div class="container--full">
    <img
      id="id"
      class="image--full"
      :src="require(`@/assets/${computedImage.src}`)"
      :alt="computedImage.alt"
    />
    <div v-if="showDiv" class="image_zoom_container">Test</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc } from '../ImageViewer/types';
// import { CursorPosition } from '../ImageViewer/types';

export default Vue.extend({
  name: 'ImageZoom',
  data: () => {
    return {
      showDiv: false,
      lens: HTMLElement
    };
  },
  props: {
    chosenImage: {
      type: Object as () => ImageSrc,
      required: true
    }
  },
  computed: {
    computedImage() {
      return this.chosenImage;
    }
  },
  mounted() {
    const div = document.getElementById('id') as HTMLDivElement;
    div.addEventListener('mouseenter', this.changeDiv);
    div.addEventListener('mouseleave', this.changeDiv);
  },
  methods: {
    // Add mousemove while mouseenter
    // Remove mousemove while mouseleave
    changeDiv(): void {
      this.showDiv = !this.showDiv;
    }
  }
});
</script>

<style lang="scss" scoped>
.container--full {
  width: 100%;
  height: 100%;
}
.image--full {
  width: 100%;
  height: 100%;
}

.image_zoom_container {
  position: relative;
  left: 120%;
  width: 100%;
  height: 100%;
}

.img-zoom-lens {
  position: absolute;
  border: 1px solid #d4d4d4;
  /*set the size of the lens:*/
  width: 40px;
  height: 40px;
}
.img-zoom-result {
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 300px;
  height: 300px;
}
</style>
