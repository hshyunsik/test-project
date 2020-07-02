<template>
  <div class="container--previews">
    <!-- <div class="item--left"><v-icon>mdi-chevron-left</v-icon></div>
    <div class="item--right"><v-icon>mdi-chevron-right</v-icon></div> -->
    <div
      v-for="image in images"
      :key="image.id"
      :class="`item_${image.id}`"
      class="container--bottom"
      @click="setChosenId(image.id)"
    >
      <img
        :id="image.id"
        class="image--full container--round"
        :class="{ 'image--chosen': image.id === chosenId }"
        :src="require(`@/assets/${image.src}`)"
        :alt="image.alt"
      />
      <!-- https://html.com/attributes/img-srcset/ -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Image } from './types';

export default Vue.extend({
  name: 'ImageChooser',
  props: {
    images: {
      type: Array as () => Image[] // https://stackoverflow.com/questions/41139763/how-to-declare-a-fixed-length-array-in-typescript
    },
    chosenId: {
      type: String,
      default: '1'
    }
    // Later change this to focusImages OR use dropdowns OR add modal
    // images: {
    //   type: [Image, Image, Image]
    // }
  },
  methods: {
    // set @left and @right, as well as @mainLeft and @mainRight
    setChosenId(id: string): void {
      this.$emit('setChosenId', id);
    }
  }
});
</script>

<style lang="scss" scoped>
.item_0 {
  grid-column: 2/3;
}
.item_1 {
  grid-column: 3/4;
}
.item_2 {
  grid-column: 4/5;
}
.container--round {
  border-radius: 20%;
}
.image--full {
  width: 100%;
  height: 100%;
}
.image--chosen {
  border-style: solid !important;
  border-color: darkgrey !important;
  border-width: thick !important;
}
img:hover {
  border-style: solid;
  border-color: lightgrey;
  border-width: thin;
}
.container--previews {
  display: grid;
  grid-template-columns: 6% 20% 20% 20% 6%;
  grid-template-rows: 100%;
  column-gap: 7%;
  align-items: center;
}
</style>
