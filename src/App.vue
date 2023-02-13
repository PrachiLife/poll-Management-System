<template>
  <v-app>
    <!-- <router-link to="/">Home</router-link> -->

    <!-- <NavigationComponent /> -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import NavigationComponent from "./components/NavigationComponent.vue";
export default {
  name: "App",
  components: {
    // FooterComponent,
    //  NavigationComponent,
  },
};
</script>

<style>
.width {
  max-width: 80%;
  margin: auto;
}
</style>
