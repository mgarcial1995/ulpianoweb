<template>
  <div class="services">
    <Navigator />
    <h1>Servicios</h1>
    <div class="list__services">
      <div v-for="(service,index) in services" :key="index">
        <!-- <router-link class="service__card" :to="`/servicios/${service.id}`"> -->
        <router-link
          class="service__card"
          :to="{
            name: 'Servicio',
            params: { name: service.name }
          }"
        >
          <p>{{ service.name }}</p>
          <img :src="service.img" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from "../components/Navigator.vue";
import { mapState } from "vuex";

export default {
  name: "Services",
  components: { Navigator },
  computed: {
    ...mapState(["services"])
  }
};
</script>
