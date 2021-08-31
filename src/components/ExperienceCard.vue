<template>
  <v-layout column justify-center align-center class="mt-auto fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <v-card elevation="1" tile color="transparent">
          <v-card-title id="experience">My last</v-card-title>
          <v-card-subtitle class="accent--text"><strong>contracts</strong></v-card-subtitle>
          <v-card-text class="secondary--text">
            <p>
              I want to share my experience from last recent contracts.
            </p>

          </v-card-text>
        </v-card>

        <v-row dense align="center" justify="center">
          <v-col cols="11" xs:="12">
            <v-timeline dense align-top>
              <v-timeline-item :hide-dot="$vuetify.breakpoint.mobile" small v-for="job in jobs" :key="job.company" fill-dot color="accent">
                <v-col cols="12">
                  <v-card class="elevation-5" tile>
                    <v-card-title>
                      <strong>
                        <span class="accent--text">{{ job.company }}</span>
                        -
                        <span class="font-weight-regular">{{ job.occupation }}</span>
                      </strong>
                    </v-card-title>
                    <v-card-subtitle><strong>{{ job.span }}</strong></v-card-subtitle>
                    <v-card-text class="text-justify">
                      {{ job.content }}
                    </v-card-text>
                  </v-card>
                  <v-card color="transparent" elevation="5">
                    <v-card-text>
                      <span class="grey--text text--accent-3 font-weight-thin">{{ job.tech }}</span>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  name: "ExperienceCard",
  data: () => ({
    jobs: [
      {
        company: "Auto1",
        occupation: "Katowice - Software Engineer",
        span: "August 2019 - September 2021",
        content: `
          Maintenance and development of systems in a company that is a leader in the purchase and sale of used
          cars
          throughout Europe. While working in the architecture of microservices, mainly PHP8 and Symfony 5 were
          used.
          But in some cases Golang and Nodejs were also used, e.g. to create AWS Lambda.
        `,
        tech: ['PHP 8', 'Symfony 5', 'terraform', 'AWS', 'jenkins'].join('  ')
      },
      {
        company: "Capgemini",
        occupation: "Katowice - Software Engineer",
        span: "January 2019 - August 2019",
        content: `Web based reporting tool development by using PHP technology and MySQL database and more. I have introduced to the team tools
         for collecting metrics and automated testing in projects in which I participated.`,
        tech: ['PHP 5.6', 'Symfony 3', 'MySQL'].join('  ')
      },
      {
        company: "Statscore",
        occupation: "Katowice - Software Engineer",
        span: "July 2016 - December 2018",
        content: `
          Designing, maintaining and developing backend systems for collecting, processing and distributing
          sports
          data(statistics and match incidents from almost 100 sports). I was also engaged in architectural works
          and I
          was filling a role of Client Consultant. I’ve gained a knowledge about a lot of IT technologies, such
          as
          PHP
          and NodeJS. I also learned how to make software more stable and easy to extend.
        `,
        tech: ['PHP7', 'Laravel', 'NodeJS', 'TeamCity', 'AWS', 'MySQL'].join('  ')
      }
    ]
  })
}
</script>

<style scoped>

</style>
