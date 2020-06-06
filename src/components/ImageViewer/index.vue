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
    computedImage() {
      return this.chosenImage;
    },
    imgCoordinates() {
      const image = document.getElementById(this.chosenImage.id);
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
    // getCursorPosition(e: Event): CursorPosition {
    //   let x = 0,
    //     y = 0;
    //   e = e || window.event;
    //   // get the x and y positions of the image:
    //   const image = document.getElementById('id');
    //   const imageCoordinates = (image as HTMLElement).getBoundingClientRect();

    //   // calculate the cursor's x and y coordinates, relative to the image: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX
    //   x = (e as MouseEvent).pageX - imageCoordinates.left;
    //   y = (e as MouseEvent).pageY - imageCoordinates.top;

    //   // consider any page scrolling: https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
    //   x = x - window.pageXOffset;
    //   y = y - window.pageYOffset;
    //   return { x, y };
    // }
    // moveLens(e: MouseEvent) {
    //   // prevent any other actions that may occur when moving over the image:
    //   e.preventDefault();

    //   // get the cursor's x and y positions:
    //   let pos = this.getCursorPosition(e);

    //   // calculate the position of the lens:
    //   let x = pos.x - e.getBoundingClientRect().offsetWidth / 2;
    //   let y = pos.y - lens.offsetHeight / 2;
    //   // prevent the lens from being positioned outside the image:
    //   if (x > img.width - lens.offsetWidth) {
    //     x = img.width - lens.offsetWidth;
    //   }
    //   if (x < 0) {
    //     x = 0;
    //   }
    //   if (y > img.height - lens.offsetHeight) {
    //     y = img.height - lens.offsetHeight;
    //   }
    //   if (y < 0) {
    //     y = 0;
    //   }
    //   // set the position of the lens:
    //   lens.style.left = x + 'px';
    //   lens.style.top = y + 'px';
    //   // display what the lens "sees":
    //   result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
    // },
    // imageZoom(imgID: string, resultID: string) {
    //   let img = document.getElementById(imgID) as HTMLImageElement;
    //   let result = document.getElementById(resultID) as HTMLElement;

    //   // create lens:
    //   this.lens = document.createElement('DIV');
    //   lens.setAttribute('class', 'img-zoom-lens');

    //   // insert lens:
    //   (img.parentElement as HTMLElement).insertBefore(lens, img);

    //   // calculate the ratio between result DIV and lens:
    //   let cx = result.offsetWidth / lens.offsetWidth;
    //   let cy = result.offsetHeight / lens.offsetHeight;

    //   // set background properties for the result DIV:
    //   result.style.backgroundImage = "url('" + img.src + "')";
    //   result.style.backgroundSize =
    //     img.width * cx + 'px ' + img.height * cy + 'px';

    //   // execute a function when someone moves the cursor over the image, or the lens:
    //   lens.addEventListener('mousemove', this.moveLens);
    //   img.addEventListener('mousemove', this.moveLens);

    //   // and also for touch screens:
    //   lens.addEventListener('touchmove', this.moveLens);
    //   img.addEventListener('touchmove', this.moveLens);
    // }
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
