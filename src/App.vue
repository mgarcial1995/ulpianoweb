<template>
  <div id="app">
    <div class="navigator" id="menu">
      <div class="menu__mobile">
        <div
          class="menu__mobile__button--open"
          v-show="showButtonMenu"
          @click="displayMenuMobile(), (showButtonMenu = !showButtonMenu)"
        >
          <i class="fas fa-bars"></i>
        </div>
        <div
          class="menu__mobile__button--close"
          v-show="!showButtonMenu"
          @click="closeMenuMobile(), (showButtonMenu = !showButtonMenu)"
        >
          <i class="fas fa-times"></i>
        </div>
        <router-link class="navigator__item logo" to="/">
          <img
            src="./assets/logo.png"
            alt="Conciliaciones-ulpiano"
            @click="
              closeMenuMobile(),
                showButtonMenu == false
                  ? (showButtonMenu = true)
                  : (showButtonMenu = true)
            "
          />
        </router-link>
      </div>
      <!-- MOBILE -->
      <div class="menu__items__mobile">
        <router-link class="menu__items__mobile--item" to="/">
          <div
            class="navigator__item--group"
            @click="closeMenuMobile(), (showButtonMenu = !showButtonMenu)"
          >
            <p>Inicio</p>
          </div>
        </router-link>
        <router-link class="menu__items__mobile--item" to="/nosotros">
          <div
            class="navigator__item--group"
            @click="closeMenuMobile(), (showButtonMenu = !showButtonMenu)"
          >
            <p>Nosotros</p>
          </div>
        </router-link>

        <a href="#" class="menu__items__mobile--item services__menu">
          <div
            class="navigator__item--group"
            @click="closeMenuMobile(), (showButtonMenu = !showButtonMenu)"
          >
            <p>Servicios</p>
          </div>
          <div class="submenu__services">
            <router-link class="navigator__item" to="/servicios-juridicos">
              <p @click="closeMenuMobile(), (showButtonMenu = !showButtonMenu)">Asesoria Jurídica</p>
            </router-link>
            <router-link class="navigator__item" to="/servicios-conciliacion">
              <p @click="closeMenuMobile(), (showButtonMenu = !showButtonMenu)">Conciliación</p>
            </router-link>
          </div>
        </a>
        <router-link class="menu__items__mobile--item" to="/contacto">
          <div
            class="navigator__item--group"
            @click="closeMenuMobile(), (showButtonMenu = !showButtonMenu)"
          >
            <p>Contacto</p>
          </div>
        </router-link>
      </div>
      <social-bar></social-bar>
      <!-- DESKTOP -->
      <div class="menu__desktop">
        <router-link class="navigator__item" to="/">
          <div class="navigator__item--group">
            <i class="fas fa-home"></i>
            <p>Inicio</p>
          </div>
          <hr class="navigator__item--line" />
        </router-link>
        <router-link class="navigator__item" to="/nosotros">
          <div class="navigator__item--group">
            <i class="fas fa-user-tie"></i>
            <p>Nosotros</p>
          </div>
          <hr class="navigator__item--line" />
        </router-link>
        <router-link class="navigator__item logo" to="/">
          <img src="./assets/logo.png" alt />
        </router-link>
        <a href="#" class="navigator__item services__menu">
          <div class="navigator__item--group">
            <i class="fas fa-book"></i>
            <p>Servicios</p>
          </div>
          <hr class="navigator__item--line" />
          <div class="submenu__services">
            <router-link class="navigator__item" to="/servicios-juridicos">
              <p>Asesoria Jurídica</p>
            </router-link>
            <router-link class="navigator__item" to="/servicios-conciliacion">
              <p>Conciliacion</p>
            </router-link>
          </div>
        </a>
        <router-link class="navigator__item" to="/contacto">
          <div class="navigator__item--group">
            <i class="fas fa-phone-alt"></i>
            <p>Contacto</p>
          </div>
          <hr class="navigator__item--line" />
        </router-link>
      </div>
    </div>
    <social-bar class="mobile-none"></social-bar>
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
    return {
      showButtonMenu: true
    };
  },
  methods: {
    displayMenuMobile() {
      let menu = document.getElementById("menu");

      menu.style.height = "100vh";
    },
    closeMenuMobile() {
      let menu = document.getElementById("menu");

      screen.width > 736
        ? (menu.style.height = "100px")
        : (menu.style.height = "80px");
    }
  }
};
</script>
