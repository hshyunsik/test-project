<template>
  <v-app class="about">
    <SideBar :menuItems="[]" v-model="drawer" />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="left" justify="left">
          <v-col class="text-center">
            <h1>This is my empty about page</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue';
import SideBar from '@/components/SideBar/index.vue';

export default Vue.extend({
  name: 'About',
  components: {
    SideBar
  },
  computed: {
    drawer: {
      get(): string {
        return (this as any).$store.state.drawer;
      },
      set(value: boolean) {
        (this as any).$store.dispatch('setDrawer', value);
      }
    }
  },
  methods: {
    routeTo(navigation: string) {
      this.$router.push({ path: navigation });
    }
  }
});
</script>
