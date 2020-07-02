<template>
  <div class="container--full">
    <img
      id="image"
      :src="require(`@/assets/${computedImage.src}`)"
      :alt="computedImage.alt"
      class="image--full"
      width="185"
      height="235"
    />
    <div
      :class="{ no_display: !showDiv }"
      class="image_zoom_lens"
      id="lens"
    ></div>
    <div
      :class="{ no_display: !showDiv }"
      class="image_zoom_result"
      id="result"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc } from '@/store/types';

export default Vue.extend({
  name: 'ImageZoom',
  data: () => {
    return {
      showDiv: false
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
    const img = document.getElementById('image') as HTMLImageElement;
    const lens = document.getElementById('lens') as HTMLDivElement;
    if (document.documentElement.clientWidth < 768) {
      return;
    }
    img.addEventListener('mousemove', this.imageZoom);
    img.addEventListener('touchmove', this.imageZoom);
    lens.addEventListener('mousemove', this.imageZoom);
    lens.addEventListener('touchmove', this.imageZoom);
    lens.addEventListener('mouseleave', this.removeLens);
  },
  methods: {
    changeDiv(show: boolean): void {
      this.showDiv = show;
    },
    removeLens(): void {
      this.changeDiv(false);
    },
    imageZoom(e: Event) {
      if (!this.showDiv) {
        this.changeDiv(true);
      }

      // https://www.w3schools.com/howto/howto_js_image_zoom.asp
      const img = document.getElementById('image') as HTMLImageElement;
      const lens = document.getElementById('lens') as HTMLDivElement;
      const result = document.getElementById('result') as HTMLDivElement;

      // Get ratio between result div and lens
      const compareX = result.offsetWidth / lens.offsetWidth;
      const compareY = result.offsetHeight / lens.offsetHeight;

      result.style.backgroundImage = "url('" + img.src + "')";
      result.style.backgroundSize =
        '' + img.width * compareX + 'px ' + img.height * compareY + 'px';

      // prevent any other actions that may occur when moving over the image:
      e.preventDefault();

      // Get cursor position w/in image frame
      const pos = this.getCursorPosition(e);

      // Get offsetLeft and offsetTop lens
      let x = pos.x - lens.offsetWidth / 2 + img.offsetLeft;
      let y = pos.y - lens.offsetHeight / 2 + img.offsetTop;

      // Prevent lens from being positioned outside image
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      // set the position of the lens:
      lens.style.left = x + 'px';
      lens.style.top = y + 'px';
      // display what the lens "sees"
      result.style.backgroundPosition =
        '-' + x * compareX + 'px -' + y * compareY + 'px';
    },
    getCursorPosition(e: Event): { x: number; y: number } {
      let x = 0;
      let y = 0;
      e = e || window.event;
      // get the x and y positions of the image:
      const image = document.getElementById('image');
      const imageCoordinates = (image as HTMLElement).getBoundingClientRect();

      // calculate the cursor's x and y coordinates, relative to the image: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX
      x = (e as MouseEvent).pageX - imageCoordinates.left;
      y = (e as MouseEvent).pageY - imageCoordinates.top;

      // consider any page scrolling: https://www.w3schools.com/jsref/prop_win_pagexoffset.asp
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x, y };
    }
  }
});
</script>

<style lang="scss" scoped>
.container--full {
  position: relative;
  width: 100%;
  height: 100%;
}

// @media only screen and (max-width : 320px) {
// .image--full {
//   width: 100%;
//   height: 100%;
// }
// }
// @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
//   .image--full {
//     width: 100%;
//     height: 100%;
//   }
// }
@media only screen and (min-device-width: 481px) {
  .image--full {
    width: 100%;
    height: 100%;
  }
}
// @media (max-device-width: 768/1024) {
//   .image--full {
//     width: 100%;
//     height: 100%;
//   }
// }

.image_zoom_result {
  position: absolute;
  left: 120%;
  top: 0%;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.image_zoom_lens {
  position: absolute;
  border: 1px solid #d4d4d4;
  /*set the size of the lens:*/
  min-width: 32px;
  min-height: 32px;
  width: 20%;
  height: 20%;
}
</style>
