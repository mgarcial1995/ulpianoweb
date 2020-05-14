<template>
  <router-link
    class="service__card"
    :to="{
      name: 'ServicioAsesoria',
      params: {
        id: service_extra.id,
        name: service_extra.name
      }
    }"
  >
    <img class="service__card--image" :src="service_extra.img" :alt="service_extra.name" />
    <div class="service__card__box">
      <p class="service__card__box--name">{{ service_extra.name }}</p>
      <p class="service__card__box--description">{{ service_extra.description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Services",
  props: {
    service_extra: { required: true, type: Object }
  },
  components: {},
  computed: {}
};
</script>
