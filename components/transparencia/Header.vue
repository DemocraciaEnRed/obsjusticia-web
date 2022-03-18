<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 line-height-150">
          Transparencia y Acceso a la Información en el Poder Judicial y Ministerio Público
        </h1>
        <div class="py-6">
          <h1 class="title is-3 is-700 is-spaced">
            Ley 27.275
          </h1>
          <h1 class="subtitle is-4 line-height-150 is-500">
            La 27.275 de Acceso a la Información Pública garantiza el derecho de acceso a la información pública, promueve la participación ciudadana y la transparencia de la gestión pública.
          </h1>
          <h1 class="subtitle is-4 line-height-150 is-500">
            El Poder Judicial y Ministerio Público están obligados a entregar la información solicitada por las personas y a publicar proactivamente la información establecida en la ley y cualquier otra de carácter relevante que se encuentre en su poder. También deben crear un organismo con autonomía funcional y para controlar el cumplimiento de la ley y resolver los reclamos ante la denegatoria de entregar información.
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
