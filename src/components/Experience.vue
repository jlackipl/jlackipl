<template>
  <v-container class="pb-5 pt-5">
    <v-row>
      <v-col>
        <h1 class="mb-4">
          Experience from last 3 contracts
        </h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-timeline align-top :dense="$vuetify.breakpoint.mobile">
        <v-timeline-item
            color="pink"
            small
        >
          <v-row>
            <v-col>
              <strong>August 2019 - present</strong>
            </v-col>
            <v-col>
              <strong>Auto1, <span class="font-weight-regular"> Katowice — Software Engineer</span></strong>
              <div class="caption">
                Maintenance and development of systems in a company that is a leader in the purchase and sale of used
                cars
                throughout Europe. While working in the architecture of microservices, mainly PHP8 and Symfony 5 were
                used.
                But in some cases Golang and Nodejs were also used, e.g. to create AWS Lambda.
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
            color="pink"
            small
        >
          <v-row>
            <v-col>
              <strong>January 2019 - August 2019</strong>
            </v-col>
            <v-col>
              <strong>Capgemini, <span class="font-weight-regular"> Katowice — Software Engineer</span></strong>
              <div class="caption">
                Maintenance and development of systems in a company that is a leader in the purchase and sale of used
                cars
                throughout Europe. While working in the architecture of microservices, mainly PHP7 and Symfony 4 were
                used.
                But in some cases Golang and Nodejs were also used, e.g. to create AWS Lambda.
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
            color="pink"
            small
        >
          <v-row>
            <v-col class="col-sm-12">
              <strong>July 2016 - December 2018</strong>
            </v-col>
            <v-col class="col-sm-12">
              <strong>Statscore, <span class="font-weight-regular"> Katowice — Software Engineer</span></strong>
              <div class="caption">
                Designing, maintaining and developing backend systems for collecting, processing and distributing
                sports
                data(statistics and match incidents from almost 100 sports). I was also engaged in architectural works
                and I
                was filling a role of Client Consultant. I’ve gained a knowledge about a lot of IT technologies, such
                as
                PHP
                and NodeJS. I also learned how to make software more stable and easy to extend.
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Experience",
}
</script>

