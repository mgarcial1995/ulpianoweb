<template>
  <div class="about">
    <div class="home__container">
      <div class="home__container__box">
        <p class="home__container__box--title">Somos Ulpiano</p>
        <p class="home__container__box--text">
          Es un procedimiento para solucionar los conflictos o controversias que
          pudieran tener dos o más personas, en el cual un tercero neutral e
          imparcial llamado Conciliador, facilita a las partes comunicarse y
          encontrar solución al conflicto que tienen en común.
        </p>
      </div>

      <div class="group__section">
        <div class="worker__card">
          <div class="worker__card--banner"></div>
          <div class="worker__card--avatar">
            <img src="../assets/worker-1.png" alt />
          </div>
          <div class="worker__card--name">Johana Joysy Paucarcaja Ortiz</div>
          <div class="worker__card--ocupation">
            Conciliadora y abogada verificadora
          </div>
          <div class="worker__card--description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </div>
        </div>
        <div class="worker__card">
          <div class="worker__card--banner"></div>
          <div class="worker__card--avatar">
            <img src="../assets/worker-2.png" alt />
          </div>
          <div class="worker__card--name">José Miguel Márquez Luján</div>
          <div class="worker__card--ocupation">Conciliador y secretario</div>
          <div class="worker__card--description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </div>
        </div>
        <div class="worker__card">
          <div class="worker__card--banner"></div>
          <div class="worker__card--avatar">
            <img src="../assets/worker-3.png" alt />
          </div>
          <div class="worker__card--name">Cesar Cajacuri Valero</div>
          <div class="worker__card--ocupation">Verificador y secretario</div>
          <div class="worker__card--description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </div>
        </div>
      </div>
    </div>

    <div class="guide__section">
      <router-link to="/servicios" class="arrow__guide" href="#">
        <img src="../assets/arrow-guide.svg" alt="arrow" />
      </router-link>
      <p class="text__guide">Busca el servicio que desees</p>
    </div>
  </div>
</template>

<script>
// import Navigator from "../components/Navigator.vue";
export default {
  name: "About",
  components: {}
};
</script>
