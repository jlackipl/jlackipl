<template>
  <v-app>
    <SiteHeader></SiteHeader>

    <v-main>
      <Story></Story>
      <Experience></Experience>
      <Skills></Skills>
    </v-main>

    <v-footer dark absolute color="primary">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>jlackipl</strong> <span class="font-weight-thin">made with vuejs/vuetifyjs</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import Experience from "@/components/Experience";
import Story from "@/components/Story";
import Skills from "@/components/Skills";

export default {
  name: 'jlacki.pl',
  components: {Skills, Story, Experience, SiteHeader},
  data: () => ({}),
  metaInfo: {
    title: "jlacki.pl - software engineer"
  }
};
</script>

<style>
.single-screen {
  min-height: 100vh;
}
</style>