<template>
  <div class="">
    <NavigationComponent />
    <div class="d-flex justify-end ma-10">
      <v-btn @click="dialog = true" v-if="role == 'admin'">Add The Poll</v-btn>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <pollCard v-for="(poll, index) in AllPolls" :key="index" :poll="poll" />
    </div>
    <v-dialog v-model="dialog" width="auto">
      <ModalComponent2 :dialog="dialog" />
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pollCard from "../components/pollCard.vue";
import NavigationComponent from "../components/NavigationComponent.vue";
import ModalComponent2 from "../components/ModalComponent2.vue";
export default {
  name: "DashboardNew",
  components: {
    pollCard,
    NavigationComponent,
    ModalComponent2,
  },
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    this.$store.dispatch("allPolls");
  },
  computed: {
    ...mapGetters(["AllPolls", "role"]),
  },
};
</script>

<style></style>
