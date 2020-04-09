<template>
  <div class="navigator">
    <router-link class="navigator__item" to="/">Inicio</router-link>
    <router-link class="navigator__item" to="/about">Nosotros</router-link>
    <router-link class="navigator__item" to="/services">Servicios</router-link>
    <router-link class="navigator__item" to="/contact">Contacto</router-link>
    <router-link class="navigator__item" to="/ubication">Ubicacion</router-link>
  </div>
</template>

<script>
export default {
  name: "Navigator"
};
</script>
