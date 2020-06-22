<template>
  <v-row align="left" justify="left" class="container--max parallax">
    <v-col class="container--text"
      ><h1 class="align--center container_rows--right color--white">
        My Story
      </h1>
      <div class="color--white align--end" style="font-style:italic">
        "Life is a game. Learn its rules to win."
      </div>
      <div class="color--white align--end">
        - Hyunsik Byun
      </div>

      <div class="color--white" style="padding: 10%">
        <p>
          My name is Hyunsik Byun, an ambitious 24 year old frontend developer
          (full stack developer in progress), who developed a love for the craft
          after finishing my Bachelor studies. {Now many of you might think....
          Actually LST}
        </p>

        <p>
          Luckily for me, the IT industry was high in demand. There were plenty
          of job offers with opportunities to grow my skills whilst getting
          paid. So I chose to become an IT Trainee at Peak IT, where I laid the
          foundation for most of the skills I currently excel at.
        </p>
        <p>
          Aside from creating clean, responsive and user friendly web
          applications, I love to read books, go to the gym, as well as meditate
          in my free time; they all move me towards increasing the quality of
          life and living my true dream life.
          <!-- 1) I
          read books to help me create better models of the world, guide me to
          discover new options, and make better decisions on my life journey. 2)
          I go to the gym to enrich my life with energy, vitality, mobility, and
          strength. 3) I meditate to calm my mind and emotions, and to raise my
          awareness of all that is happening in my body. -->
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: 'Story'
};
</script>

<style lang="scss" scoped>
@media screen and (max-device-width: 767px) {
  p {
    font-size: 12px !important;
  }
  .container--text {
  }
}

@media screen and (min-device-width: 768px) {
  .container--text {
    padding: 4rem;
  }
}
</style>
