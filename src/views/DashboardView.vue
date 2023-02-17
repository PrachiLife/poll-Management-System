<template>
  <div class="">
    <NavigationComponent />
    <div class="d-flex justify-end">
      <v-btn color="primary" @click="dialog = true"> Add the Poll </v-btn>
      <v-dialog v-model="dialog" width="auto">
        <ModalComponent @emitted_data="newEmittedData" name="Add The Poll" />
      </v-dialog>
    </div>
    Welcome {{ UserName }} as a {{ p }} to the Poll Management System
    <div v-for="(PollId, index) in addPollId" :key="index">
      <v-card
        class=""
        max-width="344"
        variant="outlined"
        @click="listAPoll(PollId)"
      >
        Poll{{ index + 1 }}
        <v-dialog v-model="dialog1" width="auto">
          <ModalComponent name="Edit The Poll" :PollId="PollId" />
        </v-dialog>
      </v-card>
    </div>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "DashboardView",
  components: {
    NavigationComponent,
    ModalComponent,
  },
  computed: {
    ...mapGetters(["UserName", "addPollId"]),
  },
  data() {
    return {
      p: window.localStorage.getItem("role"),
      dialog: false,
      dialog1: false,
    };
  },
  methods: {
    newEmittedData(emitted_data) {
      if (emitted_data == "add Poll button is pressed") {
        this.dialog = false;
      }
    },
    async listAPoll(PollId) {
      console.log(PollId);
      this.dialog1 = true;
      await this.$store.dispatch("listAPoll", PollId);
    },
  },
};
</script>

<style></style>
