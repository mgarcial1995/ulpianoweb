<template>
  <div class="services">
    <div class="services__container">
      <div class="services__container__services">
        <p class="services__container__services--title">Conciliaciones familiar y civil</p>
        <div class="list__services">
          <Service v-for="service in services" :key="service.id" :service="service" />
        </div>
        <br />
        <br />
        <p class="services__container__services--title">Asesoria Jurídica</p>
        <div class="list__services">
          <ServiceExtra
            v-for="service_extra in services_extra"
            :key="service_extra.id"
            :service_extra="service_extra"
          />
        </div>
      </div>

      <Form />
    </div>
    <!-- <div class="guide__section">
      <p class="text__guide">Visítanos para más información</p>
      <router-link to="/contacto" class="arrow__guide" href="#">
        <img src="../assets/arrow-guide.svg" alt="arrow" />
      </router-link>
    </div>-->

    <div class="button__open__form" @click="openForm()">
      <i class="far fa-edit"></i>
    </div>
  </div>
</template>

<script>
import Service from "../components/Service.vue";
import ServiceExtra from "../components/ServiceExtra.vue";
import Form from "../components/Form.vue";

import { mapState } from "vuex";

export default {
  name: "Services",
  data() {
    return { showButton: true };
  },

  props: {
    form: { required: true, type: Object }
  },
  components: { Service, ServiceExtra, Form },
  computed: {
    ...mapState(["services"]),
    ...mapState(["services_extra"])
  },
  methods: {
    openForm() {
      let form = document.getElementById("form");
      form.style.display = "block";
    },
    closeForm() {}
  }
};
</script>
