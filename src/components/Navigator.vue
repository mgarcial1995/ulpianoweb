<template>
  <div class="navigator">
    <router-link class="navigator__item" to="/">
      <div class="navigator__item--group">
        <i class="fas fa-home"></i>
        <p>Inicio</p>
      </div>
    </router-link>
    <router-link class="navigator__item" to="/nosotros">
      <div class="navigator__item--group">
        <i class="fas fa-user-tie"></i>
        <p>Nosotros</p>
      </div>
    </router-link>
    <router-link class="navigator__item" to="/">
      <img src="../assets/logo.png" alt />
    </router-link>
    <router-link class="navigator__item" to="/servicios">
      <div class="navigator__item--group">
        <i class="fas fa-book"></i>
        <p>Servicios</p>
      </div>
    </router-link>
    <router-link class="navigator__item" to="/contacto">
      <div class="navigator__item--group">
        <i class="fas fa-phone-alt"></i>
        <p>Contacto</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigator"
};
</script>
