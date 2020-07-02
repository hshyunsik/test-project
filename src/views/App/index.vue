<template>
  <v-app class="Online_CV">
    <upper-bar
      :navigationItems="menuItems"
      title="Hyunsik Byun"
      id="UpperBar"
      @toggleLeftMenu="toggleLeftMenu"
      @toggleRightMenu="toggleRightMenu"
    ></upper-bar>
    <SideBar :menuItems="menuItems" v-model="drawer" right="true" />
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020 H Byun. All Rights Reserved </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UpperBar from '@/components/UpperBar/index.vue';
import SideBar from '@/components/SideBar/index.vue';
import { MenuItem } from '@/store/types';

export default Vue.extend({
  name: 'App',
  components: {
    UpperBar,
    SideBar
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    menuItems(): MenuItem[] {
      return this.$store.state.menuItems;
    }
  },
  methods: {
    toggleLeftMenu(): void {
      console.log();
    },
    toggleRightMenu(): void {
      this.drawer = !this.drawer;
    }
  }
});
</script>

<style lang="scss">
@media screen and (max-device-width: 767px) {
  .parallax {
    // background-image: url(http://localhost:8080/img/Hyunsik_1.e398d4be.jpg);
    background-size: auto 100vh;
    background-attachment: fixed;
    background-position: top;
    height: 20vh;
  }
}

@media screen and (min-device-width: 768px) {
  .parallax {
    // background-image: url(http://localhost:8080/img/Hyunsik_1.e398d4be.jpg);
    background-size: 100%;
    background-attachment: fixed;
    background-position: top;
    height: 20vh;
  }
}

.container--max {
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
}
.no_display {
  display: none;
}
.margin--top {
  margin-top: 1rem;
}
.header {
  margin-top: 2rem;
}
.margin--auto {
  margin: auto;
}
.color--indigo {
  color: #3f51b5 !important;
}
.color--cyan {
  color: #00bcd4 !important;
}
.color--white {
  color: #ffffff !important;
}
.padding--bottom {
  padding-bottom: 2rem;
}
.align--center {
  text-align: center;
}
.align--end {
  text-align: end;
}

// .parallax {
//   // background-image: url(http://localhost:8080/img/Hyunsik_1.e398d4be.jpg);
//   background-size: 100%;
//   background-attachment: fixed;
//   background-position: top;
//   height: 20vh;
// }

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.list--none {
  list-style-type: none;
}
</style>
