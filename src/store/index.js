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
        img: require("../assets/services/familiar/regimen-de-visitas.jpg"),
        banner:
          "https://blog.uclm.es/derechoconstitucionaltoledo/files/2017/11/Especialidad-en-Justicia-Constitucional-2-1080x420.jpg",
        name: "Regimen de visitas",
        text: `El régimen de visitas es el derecho del padre o la madre que está separado o divorciado y que no tiene la guarda y custodia de sus hijos a pasar tiempo con sus hijos. Hay que decir que, además del derecho a un régimen de visitas 
          el progenitor no custodio tiene el deber de pagar la pensión de alimentos a favor de los hijos, pero que, el incumplimiento del pago de la pensión de alimentos no implica que el régimen de visitas se extinga. Es decir, con independencia 
          del pago o no de la pensión de alimentos el padre o la madre tiene derecho a pasar tiempo con su hijo, porque se entiende que no solo es un derecho del padre o de la madre, sino también del hijo y que el pago de la pensión de alimentos
          no debe ser condición para pasar tiempo con los hijos.`,
        description: "El derecho de pasar el tiempo con los hijos.",
        category: "Conciliación Familiar",
      },
      {
        id: 2,
        img: require("../assets/services/familiar/pension-de-alimentos.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Pension de alimentos",
        text: `La pensión de alimentos puede definirse como el deber impuesto a una o varias personas de asegurar la subsistencia de una u otra, 
          suponiendo la conjunción de dos partes: una acreedora que se llama alimentista, que tiene el derecho a exigir y recibir los alimentos, 
          y otra deudora llamada alimentante, que tiene el deber legal y moral de prestarlos. Tratándose de  una separación matrimonial o divorcio, 
          la obligación de alimentos consiste en el deber impuesto a uno de los cónyuges frente al otro cónyuge o frente a los hijos. 
          <br/> 
          La pension de alimentos comprenden todo lo indispensable para el sustento, habitación, vestido, asistencia médica y educación e instrucción del alimentista.`,
        description:
          "Obligación legal y moral de asegurar la subsistencia de una persona.",

        category: "Conciliación Familiar",
      },
      {
        id: 3,
        img: require("../assets/services/familiar/tenencia-de-hijos.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Tenencia de hijos",
        text: `La tenencia es una institución familiar que surge cuando los padres están separados de hecho o de derecho y tiene como finalidad establecer con quien se quedará el menor.
        Uno de los padres ejerce el derecho de tener a su hijo o hijos consigo. En la tenencia uno de los padres puede ceder este derecho según lo establecido por ley.
        <br/> <br/>
        La tenencia provisional es la facultad que tiene el padre que no tiene la custodia del menor de recurrir al Juez para solicitarle la tenencia provisional. Esto normalmente ocurre cuando el menor corre algún peligro en su integridad física o psicológica.
Si uno de los padres tiene la custodia de hecho entonces no podrá solicitar la tenencia provisional. Sin embargo, este padre o  madre que tiene la tenencia provisional podrá solicitar la tenencia.
        `,
        description: "Finalidad de establecer con quien se quedará el menor.",

        category: "Conciliación Familiar",
      },
      {
        id: 4,
        img: require("../assets/services/familiar/liquidacion-de-gananciales.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Liquidacion de Gananciales",
        text: `En el régimen económico matrimonial de gananciales se forma una comunidad integrada por los bienes cuya masa proviene de las ganancias que cada uno de los cónyuges obtiene y de los rendimientos derivados del patrimonio ganancial y del propio patrimonio privativo. Esta comunidad se disolverá cuando se disuelva el matrimonio o instancia de las partes y, posteriormente, habrá de liquidarse, lo que supone determinar la distribución de los bienes por mitad entre los cónyuges, previas deducciones y reintegros de los bienes privativos.`,
        description:
          "Determinar la distribución de los bienes por mitad entre los cónyuges.",

        category: "Conciliación Familiar",
      },

      // CONCILIACION CIVIL

      {
        id: 5,
        img: require("../assets/services/civil/desalojo.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Desalojo",
        text: `La pretención de desalojo es aquella que tiene por objeto recuperar el uso y goce de inmueble que se encuentra ocupado por quien carece de titulo para ello, sea por tener una obligación exigible de restituirlo o por revestir el carácter de simple intruso sin pretensiones a la posesión.
        <br/><br/>
        La titularidad de dicha pretención corresponda no sólo al propietario, sino también al poseedor a título de dueño, al usufructuario, al usuario, y, en general, a todo aquel que tenga un derecho de uso y goce del inmueble.
        <br/><br/>
        Respecto del sujeto pasivo la pretensión es procedente en todos aquellos casos en que el demandado no tenga ningún derecho para oponerse a la restitución, ya sea por tratarse de un simple intruso o porque ha recibido la cosa con obligación de restituirla cuando dicha obligación se torne exigible.`,
        description:
          "Recuperar el inmueble que se encuentra ocupado por quien carece de titulo.",

        category: "Conciliación Civil",
      },
      {
        id: 6,
        img: require("../assets/services/civil/pago-de-deudas.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Pago de deudas",
        text: `Constituye una forma especial de pago por la cual el deudor, sin realizar la prestación convenida, lleva a cabo otra distinta en concepto de pago y que es aceptada por el acreedor.
        <br/><br/>
        Conocida también como datio in solutum, es la realización de una prestación distinta a la debida, aceptada por el acreedor con plenos efectos de extinción obligacional. No es necesario que el valor de lo dado sea igual al de lo debido; lo decisivo es la aceptación por el acreedor de la prestación sustitutoria. Esta forma de pago es aplicable también al caso en que, concurriendo varios acreedores ante un mismo deudor con créditos independientes, les cede éste sus bienes para pago. En este supuesto, hay una dación en pago de todas las deudas pendientes. Los bienes entregados por el deudor pasan a ser propiedad de los acreedores en la medida, forma y con los efectos extintivos que estipulen.`,
        description:
          "Llevar a cabo otra distinta en concepto de pago y que es aceptada por el acreedor.",

        category: "Conciliación Civil",
      },
      {
        id: 7,
        img: require("../assets/services/civil/pago-de-alquileres.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Pago de alquileres",
        text: `Un contrato de alquiler o de arrendamiento es una de las operaciones inmobiliarias financieras más comunes que tiene lugar en todas partes del mundo y respecto de todo tipo de objetos. En este contrato existen dos partes, de las cuales una es considerada arrendador y es propietaria del objeto en particular que pondrá a concesión de la parte considerada arrendataria para que esta última la utilice y ofrezca por ese uso un pago acordado previamente.
        <br/><br/>
        Un arrendamiento puede darse respecto de una cosa, como un objeto, un dispositivo o máquina, un servicio, como un bien o un trabajo, y una propiedad inmueble, como una vivienda u oficina.`,
        description:
          "Pago por el uso de la propiedad mueble o inmueble por un determinado tiempo.",

        category: "Conciliación Civil",
      },
      {
        id: 8,
        img: require("../assets/services/civil/obligacion-de-dar-dinero.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Obligación de dar suma de dinero",
        text: `Cuando la obligación consista en dar cosas que no son dinero,
        puede ocurrir que sea imposible su cumplimiento en especie y entonces aquella se resuelve en el pago de una suma de dinero. Lo mismo ocurre en el caso de incumplimiento de obligaciones de hacer o no hacer o de los daños ocasionados por un hecho ilícito.
        <br/><br/>
        El dinero es el medio normal de que se sirve el hombre para procurarse otros bienes; a la inversa de lo que ocurre con las
        demás cosas, no proporciona al hombre ningún placer por si mismo
        pero sirve de intermediario en el trueque de cosas y bienes: con ese objeto ha sido creado y garantizado por el estado y esta sujeto a su vigilancia.`,
        description: "Resolver el pago de una suma de dinero.",

        category: "Conciliación Civil",
      },
      {
        id: 9,
        img: require("../assets/services/civil/obligacion-de-hacer-no-hacer.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Obligación de dar, hacer y no hacer",
        text: `El objeto de la obligación tiene que ser conducta, pero esta conducta materia de la prestación o de la abstención puede referirse a cosas y entonces éstas serán objetos indirectos de las prestaciones de dar o de hacer, cuando los hechos, a su vez, recaigan sobre cosas; por ejemplo, contrato de obra que tiene por objeto un hecho, construir, pero habrá de referirse a la fabricación de alguna cosa mueble o inmueble. Pueden los hechos ser formas puras de conducta, sin referencia a las cosas, como ocurre generalmente en la prestación de servicios profesionales.`,
        description: "Materia de la prestación o de la abstención.",
        category: "Conciliación Civil",
      },
      {
        id: 10,
        img: require("../assets/services/civil/indemnizacion-por-daños-y-perjuicios.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Indemnización por daños y perjuicios",
        text: `Los daños y perjuicios son el menoscabo que sufre una persona a costa de la actuación de otra.
        <br/>
        Bajo esta circunstancia, los textos legales establecen un resarcimiento para el afectado en función del daño o perjuicio que se hubiera causado.
        Los daños podrán ser tanto materiales, como personales e incluso morales.
        <br/>
        Los daños patrimoniales son los que producen un menoscabo valorable en dinero sobre los intereses patrimoniales del perjudicado.
        <br/><br/>
        Los no patrimoniales, en principio, son aquellos en los que su valoración en dinero no tiene una base de equivalencia, por cuanto afectan a elementos o intereses de difícil valoración pecuniaria.
        <br/><br/>
        Los daños morales son los que no afectan al patrimonio del perjudicado; los morales impropios son aquéllos que a través de la lesión de intereses inmateriales transcienden a valores del patrimonio.
        <br/><br/>
        La responsabilidad por el acto ilícito civil o por un riesgo, se ha de entender como la carga económica que la ley impone al causante, obligándole a responder del daño sufrido.
        `,
        description: "Resarcimiento para el afectado por el daño.",

        category: "Conciliación Civil",
      },
      {
        id: 11,
        img: require("../assets/services/civil/incumplimiento-de-contrato.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Incumplimiento de contratos",
        text: `
        El incumplimiento de contrato es una causa de acción legal en donde un acuerdo vinculante o un intercambio negociado no es respetado por una o más de las partes del contrato por mal desempeño o interferencia con el desempeño de las otras partes.
<br/><br/>
El incumplimiento es uno de los elementos configuradores de la responsabilidad contractual.
<br/><br/>
La noción de incumplimiento no es unívoca pues cada sistema jurídico puede priorizar elementos distintos, tales como la imputabilidad y/o la asunción del riesgo de no-consecución del resultado material. Así, en los primeros, el eje se colocará en la acreditación de que el resultado no se alcanzó a causa de la falta de diligencia del deudor; mientras que, en los segundos, se deberá demostrar que el deudor asumió el riesgo de materializar cierto resultado útil, por lo que cualquier desviación será calificada como un incumplimiento.`,
        description: "Intercambio negociado no respetado.",

        category: "Conciliación Civil",
      },
      {
        id: 12,
        img: require("../assets/services/civil/pago-de-deudas.jpg"),
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
          "Orientación general de manera gratuita en diversas materias legales.",
        category: "Asesoria Legal",
      },
    ],
    services_extra: [
      {
        id: 13,
        img: require("../assets/services/civil/pago-de-deudas.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Asesoria Juridica",
        text: "Contenido de asesoria legal",
        description: "Contenido de asesoria legal.",
        category: "Asesoria Juridica",
      },
      {
        id: 14,
        img: require("../assets/services/civil/pago-de-deudas.jpg"),
        banner:
          "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/04/12/15550800990306.jpg",
        name: "Asesoria Prueba",
        text: "Contenido de asesoria legal",
        description: "Contenido de Prueba",
        category: "Asesoria Jurídica",
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
    servicesExtra: (state) => {
      return state.services_extra;
    },
    serviceExtra: (state) => (id) => {
      return state.services_extra.find(
        (serviceExtra) => serviceExtra.id === id
      );
    },
  },
  mutations: {},
  actions: {},
});

export default store;
