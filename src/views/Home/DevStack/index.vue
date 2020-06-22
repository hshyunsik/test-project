<template>
  <v-row align="left" justify="left" class="container--max">
    <v-col class=""
      ><h1 class="align--center margin--top">
        My Stack
      </h1>
      <div class="align--center margin--top container_columns--responsive">
        <div>
          <SkillRating
            title="Front End"
            :skills="[
              { name: 'HTML', rating: 4 },
              { name: 'CSS', rating: 4 },
              { name: 'JavaScript', rating: 4 },
              { name: 'VueJS', rating: 4 },
              { name: 'TypeScript', rating: 3 },
              { name: 'WebPack', rating: 2 }
            ]"
          />
          <SkillRating
            title="Back End"
            :skills="[
              { name: 'Java', rating: 4 },
              { name: 'Spring Boot', rating: 3 },
              { name: 'Python', rating: 2 }
            ]"
          />
        </div>
        <div>
          <SkillRating
            title="Testing"
            :skills="[
              { name: 'Jest', rating: 4 },
              { name: 'Postman', rating: 3 },
              { name: 'Cypress', rating: 1 }
            ]"
          />
          <SkillRating
            title="CICD"
            :skills="[
              { name: 'Git', rating: 4 },
              { name: 'Docker', rating: 1 },
              { name: 'Jenkins', rating: 1 }
            ]"
          />
          <SkillRating
            title="Other"
            :skills="[
              { name: 'MySql', rating: 3 },
              { name: 'Linux', rating: 3 },
              { name: 'Azure/AWS', rating: 1 }
            ]"
          />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import SkillRating from '@/components/SkillRating/index.vue';

export default {
  name: 'DevStack',
  components: {
    SkillRating
  },
  props: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container_columns--responsive {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
