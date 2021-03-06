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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Obligación de dar, hacer y no hacer",
        text: `El objeto de la obligación tiene que ser conducta, pero esta conducta materia de la prestación o de la abstención puede referirse a cosas y entonces éstas serán objetos indirectos de las prestaciones de dar o de hacer, cuando los hechos, a su vez, recaigan sobre cosas; por ejemplo, contrato de obra que tiene por objeto un hecho, construir, pero habrá de referirse a la fabricación de alguna cosa mueble o inmueble. Pueden los hechos ser formas puras de conducta, sin referencia a las cosas, como ocurre generalmente en la prestación de servicios profesionales.`,
        description: "Materia de la prestación o de la abstención.",
        category: "Conciliación Civil",
      },
      {
        id: 10,
        img: require("../assets/services/civil/indemnizacion-por-danos-y-perjuicios.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
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
        banner: require("../assets/services/bgbanner.jpg"),
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
    ],
    services_extra: [
      {
        id: 13,
        img: require("../assets/services/juridico/derecho-de-familia.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho de familia",
        text: `Ofrecemos a nuestros clientes una asesoría especializada en familia: 
        Pensión de alimentos, régimen de visitas, tenencia; la  práctica en esta área se
         encuentra orientada a cubrir todo el espectro de necesidades que pudieran requerir las personas NATURALES, 
         velando siempre por el interés superior del niño y del adolescente, así mismo ofrecemos asesoría personalizada 
         con respecto a la liquidación de  gananciales y DIVORCIO RÁPIDO. `,
        description: "Asesoría especializada en familia.",
        category: "Asesoria Juridica",
      },
      {
        id: 14,
        img: require("../assets/services/juridico/derecho-reales.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derechos Reales",
        text: `
        Nos especializamos respecto de PROPIEDAD, el USUFRUCTO, la SERVIDUMBRE, la HIPOTECA, la PRENDA, la ANTICRESIS, la ENFITEUSIS y el censo. LA POSESIÓN puede ser o no un derecho real según el ordenamiento jurídico. 
        También evaluamos el procedimiento de:
        <br/>PRESCRIPCIÓN ADQUISITIVA DE DOMINIO
        La prescripción adquisitiva de dominio constituye un mecanismo legal que permite al poseedor de un bien adquirir la propiedad de este, siempre y cuando haya cumplido con desarrollar una conducta establecida por ley y en un período determinado, informó la Superintendencia Nacional de los Registros Públicos (Sunarp)
        <br/>OTORGAMIENTO DE ESCRITURA PÚBLICA
        se encuentra en el plano de protección jurídica en el que quiere investirse al derecho de propiedad ya ganado.
        `,
        description:
          "Especialidad respecto de propiedad, el usufructo, hipoteca, etc.",
        category: "Asesoria Jurídica",
      },
      {
        id: 15,
        img: require("../assets/services/juridico/derecho-corporativo.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho corporativo, comercial y contratos",
        text: `
        La práctica en esta área se encuentra orientada a cubrir todo el espectro de necesidades que pudieran requerir las personas jurídicas en temas corporativos y societarios, incluyendo la constitución de sociedades y sucursales, elaboración de actas de Juntas de Socios y Directorios, así como elaboración e inscripción de actos societarios tales como aumentos y reducciones de capital, regímenes de poderes, reorganización de sociedades (fusión, escisión, transformaciones, disoluciones y liquidaciones)
        <br/>
        El Estudio cuenta con experiencia en prestar servicios de auditoria legal en las empresas
        `,
        description:
          "Necesidades que pudieran requerir las personas en temas corporativos.",
        category: "Asesoria Jurídica",
      },
      {
        id: 16,
        img: require("../assets/services/juridico/litigios-y-arbitrajes.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Litigios y arbitrajes nacionales e internacionales",
        text: `
        Ofrecemos a nuestros clientes una asesoría especializada en la elaboración de estrategias para el desarrollo de procesos judiciales y arbítrales, así como un seguimiento dedicado de las causas hasta lograr la resolución de la controversia ya sea en el ámbito judicial o arbitral.
        <br/>El Estudio se encuentra preparado para afrontar las diversas controversias que pudiesen surgir entre nuestros clientes y terceras personas, asesorándolas desde el momento del surgimiento del conflicto, promoviendo negociaciones entre las partes, buscando, en la medida de lo posible, soluciones concertadas mediante la suscripción de transacciones extrajudiciales y de esta forma reducir los costos que pudiera generar el conflicto.
        <br/>Los miembros del Estudio tienen una vasta experiencia en esta materia, habiendo desarrollado un área eficaz en lograr recuperaciones, así como resolver cualquier tipo de conflicto que es ventilado en el Poder Judicial o ante un Tribunal Arbitral. La actividad es desarrollada tanto en el ámbito del derecho civil, comercial, constitucional, administrativo y laboral.
        `,
        description:
          "Elaboración de estrategias para el desarrollo de procesos judiciales.",
        category: "Asesoria Jurídica",
      },
      {
        id: 17,
        img: require("../assets/services/juridico/derecho-de-seguros.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho de seguros",
        text: `
        Prestamos asesoría en el campo de los seguros tanto a empresas de seguros, productores de seguros, ajustadores y personas que tengan algún tipo de interés involucrado en este campo. El asesoramiento abarca cuestiones internas propias del manejo o administración de los contratos de seguros como la solución de posibles conflictos que se pueden presentar.
        `,
        description: "Asesoría en el campo de los seguros.",
        category: "Asesoria Jurídica",
      },
      {
        id: 18,
        img: require("../assets/services/juridico/derecho-administrativo.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho administrativo y contratación con el estado",
        text: `
        El Estudio sus esfuerzos a asesorar a sus clientes en los procedimientos, trámites y gestiones que deben ser realizados ante las diversas entidades de la administración pública, particularmente los relativos con los procesos de contratación y adquisiciones del Estado.
        `,
        description: "Trámites realizados ante diversas entidades pública.",
        category: "Asesoria Jurídica",
      },
      {
        id: 19,
        img: require("../assets/services/juridico/derecho-civil.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho civil y contractual",
        text: `
        Esta área dirige sus esfuerzos a asesorar a sus clientes en las diversas materias del derecho reguladas en el Código Civil, tales como Obligaciones y Contratos, Familia, Sucesiones, entre otros. <br/>
En lo concerniente a contratos el Estudio brinda asesoría en la negociación, elaboración y celebración de contratos en general, incluyendo los concernientes a la contratación moderna, como la contratación en masa, vía cláusulas generales de contratación, contratos de Arrendamiento Financiero (Leasing), Franquicia, Factoraje, Licencia, Distribución, Fideicomiso, Concesión Comercial, entre otros.<br/>
Adicionalmente, asesoramos a nuestros clientes en la celebración de contratos de colaboración empresarial, tales como Joint Venture, Asociación en Participación y Consorcio, los mismos que si bien se encuentran regulados en la Ley General de Sociedades su naturaleza es de orden netamente contractual. Así como también brindamos asesoría a Asociaciones y demás personas jurídicas sin fines de lucro, colaborando para ello en la formalización y regularización de la documentación propia para el normal y regular desarrollo de sus actividades.

        `,
        description: "Materias del derecho reguladas en el Código Civil.",
        category: "Asesoria Jurídica",
      },
      {
        id: 20,
        img: require("../assets/services/juridico/derecho-laboral.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho laboral",
        text: `
        Asesoramos a nuestros clientes en todos los aspectos del derecho laboral, tanto en materia de relaciones individuales como colectivas, derecho procesal laboral, derecho previsional y derecho migratorio. <br/>
Nuestro objetivo es brindar un servicio de asesoría permanente, oportuno y eficiente a nuestros clientes, con la finalidad de coadyuvar a la gestión óptima del personal, nacional y expatriado, estableciendo tanto mecanismos de prevención y solución de conflictos laborales, migratorios y/o previsionales, como aquéllos que permitan adoptar decisiones efectivas y duraderas para aminorar, controlar y eliminar contingencias bajo la perspectiva que nos brindan los instrumentos legales de la práctica del derecho laboral.
        `,
        description: "Asesoramiento en todos los aspectos del derecho laboral.",
        category: "Asesoria Jurídica",
      },
      {
        id: 21,
        img: require("../assets/services/juridico/indecopi.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho de la competencia y protección al consumidor",
        text: `
        Contamos con experiencia asesorando a sus clientes ante las diversas Comisiones del Instituto Nacional de Defensa de la Competencia y Protección a la Propiedad Intelectual (INDECOPI), especialmente en tema relacionados con acciones que pudiesen haber tomado terceros que originan la distorsión del mercado, denunciando tales conductas ante el INDECOPI.
        <br/>
        Las antes referidas conductas no sólo pueden afectar al mercado y a los competidores, sino que también puede afectar a los consumidores por lo que nuestra asesoría también es orientada a estos últimos.
        `,
        description: "Asesoramiento en diversas Comisiones de INDECOPI.",
        category: "Asesoria Jurídica",
      },
      {
        id: 22,
        img: require("../assets/services/juridico/derecho-propiedad-intelectual.jpg"),
        banner: require("../assets/services/bgbanner.jpg"),
        name: "Derecho de la propiedad intelectual",
        text: `
        Asesoría en el registro y protección de derechos de propiedad industrial, tales como marcas de productos y servicios, lemas, nombres comerciales, entre otros.
        `,
        description:
          "Asesoramiento en registro y protección de derechos de propiedad industrial.",
        category: "Asesoria Jurídica",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
