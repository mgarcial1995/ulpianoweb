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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
        banner:
          "https://blog.uclm.es/derechoconstitucionaltoledo/files/2017/11/Especialidad-en-Justicia-Constitucional-2-1080x420.jpg",
        name: "Regimen de visitas",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        category: "Conciliación Familiar",
      },
      {
        id: 2,
        img:
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
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
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Incumplimiento de contratos",
        text: "Contenido de Incumplimiento de contratos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        category: "Conciliación Civil",
      },
      {
        id: 12,
        img:
          "https://image.freepik.com/free-photo/judge-gavel-with-justice-lawyers-object-documents-working-table_28283-893.jpg",
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Asesoria legal",
        text: `El servicio de asesoría legal brinda a la ciudadanía peruana y
        extranjera. la posibilidad de orientación general de manera gratuita
        en diversas materias legales, como son: matrimonio, divorcio, sucesión
        intestada, testamentos, contratos en general, incumplimiento de
        obligaciones, declaratorias de fábricas, separación de bienes,
        saneamiento legal de propiedades y vehículos, alimentos, violencia
        familiar, omisión de asistencia familiar, rectificación de partidas,
        filiación extramatrimonial, patria potestad, tenencia, custodia y
        entrega de menor, régimen de visitas, interdicción, curatela, tutela,
        inscripción de partidas, incumplimientos laborales, constitución de
        empresas, delitos, faltas, etc`,
        description:
          "Orientación general de manera gratuita en diversas materias legales",
        category: "Asesoria Legal",
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
