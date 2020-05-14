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
    <img class="service__card--image" :src="service.img" :alt="service.name" />
    <div class="service__card__box">
      <p class="service__card__box--name">{{ service.name }}</p>
      <p class="service__card__box--description">{{ service.description }}</p>
    </div>
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
