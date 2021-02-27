<template>
  <v-content fill-height fluid>
    <v-img dark style="height: 100vh;" :src="img">
      <v-row
          style="margin-top: 50vh"
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
          <h4 class="subheading font-weight-bold">
            Software engineer
          </h4>
          <h4>
            <v-btn fab>
              <v-icon> {{ linkedIn }}</v-icon>
            </v-btn>
          </h4>
        </v-col>
      </v-row>
    </v-img>
  </v-content>
</template>

<script>
import background from '@/assets/background.jpg'
import {mdiLinkedin} from '@mdi/js';

export default {
  name: "SiteHeader",
  data: () => ({
    img: background,
    linkedIn: mdiLinkedin
  })
}
</script>

<style scoped>
h1, h4 {
  text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 20px #000;
}
</style>