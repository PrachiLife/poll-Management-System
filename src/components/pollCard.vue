<template>
  <div class="bg-surface-variant">
    <v-card width="400" height="350">
      <v-card-title>
        <div class="text-center">{{ poll.title }}</div>
      </v-card-title>
      <v-card-text>
        <div class="mt-10" v-if="role == 'admin'">
          <ul v-for="(optionObj, index) in poll.options" :key="index">
            <li>{{ optionObj.option }}</li>
          </ul>
        </div>
        <div class="mt-10" v-if="role != `admin`">
          <!-- <v-radio-group
            v-for="(optionObj, index) in poll.options"
            :key="index"
          >
            {{ optionObj.option }}{{ optionObj
            }}<v-radio name="votePoll" @click="voteToPoll(index, optionObj)">
            </v-radio>
          </v-radio-group> -->
          <div v-for="(optionObj, index) in poll.options" :key="index">
            <input
              type="radio"
              name="votePoll"
              @click="voteToPoll(index, optionObj.option, poll._id)"
            />
            {{ optionObj.option }}
          </div>
        </div>
        <div class="d-flex justify-space-around mt-10">
          <v-btn
            color="primary"
            @click="dialogAgain = true"
            v-if="role == `admin`"
            >Edit</v-btn
          >
          <v-btn color="primary" @click="deletePoll()" v-if="role == `admin`"
            >Delete</v-btn
          >
        </div>
        <v-dialog v-model="dialogAgain" width="auto">
          <ModalComponent2
            :dialogAgain="dialogAgain"
            :poll="poll"
            :show="show"
          />
        </v-dialog>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ModalComponent2 from "../components/ModalComponent2.vue";
export default {
  name: "pollCard",
  props: {
    poll: Object,
  },
  components: {
    ModalComponent2,
  },
  watch: {
    show() {
      console.log("show function");
    },
  },
  data() {
    return {
      dialogAgain: false,
      show: false,
    };
  },
  computed: {
    ...mapGetters(["role"]),
  },
  methods: {
    fun() {
      this.dialogAgain = true;
      this.show = !this.show;
    },
    deletePoll() {
      console.log("delete poll button is pressed");
      console.log(this.poll._id);
      this.$store.dispatch("deletePoll", this.poll._id);
    },
    voteToPoll(index, option, id) {
      console.log("vote is given to poll", index, option, id);
      this.$store.dispatch("voteToPoll", [index, option, id]);
    },
  },
};
</script>

<style>
.bg {
  background-color: rgb(153, 155, 156);
}
</style>
