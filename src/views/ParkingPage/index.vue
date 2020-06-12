<template>
  <v-app id="inspire">
    <!-- // https://prettier.io/docs/en/integrating-with-linters.html -->
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <v-header class="text-center" style="font-size: 20px !important">
            This website is under maintenance
          </v-header>
        </v-col>
      </v-row>
      <v-row align="left" justify="left">
        <v-col class="text-center">
          Track my progress in my github project:
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://github.com/hshyunsik/test-project"
                icon
                large
                target="_blank"
                v-on="on"
              >
                <v-icon large>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'ParkingPage',
  data: () => {
    return {};
  },
  computed: {},
  methods: {}
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
