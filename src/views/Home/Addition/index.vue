<template>
  <div>
    <div>
      <h1 class="align--center padding--bottom margin--top">
        {{ name }}
      </h1>
    </div>
    <div class="container__rows--right margin--top">
      <v-btn primary text color="red" @click="addToFavorites">
        <v-icon>mdi-heart</v-icon>
        <!-- <v-icon>mdi-heart-outline</v-icon> -->
        Favorite
      </v-btn>
      <!-- <v-btn primary text color="indigo">
        <v-icon>mdi-account-box</v-icon>
        Account
      </v-btn> -->
      <v-btn primary text color="green" href="static/Hyunsik_CV.pdf">
        <v-icon>mdi-account-box</v-icon>
        See my CV
      </v-btn>
      <v-btn primary text color="indigo" @click="openMail">
        <v-icon>mdi-email</v-icon>
        Mail me
      </v-btn>
      <v-btn primary text color="indigo" @click="makeCall">
        <v-icon>mdi-cellphone</v-icon>
        Call me
      </v-btn>
    </div>
    <div class="margin--top">
      <ul>
        <!-- <li><b>Name:</b> Hyunsik Byun</li> -->
        <li><b>Birth Place:</b> The Hague</li>
        <li><b>Birth Date:</b> 28 September 1995</li>
        <li><b>Gender:</b> Male</li>
        <li><b>Marital Status:</b> Not Married</li>
        <li><b>Nationality:</b> Dutch</li>
        <li><b>Driving License:</b> B</li>
      </ul>
    </div>
    <!-- <div class="margin--top" style="position: relative; top: 1000px">
      Learn WebPack, Cross-browser testing, Selenium/Cypress??
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Addition',
  props: {
    name: {
      type: String
    }
  },
  computed: {
    drawer: {
      get(): string {
        return this.$store.state.drawer;
      },
      set(value: boolean) {
        this.$store.dispatch('setDrawer', value);
      }
    }
  },
  methods: {
    openMail() {
      const mail = 'h.s.hyunsik@gmail.com';
      const subject = 'Front End Developer';
      window.open(`mailto:${mail}?subject=${subject}`);
    },
    makeCall() {
      window.parent.location.href = 'tel:+316 26256439';
    },
    addToFavorites() {
      window.alert('Please add this website to your bookmarks with ctrl+d');
      // https://stackoverflow.com/questions/3230499/add-to-favourites-link-for-google-chrome
    },

    // Makes an element be centered vertically on the screen @focus
    // focusScroll(currentTarget, 75, 0, true)
    // @focus($event.currentTarget)
    focusScroll(
      currentTarget: HTMLElement,
      mobileMargin = 150,
      desktopMargin = 750,
      desktopDisabled = false
    ) {
      const tabletBreakpoint = 768;
      const y = currentTarget.getBoundingClientRect().top;
      if (document.documentElement.clientWidth <= tabletBreakpoint) {
        window.scrollBy({
          behavior: 'smooth',
          top: y - mobileMargin
        });
      } else if (
        document.documentElement.clientWidth > tabletBreakpoint &&
        !desktopDisabled
      ) {
        window.scrollBy({
          behavior: 'smooth',
          top: y - desktopMargin
        });
      }
    }
  }
});
</script>

<style lang="scss" scoped>
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
