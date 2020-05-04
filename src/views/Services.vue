<template>
  <div class="services">
    <div class="services__container">
      <div class="services__container__services">
        <h2>Conciliacion familiar</h2>
        <div class="list__services">
          <div v-for="(service, index) in services" :key="index">
            <Service v-if="service.category == 'CF'" :service="service" />
          </div>
        </div>

        <h2>Conciliacion Civil</h2>
        <div class="list__services">
          <div v-for="(service, index) in services" :key="index">
            <Service v-if="service.category == 'CC'" :service="service" />
          </div>
        </div>
      </div>
      <div class="form__section">
        <form class="form__contact" action>
          <p>Rellena tus datos para más información</p>
          <input
            class="form__contact--input"
            id="name"
            placeholder="Nombre"
            type="text"
            name="name"
          />
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
          <select class="form__contact--input select" name="service" id>
            <option value="0">Seleccionar</option>
            <option
              v-for="(service, index) in services"
              :key="index"
              :value="service.id"
            >{{ service.name }}</option>
          </select>

          <input class="form__contact--input button" type="button" value="Enviar datos" />
        </form>
      </div>
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
