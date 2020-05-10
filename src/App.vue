<template>
  <div id="app">
    <div class="navigator">
      <div class="menu__mob__button">
        <i class="fas fa-bars"></i>
      </div>
      <router-link class="navigator__item mobile-none" to="/">
        <div class="navigator__item--group">
          <i class="fas fa-home"></i>
          <p>Inicio</p>
        </div>
        <hr class="navigator__item--line" />
      </router-link>
      <router-link class="navigator__item mobile-none" to="/nosotros">
        <div class="navigator__item--group">
          <i class="fas fa-user-tie"></i>
          <p>Nosotros</p>
        </div>
        <hr class="navigator__item--line" />
      </router-link>
      <router-link class="navigator__item" to="/">
        <img src="./assets/logo.png" alt />
      </router-link>
      <router-link class="navigator__item mobile-none" to="/servicios">
        <div class="navigator__item--group">
          <i class="fas fa-book"></i>
          <p>Servicios</p>
        </div>
        <hr class="navigator__item--line" />
      </router-link>
      <router-link class="navigator__item mobile-none" to="/contacto">
        <div class="navigator__item--group">
          <i class="fas fa-phone-alt"></i>
          <p>Contacto</p>
        </div>
        <hr class="navigator__item--line" />
      </router-link>
    </div>
    <social-bar></social-bar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SocialBar from "./components/SocialBar.vue";
export default {
  name: "App",
  components: { SocialBar },
  data() {
    return {};
  },
  methods: {}
};
</script>
