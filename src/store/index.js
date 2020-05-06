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
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Regimen de visitas",
        text: "Contenido de regimen de visitas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        category: "Conciliación Familiar",
      },
      {
        id: 2,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Pension de alimentos",
        text: "Contenido de Pension de alimentos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Familiar",
      },
      {
        id: 3,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Tenencia de hijos",
        text: "Contenido de Tenencia de hijos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Familiar",
      },
      {
        id: 4,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Liquidacion de Gananciales",
        text: "Contenido de Liquidacion de Gananciales",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Familiar",
      },

      // CONCILIACION CIVIL

      {
        id: 5,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Desalojo",
        text: "Contenido de desalojo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
      },
      {
        id: 6,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Pago de deudas",
        text: "Contenido de Pago de deudas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
      },
      {
        id: 7,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Pago de alquileres",
        text: "Contenido de Pago de alquileres",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
      },
      {
        id: 8,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Obligación de dar suma de dinero",
        text: "Contenido de Obligación de dar suma de dinero",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
      },
      {
        id: 9,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Obligación de dar, hacer y no hacer",
        text: "Contenido de Obligación de dar, hacer y no hacer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
      },
      {
        id: 10,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Indemnización por daños y perjuicios",
        text: "Contenido de Indemnización por daños y perjuicios",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
      },
      {
        id: 11,
        img:
          "https://bloqueconstitucional.com/wp-content/uploads/2018/11/Acun%CC%83a-arti%CC%81culo-Web-proyecto-2-710x372.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Incumplimiento de contratos",
        text: "Contenido de Incumplimiento de contratos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
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
