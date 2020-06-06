<template>
  <v-app class="about">
    <h1>This is an about page</h1>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="left" justify="left">
          <v-col class="text-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/Hyunsik.jpg"
              transition="scale-transition"
              width="300"
            />
          </v-col>
          <v-col class="text-left">Hello darkness my old friend 1</v-col>
        </v-row>
        <v-row align="left" justify="left">
          <v-col class="text-center">
            Hello darkness my old friend 1
            <v-tooltip left>Hello darkness my old friend</v-tooltip>
          </v-col>
          <v-col class="text-left">Hello darkness my old friend 1</v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            Hello darkness my old friend 2
            <v-tooltip left>Hello darkness my old friend</v-tooltip>
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
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  data: () => ({
    drawer: null
  }),
  methods: {
    routeTo(navigation: string) {
      this.$router.push({ path: navigation })
    }
  }
})
</script>
