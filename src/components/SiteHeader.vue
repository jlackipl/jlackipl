<template>
  <v-container fluid class="mt-auto fill-height">
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          class="text-center"
          cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          Jakub Łącki
        </h1>
        <h4 class="subheading font-weight-bold accent--text">
          Software engineer
        </h4>
        <h4>
          <v-btn href="https://linkedin.com/in/jlackipl" class="ma-2" target="_blank" elevation="5" icon fab>
            <v-icon>{{ linkedIn }}</v-icon>
          </v-btn>
          <v-btn href="https://github.com/jlackipl" class="ma-2" target="_blank" elevation="5" icon fab>
            <v-icon>{{ github }}</v-icon>
          </v-btn>
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mdiGithub, mdiLinkedin} from '@mdi/js';
export default {
  name: "SiteHeader",
  data: () => ({
    linkedIn: mdiLinkedin,
    github: mdiGithub
  }),
}
</script>

<style scoped>

</style>