<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <div class="columns is-vcentered is-centered">
          <div class="column">
            <h1 class="subtitle is-4">
              Conocé la metodología utilizada para medir el cumplimiento de la Ley de Acceso a la Información.
            </h1>
            <h1 class="title is-4 has-text-centered pt-5">
              <a href="/pdf/metodologia-medicion-transparencia.pdf" target="_blank" class="download-button">Descargar</a>
            </h1>
          </div>
        </div>
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

<style lang="scss" scoped>
.download-button {
  color: #000;
  text-decoration-line: underline;
  text-transform: uppercase;
}
</style>
