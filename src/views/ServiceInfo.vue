<template>
  <div class="service__info">
    <!-- <Navigator /> -->
    <div class="service__info__container">
      <div class="service__info__container__pre">
        <router-link to="/servicios">
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

      <a
        v-if="service.category === 'Conciliación Civil' || service.category === 'Conciliación Familiar'"
        href="#"
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
export default {
  name: "Service",
  components: {},
  data() {
    return {};
  },
  computed: {
    service() {
      return this.$store.getters.service(this.$route.params.id);
    }
  }
};
</script>
