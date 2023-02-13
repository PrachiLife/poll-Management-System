<template>
  <!-- <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" clipped style="padding-top: 65px">
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Poll Management System</v-toolbar-title>
      </v-app-bar>
      <v-main></v-main>
    </v-app>
  </div> -->
  <div id="app">
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Poll Management System</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", to: "/" },
        { title: "Create Account", to: "/signup" },
        { title: "Login", to: "/login" },
        { title: "Pagenotfound", to: "/:pathMatch(.*)*" },
      ],
    };
  },
};
</script>

<style></style>
