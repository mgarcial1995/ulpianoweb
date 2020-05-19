import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import ServiceInfo from "../views/ServiceInfo.vue";
import ServiceInfoExtra from "../views/ServiceInfoExtra.vue";

import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: About,
  },
  {
    path: "/servicios",
    name: "Services",
    component: Services,
  },
  {
    path: "/contacto",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/servicios/:id/:name",
    name: "Servicio",
    component: ServiceInfo,
  },
  // {
  //   path: "/servicios/:id",
  //   name: "Servicio",
  //   component: ServiceInfo,
  // },
  {
    path: "/servicios-asesoria/:id/:name",
    name: "ServicioAsesoria",
    component: ServiceInfoExtra,
  },
  { path: "*", name: "Error", component: Error },
];

const router = new VueRouter({
  mode: "history",
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     const position = {};
  //     if (to.hash) {
  //       position.selector = to.hash;
  //       return false;
  //     }
  //   }
  // },
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
