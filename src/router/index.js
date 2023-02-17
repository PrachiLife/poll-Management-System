import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardNew from "../views/DashboardNew.vue";
//import DashboardView from "../views/DashboardView.vue";
import PagenotfoundView from "../views/PagenotfoundView";
//import AdminDashboard from "../views/AdminDashboard";
//import GuestDashboard from "../views/GuestDashboard";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "DashboardNew",
    component: DashboardNew,
  },
  // {
  //   path: "/admin",
  //   name: "AdminDashboard",
  //   component: AdminDashboard,
  // },
  // {
  //   path: "/guest",
  //   name: "GuestDashboard",
  //   component: GuestDashboard,
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "PagenotfoundView",
    component: PagenotfoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// let p=window.localStorage.getItem("token");
// router.beforeEach((to,from,next)=>{
//   if(to.path==="/login" && p)
//   {

//   }
// })

export default router;
