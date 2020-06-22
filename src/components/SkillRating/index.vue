<template>
  <div class="margin--top">
    <div class="stackTitle">{{ title }}</div>
    <ul class="list--none">
      <li v-for="(skill, index) in skills" :key="index" class="item">
        <span class="item--name">{{ skill.name }}</span>
        <span class="item--stars">
          <v-icon
            v-for="star in skill.rating"
            :key="`checked_${star}`"
            class="star star--checked"
            >mdi-star</v-icon
          >
          <v-icon
            v-for="star in Array.from(Array(10).keys()).splice(
              skill.rating,
              5 - skill.rating
            )"
            :key="`unchecked_${star}`"
            class="star"
            >mdi-star</v-icon
          >
          <!-- <v-icon>mdi-star-half</v-icon> -->
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Skill } from '@/store/types.ts';

export default {
  name: 'Home',
  components: {},
  data: () => {
    return {};
  },
  props: {
    title: {
      type: String
    },
    skills: Array as () => Array<Skill>
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.star--checked {
  color: blue;
}
.item {
  display: grid;
  justify-items: stretch;
  grid-template-rows: 100%;
  grid-template-columns: 120px 120px;
}
.item--name {
  justify-self: start;
}
</style>
