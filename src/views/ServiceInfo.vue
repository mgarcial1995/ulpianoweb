/* eslint-disable no-unused-vars */
<template>
  <div class="service__info">
    <!-- <Navigator /> -->
    <div class="service__info__container">
      <div class="service__info__container__pre">
        <router-link to="/servicios-conciliacion">
          <i class="fas fa-arrow-circle-left"></i>
        </router-link>
        <p class="service__info__container__pre--category">{{ service.category }}</p>
      </div>

      <div class="service__info__container__content" v-if="service">
        <div class="service__info__container__content--banner">
          <img :src="service.banner" alt />
          <h1>{{ service.name }}</h1>
        </div>
        <p class="service__info__container__content--text" v-html="service.text"></p>
      </div>

      <div class="service__info__container__requisitos">
        <p>Requisitos:</p>
        <div
          class="service__info__container__requisitos--requisito"
          v-if="service.category == 'Conciliación Familiar'"
        >
          <ol>
            <li>Solicitud para Conciliar (formato único).</li>
            <li>Copia simple de DNI del solicitante (vigente).</li>
            <li>Copia simple de la partida de Nacimiento del menor(es).</li>
            <li>Señalar la dirección exacta del invitado.</li>
            <li>
              Declaración jurada (de no tener proceso judicial con sentencia por
              la materia por la que se solicita conciliar).
            </li>
          </ol>
        </div>
        <div class="service__info__container__requisitos--requisito" v-else>
          <ol>
            <li>Solicitud para Conciliar (formato único).</li>
            <li>Copia simple de DNI del solicitante (vigente).</li>
            <li>
              Acompañar a su solicitud todos los documentos que acrediten su
              pretensión, según sea la materia a conciliar.
            </li>
            <li>Señalar la dirección exacta del invitado.</li>
          </ol>
        </div>
      </div>

      <a
        href="https://firebasestorage.googleapis.com/v0/b/ulpiano-dd694.appspot.com/o/solicitud.pdf?alt=media&token=018a9279-73a6-4c97-9162-d2baff0328b4"
        download
        target="_blank"
        class="service__info__container__file"
      >
        <div class="service__info__container__file--button">
          <i class="fas fa-file-download"></i>
        </div>
        <div class="service__info__container__file--text">
          Descarga la solicitud para conciliar, rellena tus datos y acércate a
          nuestras instalaciones.
        </div>
      </a>

      <div class="service__info__container__links">
        <p class="service__info__container__links--link">
          Si deseas mayor información, te invitamos a leer la
          <a
            href="http://www.osce.gob.pe/htmls/conciliacion/leyconciliacionextraj.htm"
            target="_blank"
          >Ley de Conciliación,</a>
          como también el
          <a
            href="http://www.justiciaviva.org.pe/acceso_justicia/conciliacion/2.pdf"
            target="_blank"
          >Reglamento de Conciliación.</a>
        </p>
      </div>
    </div>
    <Form />
  </div>
</template>

<script>
// import Navigator from "../components/Navigator.vue";
// eslint-disable-next-line no-unused-vars
import store from "@/store/index.js";
import Form from "@/components/Form.vue";

export default {
  name: "Service",

  components: { Form },
  data() {
    return {
      serviceId: this.$route.params.id
    };
  },
  computed: {
    service() {
      return this.$store.state.services.find(
        service => service.id == this.serviceId
      );
    }
  },
  methods: {}
};
</script>
