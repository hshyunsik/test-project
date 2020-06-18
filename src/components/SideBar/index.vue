<template>
  <v-navigation-drawer :value="value" app @input="setValue">
    <v-list dense>
      <div v-for="item in test" :key="item.name">
        <v-list-item
          class="item"
          link
          @click="routeToSection(item.path, item.sectionId)"
        >
          <v-list-item-action>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-action>
          <!-- https://vuetifyjs.com/en/customization/icons/ -->
          <!-- https://materialdesignicons.com/ -->
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { MenuItem } from './types';
export default Vue.extend({
  name: 'SideBar',
  components: {},
  props: {
    menuItems: {
      type: Array as () => MenuItem[]
    },
    barState: {
      type: Boolean
    },
    value: {
      type: Boolean
    }
  },
  computed: {
    test() {
      return this.menuItems;
    }
  },
  methods: {
    routeTo(path: string) {
      this.$router.push(path);
    },
    routeToSection(basePath: string, sectionId: string) {
      this.$router.push({ path: `${basePath}#${sectionId}` });
    },
    setValue(value: boolean) {
      this.$emit('input', value);
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
