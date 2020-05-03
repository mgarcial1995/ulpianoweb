<template>
  <div class="services">
    <div class="services__container">
      <div class="services__container__services">
        <h1>Servicios</h1>
        <div class="list__services">
          <div v-for="(service, index) in services" :key="index">
            <Service :service="service" />
          </div>
        </div>
      </div>
      <div class="form__contact"></div>
    </div>
  </div>
</template>

<script>
import Service from "../components/Service.vue";
import { mapState } from "vuex";

export default {
  name: "Services",

  components: { Service },
  computed: {
    ...mapState(["services"])
  }
};
</script>
