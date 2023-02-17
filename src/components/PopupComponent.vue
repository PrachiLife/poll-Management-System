<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500px">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" @click.stop="dialog = true">
          {{ name }}
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Add The Poll</span>
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
                ></v-text-field>
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
          </v-container>
        </v-card-text>
        <!-- <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text> -->
        <v-card-actions>
          <v-btn color="black" class="white--text" block @click="addPoll()"
            >Add the Poll</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  data() {
    return {
      dialog: false,
      question: "",
      options: { option1: "", option2: "", option3: "", option4: "" },
    };
  },
  props: {
    name: String,
  },
  methods: {
    addPoll() {
      console.log(this.question, this.options);
      this.$emit("AddData", [this.question, this.options]);
      this.dialog = false;
      (this.question = ""),
        (this.options = { option1: "", option2: "", option3: "", option4: "" });
    },
  },
};
</script>

<style></style>
