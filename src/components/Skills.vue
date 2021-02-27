<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" align="center">
        <h1 class="mb-4">Skills</h1>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col sm="12" md="3" v-for="skill in skills" :key="skill.name">
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
            {{ skill.text }}
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
        text: ""
      },
      {
        name: "Symfony 5",
        image: "https://symfony.com/logos/symfony_black_03.png",
        rating: 4,
        text: ""
      },
      {
        name: "Golang",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
        rating: 3.5,
        text: ""
      },
      {
        name: "Terraform",
        image: "https://www.terraform.io/img/og-image.png",
        rating: 3.5,
        text: ""
      },
    ]
  })
}
</script>

<style scoped>

</style>