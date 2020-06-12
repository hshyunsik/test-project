<template>
  <v-app id="inspire">
    <SideBar
      :menuItems="[
        { path: '/', name: 'firstItem', icon: 'home' },
        { path: '/about', name: 'secItem', icon: 'card-account-mail' }
      ]"
      v-model="drawer"
    ></SideBar>
    <!-- // https://prettier.io/docs/en/integrating-with-linters.html -->
    <v-container fluid>
      <v-row align="left" justify="left">
        <v-col class="text-center">
          <!-- <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 main_image"
            contain
            :src="require(`@/assets/${src}`)"
            transition="scale-transition"
            width="300"
          /> -->
          <image-viewer
            :images="[
              { src: 'Hyunsik.jpg', alt: '1', id: '1' },
              { src: 'Hyunsik_1.jpg', alt: '2', id: '2' },
              { src: 'Hyunsik_2.jpg', alt: '3', id: '3' }
            ]"
            @setMain="setMain"
            @right="setMain"
            @left="setMain"
            :chosenImage="{ src: 'Hyunsik.jpg', alt: '1', id: '1' }"
          ></image-viewer>
        </v-col>
        <v-col class="text-left"
          >Hello darkness my old friend 1
          <Addition />
        </v-col>
      </v-row>
      <v-row align="left" justify="left">
        <v-col class="text-center">
          Hello darkness my old friend 1
          <v-tooltip left>Hello darkness my old friend</v-tooltip>
        </v-col>
        <v-col class="text-left">Hello darkness my old friend 2</v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          Hello darkness my old friend 2
          <v-tooltip left>Hello darkness my old friend</v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SideBar from '@/components/SideBar/index.vue';
import ImageViewer from '@/components/ImageViewer/index.vue';
import Addition from '@/views/Home/Addition/index.vue';

export default {
  name: 'Home',
  components: {
    SideBar,
    ImageViewer,
    Addition
  },
  data: () => {
    return {
      src: 'Hyunsik.jpg'
    };
  },
  computed: {
    drawer: {
      get(): string {
        return this.$store.state.drawer;
      },
      set(value: boolean) {
        console.log('set');
        this.$store.dispatch('setDrawer', value);
      }
    }
  },
  methods: {
    // setMain(image: Image) {
    //   this.src = image.src
    // }
  }
};
</script>

<style lang="scss" scoped>
.previews {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
}
.main_image {
  width: 30%;
  height: 40%;
}
</style>
