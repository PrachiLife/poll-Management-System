<template>
  <div class="">
    <v-text-field
      label="Enter the Option"
      required
      color="black"
      v-model="option"
    ></v-text-field>
    <v-btn @click="fun()" outlined>Done</v-btn>
  </div>
</template>

<script>
export default {
  name: "TextfieldComponent",
  data() {
    return {
      option: "",
    };
  },
  methods: {
    fun() {
      console.log(this.option);
      this.$emit("emitted_data", this.option);
    },
  },
};
</script>

<style></style>
