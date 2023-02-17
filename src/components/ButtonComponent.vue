<template>
  <div class="">
    <v-btn variant="tonal" class="">{{ name }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    name: String,
  },
};
</script>

<style></style>
