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
        text: `El régimen de visitas es el derecho del padre o la madre que está separado o divorciado y que no tiene la guarda y custodia de sus hijos a pasar tiempo con sus hijos. Hay que decir que, además del derecho a un régimen de visitas 
          el progenitor no custodio tiene el deber de pagar la pensión de alimentos a favor de los hijos, pero que, el incumplimiento del pago de la pensión de alimentos no implica que el régimen de visitas se extinga. Es decir, con independencia 
          del pago o no de la pensión de alimentos el padre o la madre tiene derecho a pasar tiempo con su hijo, porque se entiende que no solo es un derecho del padre o de la madre, sino también del hijo y que el pago de la pensión de alimentos
          no debe ser condición para pasar tiempo con los hijos.`,
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
        text: `La pensión de alimentos puede definirse como el deber impuesto a una o varias personas de asegurar la subsistencia de una u otra, 
          suponiendo la conjunción de dos partes: una acreedora que se llama alimentista, que tiene el derecho a exigir y recibir los alimentos, 
          y otra deudora llamada alimentante, que tiene el deber legal y moral de prestarlos. Tratándose de  una separación matrimonial o divorcio, 
          la obligación de alimentos consiste en el deber impuesto a uno de los cónyuges frente al otro cónyuge o frente a los hijos. 
          <br/> 
          La pension de alimentos comprenden todo lo indispensable para el sustento, habitación, vestido, asistencia médica y educación e instrucción del alimentista.`,
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
        text: `La tenencia es una institución familiar que surge cuando los padres están separados de hecho o de derecho y tiene como finalidad establecer con quien se quedará el menor.
        Uno de los padres ejerce el derecho de tener a su hijo o hijos consigo. En la tenencia uno de los padres puede ceder este derecho según lo establecido por ley.
        <br/> <br/>
        La tenencia provisional es la facultad que tiene el padre que no tiene la custodia del menor de recurrir al Juez para solicitarle la tenencia provisional. Esto normalmente ocurre cuando el menor corre algún peligro en su integridad física o psicológica.
Si uno de los padres tiene la custodia de hecho entonces no podrá solicitar la tenencia provisional. Sin embargo, este padre o  madre que tiene la tenencia provisional podrá solicitar la tenencia.
        `,
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
