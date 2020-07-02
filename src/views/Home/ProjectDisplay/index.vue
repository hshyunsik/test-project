<template>
  <div>
    <div class="container--centrefocus">
      <div class="item--big">
        <!-- <img
      id="image"
      :src="require(`@/assets/${computedImage.src}`)"
      :alt="computedImage.alt"
      class="image--full"
      width="185"
      height="235"
    /> --><v-dialog v-model="dialog" scrollable hide-overlay width="80%">
          <template v-slot:activator="{ on, attrs }">
            <img
              :src="require(`@/assets/Werk_NN.png`)"
              class="image--full"
              width="185"
              height="235"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-card>
            <!-- =====1a, 1aMobiel, 2aMobiel, 2b, -->

            <v-card-title>Take a look</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 60%;">
              <!-- <img
                :src="require(`@/assets/Werk_NN.png`)"
                class="image--semifull container--center"
                v-bind="attrs"
                v-on="on"
              /> -->
              <div class="container--center">
                <ImageModal imageLink="Werk_NN.png"></ImageModal>
                <ImageModal imageLink="Werk_NN_1a_Mobiel.png"></ImageModal>
                <ImageModal imageLink="Werk_NN_1a.png"></ImageModal>
                <ImageModal imageLink="Werk_NN_2a_Mobiel.png"></ImageModal>
                <ImageModal imageLink="Werk_NN_2b.png"></ImageModal>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text style="height: 40%;">
              Dev Stack:
              <ul style="list-style-type:	'\2705'">
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript/VueJS</li>
                <li>Java/Spring Boot</li>
                <li>Jest</li>
                <li>Postman</li>
                <li>GitLab</li>
                <li>AWS</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-dialog>
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc } from '@/store/types';
import ImageModal from '@/components/ImageModal/index.vue';

export default Vue.extend({
  name: 'ProjectDisplay',
  components: { ImageModal },
  data() {
    return {
      dialogm1: '',
      dialog: false
    };
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
.image--full {
  width: 100%;
  height: 100%;
}
.image--semifull {
  width: 50%;
}
.image--small {
  width: 20%;
}
.container--center {
  display: flex;
  margin: auto;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
