<template>
  <v-app class="Online_CV">
    <!-- <upper-bar
      :navigationItems="[
        { path: '/', name: 'firstname' },
        { path: '/about', name: 'secname' }
      ]"
      title="App"
    ></upper-bar> -->

    <v-content>
      <router-view />
    </v-content>

    <!-- <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UpperBar from '@/components/UpperBar/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    // UpperBar
  }
  // data: () => ({
  //   drawer: null
  // }),
});
</script>
