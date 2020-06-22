<template>
  <v-dialog scrollable hide-overlay width="80%">
    <template v-slot:activator="{ on, attrs }">
      <img
        :src="require(`@/assets/${imageLink}`)"
        class="image--small"
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <v-card>
      <!-- =====1a, 1aMobiel, 2aMobiel, 2b, -->

      <v-divider></v-divider>
      <v-card-text style="height: 100%;">
        <img
          :src="require(`@/assets/${imageLink}`)"
          class="container--center"
          v-bind="attrs"
          v-on="on"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { ImageSrc } from '@/store/types';

export default Vue.extend({
  name: 'ImageModal',
  props: {
    imageLink: {
      type: String,
      required: true
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
.image--small {
  width: 10rem;
}
.container--center {
  display: flex;
  margin: auto;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
