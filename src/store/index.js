import Vue, { reactive } from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Users: [],
    msg: "",
    role: "",
  },
  getters: {
    AdminUsers: (state) => {
      return state.Users;
    },
    Msg: (state) => {
      return state.msg;
    },
    role: (state) => {
      return state.role;
    },
  },
  mutations: {
    // GET_USERINFO: (state, userdata) => {
    //   state.Users = userdata;
    // },
    CREATE_ACCOUNT: (state, userData) => {
      console.log(userData[0], userData[1]);
      if (userData[1] == 0) {
        console.log("Account is created");
        state.msg = "Account is created";
        state.Users = userData;
        console.log(state);
      } else {
        console.log("Account already exists");
        state.msg = "Account already exists";
      }
    },
    LOGIN_ACCOUNT: (state, userData) => {
      let current_user = reactive({});
      console.log(state, userData.error, userData.token);
      if (userData.error == 1) {
        console.log("User not Exists");
        state.msg = "User not Exists";
      } else {
        state.msg = "";
        window.localStorage.setItem("token", userData.token);
        try {
          let token = window.localStorage.getItem("token");
          let decoded = VueJwtDecode.decode(token);
          current_user = decoded;
          console.log(current_user);
          state.role = current_user.role;
          console.log(state.role);
        } catch (err) {
          console.log("token is null", err);
        }
      }
      // if (userData.error == 0) {
      //   state.msg = "User not Exists ! Signup First..";
      // }
    },
  },
  actions: {
    createAccount: async (context, data) => {
      console.log(context, data);
      await axios
        .post(
          ` http://176.9.137.77:3031/add_user?username=${data[0]}&password=${data[1]}&role=${data[2]}`
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            context.commit("CREATE_ACCOUNT", [
              response.data.data,
              response.data.error,
            ]);
          }
        });
    },
    loginAccount: async (context, data) => {
      console.log(context, data);
      await axios
        .post(
          `http://176.9.137.77:3031/login?username=${data[0]}&password=${data[1]}`
        )

        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            context.commit("LOGIN_ACCOUNT", response.data);
          }
        });
    },
  },
  modules: {},
});
