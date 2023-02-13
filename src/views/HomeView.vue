<template>
  <div>
    <NavigationComponent />
    <v-row fluid class="color">
      <v-col cols="12" sm="2"></v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column mt-5">
          <div class="ma-2 pa-2 align-self-center text-h4">
            Welcome to the Poll Management System
          </div>
          <p class="text-sm-h6 mt-md-5 font-weight-regular">
            Seamlessly engage audiences across hybrid workspaces through live
            online polling, surveys, Q&As, quizzes, word clouds, and more.
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="d-none d-sm-block">
        <v-img src="../assets/Img1.png" min-height="250" cover></v-img>
      </v-col>
    </v-row>
    <v-row fluid class="color2">
      <v-col cols="12" sm="4" class="d-none d-sm-block">
        <v-img src="../assets/Img2.png" min-height="300" cover></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column mt-5">
          <div class="ma-2 pa-2 align-self-center text-h5">
            Poll Everywhere by Poll Management System
          </div>
          <div class="text-sm-h6 mt-md-5 font-weight-regular">
            Enjoy all the things you like about Poll Everywhere, directly in
            Poll Management System. Engage your audience and present results all
            in one place from wherever you work.
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="2"></v-col>
    </v-row>
    <v-row fluid class="color3">
      <v-col cols="12" sm="2"></v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column mt-5">
          <div class="ma-2 pa-2 align-self-center text-h5">
            Remote work resources for your new routine
          </div>
          <div class="text-sm-h6 mt-md-5 font-weight-regular">
            Working remotely for the first time. Looking for Poll on Poll
            Management Sytemz.Go,Visit the website and poll admin questions and
            get results.
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="d-none d-sm-block">
        <v-img src="../assets/Img3.png" min-height="300" cover></v-img>
      </v-col>
    </v-row>
    <v-row class="color2">
      <v-row align="center" justify="center" class="ma-10">
        <v-col cols="1">About</v-col> <v-col cols="1">Blog</v-col>
        <v-col cols="1">Security</v-col> <v-col cols="1">Cookies</v-col>
        <v-col cols="1">Terms</v-col> <v-col cols="1">Privacy</v-col>
        <v-col cols="1">Guides</v-col> <v-col cols="1">Services</v-col>
        <v-col cols="1">Events</v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
export default {
  name: "HomeView",
  components: {
    NavigationComponent,
  },
};
</script>

<style scoped>
.border {
  border: 2px solid black;
}
.color {
  background-color: #f8fafc;
}
.color2 {
  background-color: #f1f5f9;
}
.color3 {
  background-color: #e2e8f0;
}
</style>
