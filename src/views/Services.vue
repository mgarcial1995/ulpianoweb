<template>
  <div class="services">
    <div class="services__container">
      <div class="services__container__services">
        <p>Conciliaciones familiar y civil</p>
        <div class="list__services">
          <Service v-for="(service, index) in services" :key="index" :service="service" />
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
