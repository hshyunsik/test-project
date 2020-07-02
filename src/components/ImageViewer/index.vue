<template>
  <div>
    <!-- <h1>{{ title }}</h1> -->
    <div class="container--centrefocus">
      <div class="item--big">
        <ImageZoom :chosenImage="chosenImage" />
      </div>
      <div class="item--left" @click="setPrevious">
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <div class="item--right" @click="setNext">
        <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
      </div>
    </div>
    <div>
      <!-- <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn> -->
      <image-chooser
        :images="images"
        :chosenId="chosenImage.id"
        @setChosenId="setChosenId"
        class="margin--top"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc } from '@/store/types';
import ImageZoom from '@/components/ImageZoom/index.vue';
import ImageChooser from '@/components/ImageChooser/index.vue';

export default Vue.extend({
  name: 'ImageViewer',
  components: {
    ImageZoom,
    ImageChooser
  },
  props: {
    chosenImage: {
      type: Object as () => ImageSrc,
      required: true
    },
    images: {
      type: Array as () => ImageSrc[] // https://stackoverflow.com/questions/41139763/how-to-declare-a-fixed-length-array-in-typescript
    },
    title: {
      type: String
    }
  },
  methods: {
    setNext(): void {
      this.$emit('setNext');
    },
    setPrevious(): void {
      this.$emit('setPrevious');
    },
    setChosenId(id: string): void {
      this.$emit('setChosenId', id);
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
</style>
