<template>
  <v-container class="pb-5 pt-5">
    <v-row >
      <v-col align="center">
        <h1 class="mb-4">Last contracts</h1>
        <p>I want to share my experience from last recent contracts.</p>
      </v-col>
    </v-row>
    <v-row dense>
      <v-timeline align-top :dense="$vuetify.breakpoint.mobile">
        <v-timeline-item
            color="primary"
            small
            v-for="job in jobs"
            :key="job.company"
        >
          <v-row>
            <v-col>
              <h3><strong>{{ job.company }} - <span class="font-weight-regular">{{ job.occupation }}</span></strong>
              </h3>
              <div class="subtitle-2"><strong>{{ job.span }}</strong></div>
              <div class="caption">
                <p>{{ job.content }}</p>
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
  data: () => ({
    jobs: [
      {
        company: "Auto1",
        occupation: "Katowice - Software Engineer",
        span: "August 2019 - present",
        content: `
          Maintenance and development of systems in a company that is a leader in the purchase and sale of used
          cars
          throughout Europe. While working in the architecture of microservices, mainly PHP8 and Symfony 5 were
          used.
          But in some cases Golang and Nodejs were also used, e.g. to create AWS Lambda.
        `
      },
      {
        company: "Capgemini",
        occupation: "Katowice - Software Engineer",
        span: "January 2019 - August 2019",
        content: `Web based reporting tool development by using PHP technology and MySQL database and more. I have introduced to the team tools for collecting metrics and automated testing in projects in which I participated.`
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
        `
      }
    ]
  })
}

</script>

