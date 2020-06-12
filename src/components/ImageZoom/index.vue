<template>
  <div class="container--full">
    <img
      id="id"
      class="image--full"
      :src="require(`@/assets/${computedImage.src}`)"
      :alt="computedImage.alt"
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
    >
      Result
    </div>
    <!-- <div class="image_zoom_lens" id="lens">Lens</div> -->
    <!-- <div class="image_zoom_result" id="result">Result</div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc, CursorPosition } from '../ImageViewer/types';

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
    const img = document.getElementById('id') as HTMLImageElement;
    const lens = document.getElementById('lens') as HTMLDivElement;
    img.addEventListener('mousemove', this.imageZoom);
    img.addEventListener('touchmove', this.imageZoom);
    lens.addEventListener('mousemove', this.imageZoom);
    lens.addEventListener('touchmove', this.imageZoom);
    img.addEventListener('mouseleave', this.changeDiv);
    lens.addEventListener('mouseleave', this.changeDiv);
  },
  methods: {
    // Add mousemove while mouseenter
    // Remove mousemove while mouseleave
    changeDiv(): void {
      this.showDiv = !this.showDiv;
      // if mouseleave -> remove event listener mousemove
      // if mouseenter -> add event listener mousemove
    },
    imageZoom(e: Event) {
      // https://www.w3schools.com/howto/howto_js_image_zoom.asp

      if (!this.showDiv) {
        this.changeDiv();
      }

      const img = document.getElementById('id') as HTMLImageElement;
      const lens = document.getElementById('lens') as HTMLDivElement;
      const result = document.getElementById('result') as HTMLDivElement;

      // Get ratio between result div and lens
      const compareX = result.offsetWidth / lens.offsetWidth;
      const compareY = result.offsetHeight / lens.offsetHeight;

      console.log('compare');
      console.log(compareX);

      // result.style.minHeight = '' + img.offsetHeight + ' px';
      // ================== Improve another day ==================== //
      // set background properties for the result DIV:
      result.style.backgroundImage = "url('" + img.src + "')";
      result.style.backgroundSize =
        img.width * compareX + ' px ' + img.height * compareY + 'px';

      console.log('img.height');
      console.log(img.height);
      console.log(result.offsetHeight);
      // prevent any other actions that may occur when moving over the image:
      e.preventDefault();

      // Get cursor position w/in image frame
      const pos = this.getCursorPosition(e);
      console.log(pos);
      console.log(img.offsetHeight);
      console.log(result.offsetHeight);
      // Get offsetLeft and offsetTop lens
      let x = pos.x - lens.offsetWidth / 2 + img.offsetLeft;
      let y = pos.y - lens.offsetHeight / 2 + img.offsetTop;
      console.log(img.height);
      console.log(lens.offsetHeight);
      console.log(y);
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
        '-' + (x * compareX) / 2 + 'px -' + (y * compareY) / 2 + 'px';
    },
    getCursorPosition(e: Event): CursorPosition {
      let x = 0;
      let y = 0;
      e = e || window.event;
      // get the x and y positions of the image:
      const image = document.getElementById('id');
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
.image--full {
  width: 100%;
  height: 100%;
}

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
  width: 2rem;
  height: 2rem;
}
.img-zoom-result {
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 300px;
  height: 300px;
}
.no_display {
  display: none;
}
</style>
