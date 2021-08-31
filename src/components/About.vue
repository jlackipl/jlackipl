<template>
  <v-layout column justify-center align-center class="mt-auto fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <v-card elevation="1" tile>
          <v-card-title>Hi! I'm</v-card-title>
          <v-card-subtitle class="accent--text"><strong>Software engineer</strong></v-card-subtitle>
          <v-card-text class="text-justify secondary--text">
            <p>
              with cloud/backend specialization. I mainly working on microservices architecture powered on AWS
              and GCP. My primary language is <span class="accent--text">Golang</span> and <span class="accent--text">PHP</span>. I have also
              little experience with frontend in <span class="accent--text">vue.js</span> and <span class="accent--text">vuetify</span>.
            </p>
            <p>
              And this is my basic tech stack:
            </p>
            <v-row dense>
              <v-col>
                <v-list>
                  <v-list-item v-for="tech in techs[0]" :key="tech">
                    <v-list-item-icon>
                      <v-icon small color="accent" v-text="mdiPound"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>{{ tech }}</v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col>
                <v-list>
                  <v-list-item v-for="tech in techs[1]" :key="tech">
                    <v-list-item-icon>
                      <v-icon small color="accent" v-text="mdiPound"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>{{ tech }}</v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import {mdiPound} from '@mdi/js'

export default {
  name: "About",
  data: () => ({
    mdiPound: mdiPound,
    techs: [
      [
        'Golang',
        'PHP 7/8',
        'terraform',
      ],
      [
        'AWS/GCP',
        'JS',
        'NodeJS',
      ]
    ],
  }),
}
</script>

<style scoped>

</style>
