<template>
  <div class="">
    <v-card>
      {{ isEdit ? "Edit Poll" : "Add New Poll here" }}
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Enter the Question"
                color="black"
                outlined
                required
                v-model="pollData.title"
              ></v-text-field>
              <v-btn v-if="isEdit == true" @click="updateTitle()">Save</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h5>Options</h5>
              <div v-for="(opt, index) in pollData.options" :key="index">
                <div class="d-flex">
                  <v-text-field
                    label="Enter the Option "
                    required
                    color="black"
                    v-model="opt.option"
                  ></v-text-field>
                  <v-btn
                    v-if="isEdit == true"
                    @click="deleteOption(opt, index, opt.option)"
                    >Delete</v-btn
                  >
                  <v-btn
                    v-if="pollData.options[index].save"
                    @click="addNewOptionDb(opt.option, pollData._id)"
                    >Save Option</v-btn
                  >
                </div>
              </div>
              <v-btn v-if="isEdit == false" @click="addThePoll()"
                >Add The Poll</v-btn
              >
              <button @click="addNewOption()">add new options</button>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ModalComponent2",
  props: {
    dialog: Boolean,
    poll: Object,
    dialogAgain: Boolean,
  },
  watch: {
    // poll(val) {
    //   console.log("poll data is ", val);
    //   if (val) {
    //     this.isEdit = true;
    //     this.pollData = this.poll;
    //   } else {
    //     this.isEdit = false;
    //   }
    // },
    //   dialogAgain(val) {
    //     console.log("poll data is ", val);
    //     if (val) {
    //       this.isEdit = true;
    //       this.pollData = this.poll;
    //     } else {
    //       console.log(this.isEdit);
    //       this.isEdit = false;
    //     }
    //   },
    dialog(val) {
      console.log(val);
      this.pollData.title = "";
      this.pollData.options = [{ option: "" }, { option: "" }];
    },
  },
  created() {
    if (this.dialogAgain == true) {
      this.isEdit = true;
      this.pollData = this.poll;
    } else {
      this.isEdit = false;
    }
  },
  data() {
    return {
      isEdit: false,
      pollData: {
        title: "",
        options: [
          { option: "", save: false },
          { option: "", save: false },
        ],
      },
      // saveOption: false,
    };
  },
  methods: {
    addNewOption() {
      this.pollData.options.push({ option: "" });
      if (this.isEdit == true) {
        this.pollData.options.push({ option: "", save: true });
      }
      console.log("add new option button is pressed");
      // if (this.isEdit == true) {
      //   console.log("in the edit section");
      //   this.saveOption = true;
      // }
    },
    addNewOptionDb(option, id) {
      console.log(option, id);
      console.log("add new option to db button is pressed");
      this.$store.dispatch("addNewOptionDb", [option, id]);
    },
    addThePoll() {
      console.log("add the poll button is pressed");
      console.log(this.pollData);
      this.$store.dispatch("addThePoll", this.pollData);
    },
    updateTitle() {
      console.log("update the title button is pressed");
      console.log(this.pollData, this.poll);
      console.log(this.pollData.title, this.pollData._id);
      this.$store.dispatch("updateTitle", [
        this.pollData.title,
        this.pollData._id,
      ]);
    },
    deleteOption(opt, index, optionText) {
      console.log(
        "delete option is pressed",
        opt,
        index,
        this.pollData._id,
        optionText
      );
      console.log(this.poll, this.pollData, this.pollData.options, index);
      this.pollData.options.splice(index, 1);
      this.$store.dispatch("deleteOption", [this.pollData._id, optionText]);
    },
  },
};
</script>

<style></style>
