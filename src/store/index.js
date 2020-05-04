import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isConciliacion: true,
    services: [
      // CONCILIACION FAMILIAR
      {
        id: 1,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Regimen de visitas",
        text: "Contenido de regimen de visitas",
        category: "CF",
      },
      {
        id: 2,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Pension de alimentos",
        text: "Contenido de Pension de alimentos",
        category: "CF",
      },
      {
        id: 3,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Tenencia de hijos",
        text: "Contenido de Tenencia de hijos",
        category: "CF",
      },
      {
        id: 4,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Liquidacion de Gananciales",
        text: "Contenido de Liquidacion de Gananciales",
        category: "CF",
      },
      // CONCILIACION CIVIL
      {
        id: 5,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Desalojo",
        text: "Contenido de desalojo",
        category: "CC",
      },
      {
        id: 6,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Pago de deudas",
        text: "Contenido de Pago de deudas",
        category: "CC",
      },
      {
        id: 7,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Pago de alquileres",
        text: "Contenido de Pago de alquileres",
        category: "CC",
      },
      {
        id: 8,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Obligación de dar suma de dinero",
        text: "Contenido de Obligación de dar suma de dinero",
        category: "CC",
      },
      {
        id: 9,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Obligación de dar, hacer y no hacer",
        text: "Contenido de Obligación de dar, hacer y no hacer",
        category: "CC",
      },
      {
        id: 10,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Indemnización por daños y perjuicios",
        text: "Contenido de Indemnización por daños y perjuicios",
        category: "CC",
      },
      {
        id: 11,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://image.freepik.com/vector-gratis/vista-rio-congelado-pequenas-casas-campo-montanas-concepto-paisaje-invernal-hills-hills_48369-13939.jpg",
        name: "Incumplimiento de contratos",
        text: "Contenido de Incumplimiento de contratos",
        category: "CC",
      },
    ],
  },
  getters: {
    services: (state) => {
      return state.services;
    },
    service: (state) => (id) => {
      return state.services.find((service) => service.id === id);
    },
  },
  mutations: {},
  actions: {},
});

export default store;
