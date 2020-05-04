<template>
  <router-link
    class="service__card"
    :to="{
      name: 'Servicio',
      params: {
        id: service.id,
        name: service.name
      }
    }"
  >
    <p class="service__card--name">{{ service.name }}</p>
    <img class="service__card--image" :src="service.img" alt />
  </router-link>
</template>

<script>
export default {
  name: "Services",
  props: {
    service: { required: true, type: Object }
  },
  components: {},
  computed: {}
};
</script>
