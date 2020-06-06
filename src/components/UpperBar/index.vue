<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon
      class="nav"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>
    <div class="nav">{{ title }}</div>
    <v-spacer></v-spacer>

    <div v-for="item in test" class="nav" :key="item.name">
      <v-btn @click="routeTo(item.path)" text>
        <span class="mr-2">{{ item.name }}</span>
      </v-btn>
    </div>
    <v-spacer />
    <v-btn
      class="nav"
      href="https://github.com/hshyunsik/test-project"
      target="_blank"
      text
    >
      <span class="mr-2">Source Code</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { NavigationLink } from './types';

export default Vue.extend({
  name: 'UpperBar',
  components: {},
  props: {
    navigationItems: {
      type: Array as () => NavigationLink[]
    },
    title: {
      type: String
      //   default: 'FirstTitle'
    },
    barState: {}
  },
  computed: {
    test() {
      return this.navigationItems;
    }
  },
  methods: {
    routeTo(path: string) {
      this.$router.push(path);
    },
    toggleDrawer() {
      this.$store.dispatch('toggleDrawer');
    }
  }
});
</script>

<style lang="scss" scoped>
// header > div {
//   justify-content: space-between !important;
//   background-color: red;
// }
</style>
