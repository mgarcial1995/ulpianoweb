import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    services: [
      {
        id: 0,
        img:
          "http://www.fondosblackberry.com/user-content/uploads/wall/mid/91/Cayo-los-Mosquises-Venezuela1.JPG",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Regimen de visitas",
        text: "Contenido de regimen de visitas",
      },
      {
        id: 1,
        img:
          "http://www.fondosblackberry.com/user-content/uploads/wall/mid/91/Cayo-los-Mosquises-Venezuela1.JPG",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Pension de alimentos",
        text: "Contenido de Pension de alimentos",
      },
      {
        id: 2,
        img:
          "http://www.fondosblackberry.com/user-content/uploads/wall/mid/91/Cayo-los-Mosquises-Venezuela1.JPG",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Tenencia de hijos",
        text: "Contenido de Tenencia de hijos",
      },
    ],
  },
  getters: {
    services: (state) => {
      return state.services;
    },
    service: (state) => (name) => {
      return state.services.find((service) => service.name === name);
    },
  },
  mutations: {},
  actions: {},
});

export default store;
