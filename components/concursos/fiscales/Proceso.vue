<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h3 class="is-2 is-700 is-spaced line-height-150">
          ¿Cómo se seleccionan fiscales y fiscalías en nuestro país?
        </h3>
        <h1 class="subtitle is-4 my-6 line-height-150">
          La siguiente infografía muestra los pasos que se deben seguir para llegar a una designación:
        </h1>
        <img src="~/assets/img/concursos/fiscales-desktop.svg" class="image is-centered is-fullwidth is-hidden-mobile my-6" alt="">
        <img src="~/assets/img/concursos/fiscales-mobile.svg" class="image is-centered is-fullwidth is-hidden-tablet my-6" alt="">
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
