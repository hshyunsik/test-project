<template>
  <v-app id="inspire">
    <!-- <SideBar
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
    /> -->
    <!-- // https://prettier.io/docs/en/integrating-with-linters.html -->
    <v-container fluid>
      <!-- Section 1 Hero (Hyunsik Byun. Developer. Thinker. Life Enthusiast)-->
      <v-row class="container--max parallax" id="section_1">
        <v-col class="margin--auto"
          ><h1 class="align--center color--white " id="title">
            {{ name }}
          </h1>
          <div class="align--center color--white margin--top" id="subtitle">
            Developer. Explorer. Life Enthusiast.
          </div>
          <div class="align--center margin--top">
            <v-btn @click="scrollDown('section_2', 'UpperBar')"
              >See my personalia</v-btn
            >
            <v-btn @click="scrollDown('section_6', 'UpperBar')"
              >Get In Touch</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <!-- <div
        class="container--scrolldown"
        @click="scrollDown('test', 'UpperBar')"
      >
        Scroll to next section
      </div> -->

      <!-- Section 2 ImageViewer -->
      <v-row
        align="left"
        justify="left"
        class="container--max container_shadow padding--bottom"
        id="section_2"
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

      <!-- Section 3 My Story,  -->
      <Story id="section_3"></Story>

      <!-- Section 4: My DevStack -->
      <DevStack id="section_4"></DevStack>

      <!-- Section 5 My Projects -->
      <!-- Work-Viewer met image, knopjes aan zijkant, modal, en  -->
      <v-row
        align="center"
        justify="center"
        class="container--max"
        id="section_5"
      >
        <v-col class="text-center">
          <h1 class="align--center margin--top container_rows--right">
            My Projects
          </h1>

          <ProjectDisplay />
        </v-col>
      </v-row>

      <!-- Section 6 Contact Box-->
      <Contact id="section_6"></Contact>

      <v-row align="center" justify="center" class="container--max">
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
import DevStack from '@/views/Home/DevStack/index.vue';
import Story from '@/views/Home/Story/index.vue';
import ProjectDisplay from '@/views/Home/ProjectDisplay/index.vue';
import Contact from '@/views/Home/Contact/index.vue';

import { ImageSrc } from '@/store/types.ts';
// eslint-disable-next-line
import * as backgroundMe from '../../assets/Background_Me.jpg';
import * as backgroundInterests from '../../assets/Background_Interests3.jpg';
// https://survivejs.com/webpack/loading/images/
// https://medium.com/javascript-in-plain-english/how-to-display-images-from-local-assets-images-folder-when-working-with-react-feb6c5dba526

export default {
  name: 'Home',
  components: {
    // SideBar,
    ImageViewer,
    Addition,
    DevStack,
    Story,
    ProjectDisplay,
    Contact,
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
    firstMenu: {
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
    // const src = require(`@/assets/Hyunsik_2.jpg`);
    (this as any).setBackground('section_1', `url(${backgroundMe})`);
    (this as any).setBackground('section_3', `url(${backgroundInterests})`);
    // (this as any).setBackground('section_32', `url(${backgroundInterests})`);
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
      element.style.backgroundSize = 'auto 120vh';
      element.style.height = '100vh';
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-device-width: 480px) {
}

@media screen and (min-device-width: 481px) {
}

@media screen and (max-device-width: 767px) {
  #title {
    font-size: 72px !important;
    line-height: 4rem;
  }
  #subtitle {
    font-size: 24px !important;
    line-height: 2rem;
  }
}

@media screen and (min-device-width: 768px) {
  #title {
    font-size: 100px !important;
  }
  #subtitle {
    font-size: 32px !important;
  }
}

@media screen and (max-device-width: 1024px) {
}

@media screen and (min-device-width: 1025px) {
}

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
  box-shadow: 0px 4px #00bcd4 !important;
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
.container__rows--right {
  display: grid;
  grid-template-rows: 4rem 4rem;
  grid-template-columns: 10rem 10rem;
  column-gap: 7%;
  align-items: center;
  justify-items: start;
  align-content: center;
  justify-content: center;
}
</style>
