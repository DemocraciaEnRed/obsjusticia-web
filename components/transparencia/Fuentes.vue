<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced">
          Fuentes y notas
        </h1>
        <br>
        <h6 class="subtitle is-4">
          Última actualización
        </h6>
        <h6 class="title is-5 is-800">
          <!-- harcodeado debido a que esta variable es solo apra algunos updates -->
          <!-- {{ $config.dataDateUpdated }} -->
          Mayo 2021
        </h6>
        <div class="content">
          <p class="is-300 is-size-4">
            Las visualizaciones de esta web se basan en el informe realizado por ACIJ sobre el cumplimiento de la Ley de Acceso a la Información Pública — <a href="https://acij.org.ar/wp-content/uploads/2021/09/Informe-Hacia-la-efectiva-mplementacion-de-la-Ley-de-Acceso-a-la-Informacion.pdf" target="_blank" class="has-text-black is-400"><u>Link</u> 🔗</a>
          </p>
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
