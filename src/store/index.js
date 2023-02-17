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
    UserName: "",
    AllPolls: [],
  },
  getters: {
    Msg: (state) => {
      return state.msg;
    },
    role: (state) => {
      return state.role;
    },
    UserName: (state) => {
      return state.UserName;
    },
    AllPolls: (state) => {
      return state.AllPolls;
    },
  },
  mutations: {
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
          console.log(token);
          let decoded = VueJwtDecode.decode(token);
          current_user = decoded;
          console.log(current_user);
          state.role = current_user.role;
          state.UserName = current_user.username;
          console.log(state.role);
          window.localStorage.setItem("role", state.role);
          console.log(state.UserName);
        } catch (err) {
          console.log("token is null", err);
        }
      }
      // if (userData.error == 0) {
      //   state.msg = "User not Exists ! Signup First..";
      // }
    },
    ALL_POLLS: (state, list_of_polls) => {
      console.log(state, list_of_polls);
      state.AllPolls = list_of_polls;
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
    allPolls: async (context) => {
      console.log(context);
      await axios
        .get(`http://176.9.137.77:3031/list_polls`)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            context.commit("ALL_POLLS", response.data.data);
          }
        });
    },
    addThePoll: async (context, data) => {
      console.log(context, data);
      let p = data.options.map(({ option }) => option).join("____");
      console.log(p);
      let queryParams = `?title=${data.title}%20polll&options=${p}`;
      console.log(queryParams);
      await axios
        .post(`http://176.9.137.77:3031/add_poll${queryParams}`)
        .then((response) => {
          console.log("data", response);
          if (response.status == 200) {
            context.dispatch("allPolls");
          }
        });
    },
    updateTitle: async (context, data) => {
      console.log(context, data, data[0], data[1]);
      await axios
        .post(
          `http://176.9.137.77:3031/update_poll_title?id=${data[1]}&title=${data[0]}`
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            context.dispatch("allPolls");
          }
        });
    },
    deletePoll: async (context, data) => {
      console.log(context, data);
      await axios
        .post(`http://176.9.137.77:3031/delete_poll?id=${data}`)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            context.dispatch("allPolls");
          }
        });
    },
    deleteOption: async (context, data) => {
      console.log(context, data);
      await axios
        .post(
          `http://176.9.137.77:3031/delete_poll_option?id=${data[0]}&option_text=${data[1]}`
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            context.dispatch("allPolls");
          }
        });
    },
    addNewOptionDb: async (context, data) => {
      console.log(context, data, data[0], data[1]);
      await axios
        .post(
          `http://176.9.137.77:3031/add_new_option?id=${data[1]}&option_text=${data[0]}`
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            context.dispatch("allPolls");
          }
        });
    },
    voteToPoll: async (context, data) => {
      console.log(context, data);
      const article = { id: data[2], option_text: data[1] };
      const headers = {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
          ".eyJ1c2VyX2lkIjoiNWEwMTgyYzU5NTI3ZmUwMDEyMzcwN2IyIiwiaWF0IjoxNTEwMDQ4NDY4LCJleHAiOjE1MTM2NDg0Njh9" +
          ".DG93Hq-Fde9kNZbgnr34l2dZyeEYyJ0OfD_9yZK1JCQ",
      };
      let response = "";
      try {
        response = await axios.post(
          `http://176.9.137.77:3031/do_vote`,
          article,
          { headers }
        );
        console.log(response);
      } catch (err) {
        if (err.response.data.error == 1) {
          alert("Vote Can't be given");
        }
      }
    },
  },
  modules: {},
});
