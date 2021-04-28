<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-4 is-700 is-spaced">
          Créditos
        </h1>
        <br>
        <br>
        <h6 class="subtitle is-5 mb-3">
          Idea general
        </h6>
        <a href="https://acij.org.ar" target="_blank"><img src="~/assets/img/acij-logo-black.png" width="150" class="image is-centered"></a>
        <br>
        <br>
        <h6 class="subtitle is-5 mb-3">
          Desarrollado por
        </h6>
        <a href="https://democraciaenred.org" target="_blank"><img src="~/assets/img/logo-der-black.svg" width="150" class="image is-centered"></a>
        <br>
        <br>
        <h6 class="subtitle is-5">
          Diseño
        </h6>
        <h6 class="title is-5">
          M. Belén Viedma<br><a href="mailto:mbviedma@hotmail.com" target="_blank">mbviedma@hotmail.com</a>
        </h6>
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
