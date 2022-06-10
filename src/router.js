import { createRouter, createWebHistory } from "vue-router";
import ContactLayout from "./views/layout/ContactLayout.vue";
import Contact from "./views/Contact.vue";
import Home from "./views/Home.vue";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    name: "Home", 
    component: Home,
  },
  {
    path: "/contact",
    name: "home",
    component: ContactLayout,
    children: [
      {
        path: "",
        name: Contact,
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
/*router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
 // console.log(loggedIn);
    // try to access a restricted page + not logged in
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  });*/
export default router;
