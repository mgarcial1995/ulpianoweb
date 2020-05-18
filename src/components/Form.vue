<template>
  <div id="form" class="form__section">
    <form class="form__contact" action>
      <p>Rellena tus datos para más información</p>
      <input class="form__contact--input" id="name" placeholder="Nombre" type="text" name="name" />
      <input
        class="form__contact--input"
        id="mobile"
        placeholder="Celular"
        type="text"
        name="mobile"
      />
      <input class="form__contact--input" id="email" placeholder="Correo" type="email" name="email" />
      <textarea
        class="form__contact--textarea"
        id="coment"
        name="coment"
        placeholder="Escribir la consulta"
      ></textarea>

      <input class="button" type="button" value="Enviar datos" />
    </form>
    <div class="close__form" @click="closeForm()">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  methods: {
    closeForm() {
      let form = document.getElementById("form");
      form.style.display = "none";
    }
  }
};
</script>