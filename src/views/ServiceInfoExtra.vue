/* eslint-disable no-unused-vars */
<template>
  <div class="service__info">
    <!-- <Navigator /> -->
    <div class="service__info__container">
      <div class="service__info__container__pre">
        <router-link to="/servicios">
          <i class="fas fa-arrow-circle-left"></i>
        </router-link>
        <p class="service__info__container__pre--category">{{ serviceExtra.category }}</p>
      </div>

      <div class="service__info__container__content" v-if="serviceExtra">
        <div class="service__info__container__content--banner">
          <img :src="serviceExtra.banner" alt />
          <h1>{{ serviceExtra.name }}</h1>
        </div>
        <p class="service__info__container__content--text" v-html="serviceExtra.text"></p>
      </div>
    </div>
    <div class="form__section">
      <form class="form__contact" action>
        <p>Rellena tus datos para más información</p>
        <input class="form__contact--input" id="name" placeholder="Nombre" type="text" name="name" />
        <input
          class="form__contact--input"
          id="mobile"
          placeholder="Celular"
          type="text"
          name="mobile"
        />
        <input
          class="form__contact--input"
          id="email"
          placeholder="Correo"
          type="email"
          name="email"
        />

        <input class="form__contact--input button" type="button" value="Enviar datos" />
      </form>
    </div>
  </div>
</template>

<script>
// import Navigator from "../components/Navigator.vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  name: "Service",
  components: {},
  data() {
    return {};
  },
  computed: {
    serviceExtra() {
      return this.$store.getters.serviceExtra(this.$route.params.id);
    }
  },
  methods: {}
};
</script>
