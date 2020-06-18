<template>
  <v-app class="Online_CV">
    <upper-bar
      :navigationItems="[
        { path: '/', name: 'Home' },
        { path: '/portfolio', name: 'Portfolio' },
        { path: '/about', name: 'About' }
      ]"
      title="App"
      id="UpperBar"
    ></upper-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UpperBar from '@/components/UpperBar/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    UpperBar
  },
  data: () => ({
    drawer: null
  })
});
</script>

<style lang="scss">
.container--max {
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
}
.no_display {
  display: none;
}
.margin--top {
  margin-top: 2rem;
}
.padding--bottom {
  padding-bottom: 2rem;
}
.parallax {
  // background-image: url(http://localhost:8080/img/Hyunsik_1.e398d4be.jpg);
  background-size: 100%;
  background-attachment: fixed;
  background-position: center;
  height: 20vh;
}
</style>
