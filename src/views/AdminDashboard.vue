<template>
  <div class="">
    <NavigationComponent />
    <v-container class="text-center">
      <h1 class="mt-10 text-h4">
        Welcome {{ UserName }} to the Poll Management System
      </h1>
      <p class="mt-8 text-h5">
        Here,You can create,update,delete the poll.You can get create as many
        options as you want for your Polls.
      </p>
      <v-row>
        <v-col cols="12" sm="4">
          <!-- <ButtonComponent name="Create the poll"/> -->
          <PopupComponent name="Create the poll" @AddData="newEmittedData" />
        </v-col>
        <v-col cols="12" sm="4">
          <ButtonComponent name="Update the poll" />
        </v-col>
        <v-col cols="12" sm="4">
          <ButtonComponent name="Delete the poll" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
import PopupComponent from "../components/PopupComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "AdminDashboard",
  components: {
    NavigationComponent,
    PopupComponent,
    ButtonComponent,
  },
  computed: {
    ...mapGetters(["UserName"]),
  },
  methods: {
    async newEmittedData(AddData) {
      console.log(AddData);
      await this.$store.dispatch("addPoll", AddData);
    },
  },
};
</script>

<style>
.border {
  border: 2px solid black;
}
</style>
