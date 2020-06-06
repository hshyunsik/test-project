<template>
  <div>
    <div class="container--centrefocus">
      <div class="item--big">
        <img
          :id="chosenImage.id"
          class="image--full"
          :src="require(`@/assets/${chosenImage.src}`)"
          :alt="chosenImage.alt"
        />
      </div>
      <div class="item--left"><v-icon>mdi-chevron-left</v-icon></div>
      <div class="item--right"><v-icon>mdi-chevron-right</v-icon></div>
    </div>
    <div class="container--parallax">
      <div class="item--left"><v-icon>mdi-chevron-left</v-icon></div>
      <div class="item--right"><v-icon>mdi-chevron-right</v-icon></div>
      <div
        v-for="image in test"
        :key="image.id"
        :class="`container--bottom item_${image.id}`"
      >
        <!-- <img :src="image.src" :alt="image.alt" srcset="" /> -->
        <!-- <img
        :id="image.id"
        class="image-preview--low"
        :src="require(`${image.src}`)"
        :alt="image.alt"
      /> -->
        <img
          :id="image.id"
          class="image--full"
          :src="require(`@/assets/${image.src}`)"
          :alt="image.alt"
          @click="setMain(image)"
        />
        <!-- https://html.com/attributes/img-srcset/ -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Image } from './types'

export default Vue.extend({
  name: 'ImageViewer',
  data: () => {
    return {
      main: '1'
    }
  },
  props: {
    images: {
      type: Array as () => Image[]
    }
    // Later change this to focusImages OR use dropdowns OR add modal
    // images: {
    //   type: [Image, Image, Image]
    // }
    // add mainImage
  },
  computed: {
    test() {
      return this.images
    },
    chosenImage() {
      return this.images.find((image: Image) => image.id === this.main)
    }
  },
  methods: {
    // getImgUrl(link: string) {
    //   return require.context('@/assets/', false, /\.)
    // },
    // set @left and @right, as well as @mainLeft and @mainRight
    setMain(image: Image): void {
      this.main = image.id
      // this.$emit('setMain', image)
    }
  }
})
</script>

<style lang="scss" scoped>
.container--medium {
  width: 100px;
  height: 100px;
}
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
.item--bottom {
  grid-row: 1/2;
}
.item_1 {
  grid-column: 2/3;
}
.item_2 {
  grid-column: 3/4;
}
.item_3 {
  grid-column: 4/5;
}
.container--big {
  width: 300px;
  height: 300px;
}
.image--full {
  width: 100%;
  height: 100%;
}
.container--parallax {
  display: grid;
  grid-template-columns: 8% 24% 24% 24% 8%;
  grid-template-rows: 100%;
  column-gap: 3%;
  align-items: center;
}
</style>
