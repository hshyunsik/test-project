<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon
      id="left_menu"
      v-if="firstMenu"
      class="nav"
      @click.stop="toggleLeftMenu"
    ></v-app-bar-nav-icon>
    <div class="nav" id="title">{{ title }}</div>
    <!-- LOGO!!!! -->
    <v-spacer></v-spacer>

    <v-app-bar-nav-icon
      id="right_menu"
      class="nav"
      @click.stop="toggleRightMenu"
    ></v-app-bar-nav-icon>
    <div v-for="item in navigationItems" class="nav" :key="item.name" id="menu">
      <v-btn @click="routeToSection(item.path, item.sectionId)" text>
        <span class="mr-2" id="menuItemText">{{ item.name }}</span>
      </v-btn>
    </div>
    <!-- <v-btn
      class="nav"
      href="https://github.com/hshyunsik/test-project"
      target="_blank"
      text
      id="menu"
    >
      <span class="mr-2">Source Code</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { MenuItem } from '@/store/types.ts';

export default Vue.extend({
  name: 'UpperBar',
  components: {},
  data() {
    return {
      upperSlickMenu: true
    };
  },
  props: {
    navigationItems: {
      type: Array as () => MenuItem[]
    },
    title: {
      type: String
      //   default: 'FirstTitle'
    },
    firstMenu: {
      type: Boolean
    }
  },
  methods: {
    routeTo(path: string) {
      this.$router.push(path);
    },
    routeToSection(basePath: string, sectionId?: string) {
      if (!sectionId) {
        this.routeTo(basePath);
      } else {
        const path = `${basePath}#${sectionId}`;
        this.$router.push({ path: path });
      }
    },
    toggleLeftMenu() {
      this.$emit('toggleLeftMenu');
    },
    toggleRightMenu() {
      this.$emit('toggleRightMenu');
    }
  }
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  #menu {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  #right_menu {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  #menuItemText {
    font-size: 10px;
  }
  #title {
    font-size: x-large;
  }
}
@media screen and (min-width: 1024px) {
  #title {
    font-size: xx-large;
  }
}
#title {
  font-weight: 750;
  text-transform: uppercase;
}
// header > div {
//   justify-content: space-between !important;
//   background-color: red;
// } https://www.w3schools.com/css/css_rwd_mediaqueries.asp
</style>
