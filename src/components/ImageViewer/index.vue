<template>
  <div class="container--centrefocus">
    <div class="item--big">
      <ImageZoom :chosenImage="computedImage" />
    </div>
    <div class="item--left" @click="toLeft">
      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </div>
    <div class="item--right" @click="toRight">
      <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
    <div class="myResult">
      <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc } from './types';
import ImageZoom from '@/components/ImageZoom/index.vue';

export default Vue.extend({
  name: 'ImageViewer',
  components: {
    ImageZoom
  },
  data: () => {
    return {
      main: '1',
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
    computedImage(): ImageSrc {
      return this.chosenImage;
    },
    imgCoordinates() {
      const image = document.getElementById(this.computedImage.id);
      return (image as HTMLElement).getBoundingClientRect();
    }
  },
  mounted() {
    // this.;
  },
  methods: {
    toLeft(): void {
      this.$emit('left');
    },
    toRight(): void {
      this.$emit('right');
    }
  }
});
</script>

<style lang="scss" scoped>
.container--centrefocus {
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-rows: 100%;
  align-items: center;
}
.item--big {
  grid-column: 2/4;
}
.item--left {
  grid-column: 1/2;
  grid-row: 1/2;
}
.item--right {
  grid-column: -2/-1;
  grid-row: 1/2;
}
.image--full {
  width: 100%;
  height: 100%;
}
.image_zoom_container {
  position: relative;
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
