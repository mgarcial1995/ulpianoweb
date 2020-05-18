<template>
  <div class="home">
    <div class="home__box">
      <div class="banner">
        <p class="banner--text">¿Tienes problemas legales y quieres arreglarlos?</p>
        <img src="@/assets/banner_img.png" alt />
      </div>
      <p>Lo que buscas es conciliar</p>
      <a>
        <img class="arrow" src="../assets/arrow-guide.svg" alt="arrow" />
      </a>
    </div>

    <div class="home__container">
      <div class="home__container__box">
        <p class="home__container__box--title">¿Qué es conciliación?</p>
        <p class="home__container__box--text">
          Es un procedimiento para solucionar los conflictos o controversias que
          pudieran tener dos o más personas, en el cual un tercero neutral e
          imparcial llamado Conciliador, facilita a las partes comunicarse y
          encontrar solución al conflicto que tienen en común.
        </p>
      </div>
      <div class="box__home">
        <div class="box__infohome" style="padding-left:0;">
          <p class="box__infohome--title">Acta de conciliación</p>
          <p class="box__infohome--text">
            Es el documento que contiene el acuerdo al que se ha llegado, debe
            estar firmada por las partes y por el Conciliador y representa la
            conclusión de un procedimiento conciliatorio.
          </p>
        </div>
        <div class="box__home--img mobile-none">
          <img
            src="https://www.ambitojuridico.com/sites/default/files/etica-poder-judicialbigstock.jpg"
            alt
          />
        </div>
      </div>

      <div class="box__home">
        <div class="box__home--img mobile-none">
          <img
            src="https://image.freepik.com/free-photo/business-team-meeting-strategy-marketing-cafe-concept_53876-72931.jpg"
            alt
          />
        </div>
        <div class="box__infohome" style="padding-right: 0px;">
          <p class="box__infohome--title">Ventajas de la Conciliación</p>
          <p class="box__infohome--text">
            Las partes deciden la solución a su problema, ademas de ser
            económica y mas rápida, es mucho mas confidencial y reservada,
            evitando alargar a más procesos judiciales y no requiere la
            participación de un abogado
          </p>
        </div>
      </div>
    </div>
    <div class="box__curiosity">
      <div class="box__curiosity__a">
        <p class="box__curiosity__a--title">¿Sabias que?</p>
        <p class="box__curiosity__a--text">
          Un acta de conciliación tiene calidad de sentencia emitida por un
          juez, es decir que se puede exigir judicialmente el cumplimiento de lo
          acordado
        </p>
      </div>
    </div>

    <div class="guide__section">
      <p class="text__guide">Conoce sobre más sobre nosotros</p>
      <router-link to="/nosotros" class="arrow__guide">
        <img src="../assets/arrow-guide.svg" alt="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
