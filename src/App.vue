<template>
  <v-app id="app">
    <v-app-bar dense v-if="!$vuetify.breakpoint.mobile">
      <v-layout class="hidden-sm-and-down">
        <v-col class="text-right">
          <v-btn class="text-lowercase" text @click="$vuetify.goTo('#about', {})">about</v-btn>
          <v-btn class="text-lowercase" text @click="$vuetify.goTo('#experience', {})">experience</v-btn>
<!--          <v-btn outlined color="accent">Resume</v-btn>-->
        </v-col>
      </v-layout>
<!--      <v-layout class="hidden-md-and-up">-->
<!--        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
<!--      </v-layout>-->
    </v-app-bar>
<!--    <v-navigation-drawer-->
<!--        v-if="drawer"-->
<!--        v-model="drawer"-->
<!--        bottom-->
<!--        temporary-->
<!--    >-->
<!--      <v-list-->
<!--          nav-->
<!--          dense-->
<!--      >-->
<!--        <v-list-item-group v-model="group">-->
<!--          <v-list-item>-->
<!--            <v-btn class="text-lowercase" text @click="$vuetify.goTo('#about', {})">about</v-btn>-->
<!--          </v-list-item>-->
<!--          <v-list-item>-->
<!--            <v-btn class="text-lowercase" text @click="$vuetify.goTo('#experience', {})">experience</v-btn>-->
<!--          </v-list-item>-->
<!--        </v-list-item-group>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

    <main class="overflow-x-hidden">
      <v-layout column class="fill-height" v-if="!$vuetify.breakpoint.mobile">
        <SiteHeader style="min-height: 100vh"></SiteHeader>

        <About id="about" style="min-height: 100vh"></About>
        <ExperienceCard style="min-height: 100vh"></ExperienceCard>
      </v-layout>

      <v-layout column class="fill-height" v-if="$vuetify.breakpoint.mobile">
        <SiteHeader class="fill-height ma-auto" style="height: 100vh"></SiteHeader>
      </v-layout>
    </main>


    <v-footer>
      <v-col class="text-center" cols="12">
        2019 ~ {{ new Date().getFullYear() }} — <strong>jlackipl</strong>
        <span class="font-weight-thin">made with </span>
        <span class="accent--text">vue.js/vuetify</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import SiteHeader from "./components/SiteHeader";
import ExperienceCard from "./components/ExperienceCard";
import About from "./components/About";

export default {
  name: 'jlacki.pl',
  components: {About, ExperienceCard, SiteHeader},
  data: () => ({
    // drawer: false,
    // group: null,
  }),
  metaInfo: {
    title: "Jakub Łącki - software engineer"
  },
  watch: {
    // group() {
    //   this.drawer = false
    // },
  },
};
</script>

<style>
.v-toolbar__content * .text-lowercase .v-btn__content::before {
  content: "cd ~/";
  color: #88FFBB;
}


</style>