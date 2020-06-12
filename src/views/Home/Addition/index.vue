<template>
  <div>
    <v-btn primary text color="red">
      <v-icon>mdi-heart</v-icon>
      <v-icon>mdi-heart-outline</v-icon>
      Favorite
    </v-btn>
    <v-btn primary text color="indigo">
      <v-icon>mdi-account-box</v-icon>
      Account
    </v-btn>
    <v-btn primary text color="indigo" @click="openMail">
      <v-icon>mdi-email</v-icon>
      Mail me
    </v-btn>
    <v-btn primary text color="indigo" @click="makeCall">
      <v-icon>mdi-cellphone</v-icon>
      Call me
    </v-btn>
    <div>Learn WebPack, Cross-browser testing, Selenium/Cypress??</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Addition',
  data: () => {
    return {
      src: 'Hyunsik.jpg'
    };
  },
  computed: {
    drawer: {
      get(): string {
        return this.$store.state.drawer;
      },
      set(value: boolean) {
        console.log('set');
        this.$store.dispatch('setDrawer', value);
      }
    }
  },
  methods: {
    // setMain(image: Image) {
    //   this.src = image.src
    // }
    openMail() {
      const mail = 'h.s.hyunsik@gmail.com';
      const subject = 'Front End Developer';
      window.open(`mailto:${mail}?subject=${subject}`);
    },
    makeCall() {
      window.parent.location.href = 'tel:+316 26256439';
    },
    addToFavorites() {
      // https://stackoverflow.com/questions/3230499/add-to-favourites-link-for-google-chrome
    }
  }
};
</script>

<style lang="scss" scoped></style>
