<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h4 class="title is-uppercase  is-size-4-mobile is-3 is-700 is-spaced line-height-150 spacing">
          ¿Cómo cumplen el Poder Judicial y el Ministerio Público con las obligaciones de la ley?
        </h4>
        <h1 class="subtitle es-chivo">
          A partir de una serie de indicadores medimos el cumplimiento de las obligaciones de acceso a la información pública del Consejo de la Magistratura de la Nación (CMN), la Corte Suprema de Justicia de la Nación (CSJN), el Ministerio Público de la Defensa (MPD) y el Ministerio Público Fiscal (MPF).
        </h1>
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
