<template>
  <v-app id="inspire">
    <SideBar
      :menuItems="[
        {
          path: '/portfolio',
          sectionId: 'section_1',
          name: 'firstItem',
          icon: 'home'
        },
        {
          path: '/portfolio',
          sectionId: 'section_2',
          name: 'secondItem',
          icon: 'home'
        }
      ]"
      v-model="drawer"
    />
    <!-- <SideBar
      :menuItems="[
        { path: '/about', name: 'secItem', icon: 'card-account-mail' },
      ]"
      v-model="drawer"
    /> -->
    <!-- // https://prettier.io/docs/en/integrating-with-linters.html -->
    <v-container fluid>
      <v-row
        align="left"
        justify="left"
        class="container--max container_shadow padding--bottom"
        id="section_1"
      >
        <v-col class="text-center">
          <image-viewer
            :images="images"
            @setChosenId="setChosenId"
            @setPrevious="setPrevious"
            @setNext="setNext"
            :chosenImage="chosenImage"
            :title="name"
          ></image-viewer>
        </v-col>
        <v-col class="text-left">
          <Addition :name="name" />
        </v-col>
      </v-row>
      <div
        class="container--scrolldown"
        @click="scrollDown('test', 'UpperBar')"
      >
        Scroll to next section
      </div>

      <!-- NEXT ROW -->
      <v-row
        align="left"
        justify="left"
        class="container--max parallax"
        id="section_2"
      >
        <v-col class="text-center" id="test">
          Section 2!!!!!!!
          <v-tooltip left>Hello darkness my old friend</v-tooltip>
        </v-col>
        <v-col class="text-left">Section 2!!!!!!!</v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
        class="container--max"
        id="section_3"
      >
        <v-col class="text-center">
          Section 3!!!!!!!
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
        class="container--max parallax"
        id="section_4"
      >
        <v-col class="text-center">
          Section 4!!!!!!!
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
        class="container--max"
        id="section_5"
      >
        <v-col class="text-center">
          <google-map />
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
import GoogleMap from '@/components/GoogleMap/index.vue';
import Addition from '@/views/Home/Addition/index.vue';

import { ImageSrc } from '@/components/ImageViewer/types.ts';

export default {
  name: 'Home',
  components: {
    SideBar,
    ImageViewer,
    Addition,
    GoogleMap
  },
  data: () => {
    return {
      chosenId: '1',
      name: 'Hyunsik Byun'
      // drawer: true
    };
  },
  computed: {
    drawer: {
      get(): string {
        return (this as any).$store.state.drawer;
      },
      set(value: boolean) {
        (this as any).$store.dispatch('setDrawer', value);
      }
    },
    images() {
      return (this as any).$store.state.images;
    },
    chosenImage(): ImageSrc {
      return (this as any).images.find(
        (image: ImageSrc) => image.id === (this as any).chosenId
      );
    }
  },
  mounted() {
    (this as any).setBackground(
      'section_2',
      'url(../../img/Hyunsik_1.e398d4be.jpg)'
    );
  },
  methods: {
    setChosenId(id: string) {
      (this as any).chosenId = id;
    },
    setNext() {
      const intId = parseInt((this as any).chosenId);
      const newId = ((intId + 1) % 3).toString();
      this.setChosenId(newId);
    },
    setPrevious() {
      const intId = parseInt((this as any).chosenId);
      const newId = ((intId + 2) % 3).toString();
      this.setChosenId(newId);
    },
    // scrollDown() {
    //   document.getElementById;
    // }
    scrollDown(elementId: string, navBarId: '') {
      const y = (document.getElementById(
        elementId
      ) as HTMLElement).getBoundingClientRect().top;
      const navBar = document.getElementById(navBarId);
      if (document.documentElement.clientWidth >= 768 && navBar) {
        const navBarY = navBar.getBoundingClientRect().height;
        window.scrollBy({
          top: y - navBarY,
          behavior: 'smooth'
        });
      } else {
        window.scrollBy({
          top: y,
          behavior: 'smooth'
        });
      }
    },
    setBackground(elementId: string, src: string) {
      const element = document.getElementById(elementId) as HTMLElement;
      element.style.backgroundImage = src;
    }
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
.container_shadow {
  box-shadow: 0px 4px darkgrey;
}
.container--scrolldown {
  text-align: center;
  background-color: white;
  width: 200px;
  margin-left: calc(50% - 100px);
  margin-right: calc(50% - 100px);

  border-bottom: 4px solid darkgrey;
  border-left: 4px solid darkgrey;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-right: 4px solid darkgrey;
  cursor: pointer;
  height: 2rem;
  z-index: 1;
  position: absolute;
}
</style>
