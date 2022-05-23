<template>
  <section :id="scrollId" class="hero is-medium  spacing">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="is-uppercase is-size-4-mobile is-700 line-height-150">
          Transparencia y Acceso a la Información en el Poder Judicial y Ministerio Público
        </h1>
        <div class="py-6">
          <h4 class="h4-imp is-700 is-spaced">
            LEY 27.275
          </h4>
          <h1 class="subtitle is-4 es-chivo line-height-150 is-500">
            La Ley 27.275 de Acceso a la Información Pública garantiza el derecho de acceso a la información pública, promueve la participación ciudadana y la transparencia de la gestión pública.
          </h1>
          <h1 class="subtitle is-4 es-chivo line-height-150 is-500">
            El Poder Judicial y Ministerio Público están obligados a entregar la información solicitada por las personas y a publicar proactivamente la información establecida en la ley y cualquier otra de carácter relevante que se encuentre en su poder. También deben crear un organismo con autonomía funcional para controlar el cumplimiento de la ley y resolver los reclamos ante la denegatoria de entregar información.
          </h1>
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
.spacing{
  padding: 0 3rem;
  margin: 0 3rem;
}
@include mobile{
  .spacing{
    padding: 0 !important;
    margin: 0 !important;
  }
}
</style>
