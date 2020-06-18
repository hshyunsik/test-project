<template>
  <v-app id="inspire">
    <SideBar :menuItems="[]" v-model="drawer" />
    <!-- // https://prettier.io/docs/en/integrating-with-linters.html -->
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <v-header class="text-center" style="font-size: 20px !important">
            This website is in progress...
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
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <v-btn @click="showCV"> Or check my static CV </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" v-if="showsCV">
        <v-col class="text-center">
          <pdf :src="`./static/Hyunsik_CV.pdf`"></pdf>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import pdf from 'vue-pdf';
import SideBar from '@/components/SideBar/index.vue';

export default {
  name: 'ParkingPage',
  components: {
    pdf,
    SideBar
  },
  data: () => {
    return {
      showsCV: false,
      publicPath: './'
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
    }
  },
  methods: {
    showCV(): void {
      (this as any).showsCV = true;
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
</style>
