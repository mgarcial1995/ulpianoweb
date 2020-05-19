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
    <Form />
  </div>
</template>

<script>
// import Navigator from "../components/Navigator.vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import Form from "../components/Form.vue";

export default {
  name: "Service",
  components: { Form },
  data() {
    return {
      serviceExtraId: this.$route.params.id
    };
  },
  computed: {
    serviceExtra() {
      return this.$store.state.services_extra.find(
        service => service.id == this.serviceExtraId
      );
    }
  },
  methods: {}
};
</script>
