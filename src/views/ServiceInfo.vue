<template>
  <div class="service__info">
    <!-- <Navigator /> -->
    <router-link to="/servicios">X</router-link>
    <div class="info" v-if="service">
      <img :src="service.banner" alt />
      <h1>{{ service.name }}</h1>
      <p>{{ service.text }}</p>
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
