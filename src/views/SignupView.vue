<template>
  <div class="">
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-img
            max-width="250px"
            max-height="250px"
            src="https://raw.githubusercontent.com/edu-fedorae/vuetify-components/main/src/assets/logo.png"
            class="mx-auto"
            alt="logo"
          ></v-img>
        </v-col>
      </v-row>
      <v-form ref="form">
        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="7">
            <v-text-field
              label="Enter Your Name"
              v-model="UserName"
              outlined
              type="text"
              color="black"
              :rules="[(v) => !!v || 'Username is required']"
              prepend-inner-icon="mdi-mail"
              class="rounded-0 mx-auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="7">
            <v-text-field
              label="Enter Your Password"
              v-model="Password"
              outlined
              color="black"
              type="password"
              :rules="[(v) => !!v || 'Password is required']"
              prepend-inner-icon="mdi-lock"
              class="rounded-0 mx-auto"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="7" class="mt-1 d-flex flex-row wrap justify-end">
            <v-select
              v-model="select"
              :items="items"
              color="black"
              :rules="[(v) => !!v || 'Role is required']"
              label="Role"
              required
              outlined
              class="rounded-0"
              prepend-inner-icon="mdi-email"
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="7">
            <v-btn
              depressed
              color="black"
              class="white--text rounded-0"
              x-large
              block
              @click="validate"
            >
              CREATE ACCOUNT
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-row justify="center" no-gutters>
        <v-col cols="12" sm="7" class="mt-1 d-flex flex-row wrap justify-end">
          <span style="color: #757575"> Already Have Account? </span>
          <router-link :to="{ name: 'LoginView' }">
            <span
              style="color: #000000"
              class="text-decoration-underline font-weight-bold"
            >
              Login</span
            ></router-link
          >
        </v-col>
      </v-row>
      <v-row justify="center">
        <!-- <v-col cols="12" sm="7" class="text-h5 font-weight-medium">{{
          Msg
        }}</v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SignupView",
  data() {
    return {
      UserName: "",
      Password: "",
      items: ["admin", "guest"],
      select: null,
    };
  },
  computed: {
    ...mapGetters(["Msg"]),
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        alert("form is valid");
        await this.$store.dispatch("createAccount", [
          this.UserName,
          this.Password,
          this.select,
        ]);
        console.log(this.UserName);
        console.log(this.Password);
        console.log(this.select);
        console.log(this.Msg);
        if (this.Msg == "Account is created") {
          alert("Account is Created");
          this.$router.push("/login");
        } else {
          this.$router.push("/");
        }
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style></style>
