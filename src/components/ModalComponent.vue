<template>
  <div class="text-center">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ name }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Enter the Question"
                color="black"
                outlined
                required
                v-model="question"
                :value="fun()"
                ref="input"
              ></v-text-field>
              <v-btn v-if="update" @click="updatetheTitle()">Done</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h5>Add Options</h5>
              <v-text-field
                label="Enter the Option 1"
                required
                color="black"
                v-model="options.option1"
              ></v-text-field>
              <v-text-field
                label="Enter the Option 2"
                required
                color="black"
                v-model="options.option2"
              ></v-text-field>
              <v-text-field
                label="Enter the Option 3"
                required
                color="black"
                v-model="options.option3"
              ></v-text-field>
              <v-text-field
                label="Enter the Option 4"
                required
                color="black"
                v-model="options.option4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn @click="addPoll()" v-if="name == `Add The Poll`">Add</v-btn>
          <v-btn v-if="name == `Poll`">Add Options</v-btn>
          <v-btn v-if="name == `Edit The Poll`" @click="UpdateTitle()"
            >Update the title</v-btn
          >
          <v-btn v-if="name == `Edit The Poll`" @click="deletePoll()"
            >Delete The Poll</v-btn
          >
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ModalComponent",
  data() {
    return {
      dialog: false,
      question: "",
      options: { option1: "", option2: "", option3: "", option4: "" },
      update: false,
    };
  },
  computed: {
    ...mapGetters(["obj"]),
  },
  props: {
    name: String,
    index: Number,
    PollId: String,
  },
  methods: {
    async addPoll() {
      let p = "add Poll button is pressed";
      console.log(this.question, this.options, this.options.option1);
      await this.$store.dispatch("addPoll", [this.question, this.options]);
      this.$emit("emitted_data", p);
      this.question = "";
      this.options = { option1: "", option2: "", option3: "", option4: "" };
    },
    fun() {
      if (this.name != "Add The Poll" && this.update == false) {
        // console.log(this.obj);
        this.question = this.obj.title;
        this.options.option1 = this.obj.option1;
        this.options.option2 = this.obj.option2;
        this.options.option3 = this.obj.option3;
        this.options.option4 = this.obj.option4;
      }
    },
    UpdateTitle() {
      this.$refs.input.focus();
      this.update = true;
    },
    async updatetheTitle() {
      console.log(this.PollId, this.question);
      await this.$store.dispatch("updateTheTitle", [
        this.PollId,
        this.question,
      ]);
      this.update = false;
    },
    async deletePoll() {
      console.log(this.PollId);
      await this.$store.dispatch("deletePoll", this.PollId);
    },
  },
};
</script>

<style></style>
