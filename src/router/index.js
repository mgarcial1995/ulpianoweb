import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Service from "../views/Service.vue";
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
    path: "/servicios/:name",
    name: "Servicio",
    component: Service,
  },
  { path: "*", name: "Error", component: Error },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
