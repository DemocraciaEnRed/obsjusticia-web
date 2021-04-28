<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-3 is-700 is-spaced">
          ¿Cómo se están seleccionando a los jueces y juezas de nuestro país?
        </h1>
        <h1 class="subtitle is-5">
          El proceso de selección consiste en una serie de pasos en los que intervienen distintos órganos: el Consejo de la Magistratura, el Poder Ejecutivo y el Senado.
        </h1>
        <h1 class="subtitle is-5 is-700">
          Estas son las etapas más importantes de este proceso:
        </h1>
        <img src="~/assets/img/concursos/proceso-desktop.svg" class="image is-centered is-fullwidth is-hidden-mobile my-6" alt="">
        <img src="~/assets/img/concursos/proceso-mobile.svg" class="image is-centered is-fullwidth is-hidden-tablet my-6" alt="">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  }
}
</script>
