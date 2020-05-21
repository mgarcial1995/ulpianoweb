<template>
  <div class="about">
    <div class="home__container">
      <div class="home__container__box">
        <p class="home__container__box--title">Somos Ulpiano</p>
        <p class="home__container__box--text">
          En Ulpiano Abogados ponemos al servicio de nuestros clientes la amplia
          experiencia de nuestros miembros en la práctica de las diversas áreas
          del derecho como también personal auxiliar especializado y una
          adecuada infraestructura, que nos permiten prestar a nuestros clientes
          un servicio de asesoría legal de la más alta calidad.
        </p>
      </div>

      <div class="valor__container">
        <div class="valor__container__box">
          <p class="valor__container__box--title">Misión</p>
          <p class="valor__container__box--text">
            Brindar asesoría legal a nuestros clientes con compromiso,
            eficiencia y ética. Cada cliente es único.
          </p>
        </div>
        <div class="valor__container__box">
          <p class="valor__container__box--title">Visión</p>
          <p
            class="valor__container__box--text"
          >Ser un estudio reconocido por su alta capacidad y profesionalismo.</p>
        </div>
        <div class="valor__container__box">
          <p class="valor__container__box--title">Valores</p>
          <p class="valor__container__box--text">
            Responsabilidad, reserva profesional, iniciativa, respeto,
            honestidad, empatía.
          </p>
        </div>
      </div>

      <div class="home__container__box">
        <p class="home__container__box--title large">Responsabilidad social</p>
        <p class="home__container__box--text">
          Ulpiano Abogados asume la relevancia de su participación no sólo de
          manera directa en el ámbito académico correspondiente a las áreas
          jurídicas en las que incursionan sus abogados, sino que también
          prioriza la necesidad de colaborar con la sociedad para el desarrollo
          de la vida para lograr dicho objetivo son realizados constantes
          esfuerzos a nivel escolar como universitario.
          <br />
          <br />
          <strong>
            Autorizado su funcionamiento por R.D. N°
            236-2017-JUS/DNJ-DCMA
          </strong>
        </p>
      </div>

      <div class="valor__container">
        <p class="valor__container__text">
          En nuestro despacho, constituido por un grupo de abogados cuya
          experiencia y especialización se complementan y aseguran un eficiente
          y oportuno servicio a los clientes, nos permitimos presentarles los
          servicios de asesoría jurídica que brinda atención profesional
          personalizada, orientada a lograr resultados favorables a costos muy
          competitivos dentro del mercado, la que no sólo se limita a la
          absolución de consultas de índole legal y patrocinio de casos
          judiciales, sino que se extiende a prestar una asesoría permanente y
          en la posibilidad de darse el caso evitar largos y costosos procesos.
        </p>
      </div>

      <div class="group__section">
        <div class="worker__card">
          <div class="worker__card--banner"></div>
          <div class="worker__card--avatar">
            <img src="../assets/worker-2.png" alt />
          </div>
          <div class="worker__card--name">José Miguel Márquez Luján</div>
          <div class="worker__card--ocupation">Conciliador y secretario</div>
        </div>
        <div class="worker__card">
          <div class="worker__card--banner"></div>
          <div class="worker__card--avatar">
            <img src="../assets/worker-1.png" alt />
          </div>
          <div class="worker__card--name">Johana Joysy Paucarcaja Ortiz</div>
          <div class="worker__card--ocupation">Conciliadora y abogada verificadora</div>
        </div>
        <div class="worker__card">
          <div class="worker__card--banner"></div>
          <div class="worker__card--avatar">
            <img src="../assets/worker-3.png" alt />
          </div>
          <div class="worker__card--name">Cesar Cajacuri Valero</div>
          <div class="worker__card--ocupation">Verificador y secretario</div>
        </div>
      </div>
    </div>

    <div class="guide__section">
      <p class="text__guide">Busca el servicio que desees</p>
      <router-link to="/servicios" class="arrow__guide" href="#">
        <img src="../assets/arrow-guide.svg" alt="arrow" />
      </router-link>
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
