<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" align="center">
        <h1 class="mb-4">Skills</h1>
        <p>Here I want to present my opinion and my self-esteem about some skill that I use recently in work.</p>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col sm="6" md="3" v-for="skill in skills" :key="skill.name">
        <v-card>
          <v-img
              aspect-ratio="1"
              contain
              :src="skill.image"></v-img>
          <v-card-title>{{ skill.name }}</v-card-title>
          <v-card-subtitle>
            <v-rating
                v-model="skill.rating"
                background-color="primary lighten-3"
                color="primary"
                readonly
                large
            ></v-rating>
          </v-card-subtitle>
          <v-card-text>
            <p style="text-align: justify">{{ skill.text }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  data: () => ({
    skills: [
      {
        name: "PHP",
        image: "https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png",
        rating: 4,
        text: "I have more than 5 years experience in PHP development. Since the beginning I faced a lot of different projects and problem to solve. Starts with create simple website and tivial CRUD APIs and finish on more complex software and system that comunicate in decentralized archtecture."
      },
      {
        name: "Symfony 5",
        image: "https://symfony.com/logos/symfony_black_03.png",
        rating: 4,
        text: "In my career Symfony is most recent framework that I usually used. That frame work is well documented and straightforward in use to create small CRUD apis to more advanced application."
      },
      {
        name: "Golang",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
        rating: 3.5,
        text: "I start working in Golang at 2020. This technology I usually using for creating small microservices or AWS lambda that is better to write in Go then other languages."
      },
      {
        name: "Terraform",
        image: "https://www.terraform.io/img/og-image.png",
        rating: 3.5,
        text: "In my opinion one of best tools to make infrastructure bend to programmer will."
      },
      {
        name: "CI/CD",
        image: "https://www.mabl.com/hubfs/CICDBlog.png",
        rating: 3,
        text: "As a developer I witness many different approach for CI/CD. Usually companies have only CI that build code, run some test and do some static analyze on pull request. I used few tools for that. Jenkins usually is the standard in every company. But I also have occasion to know TeamCity. In my private work currently I only use Github Action."
      },
      {
        name: "Databases",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Database.svg/1200px-Database.svg.png",
        rating: 3,
        text: "I always say that I'm not database developer. I use databases as a tool to store some information and in the simplest way that is necessary."
      },
    ]
  })
}
</script>

<style scoped>

</style>