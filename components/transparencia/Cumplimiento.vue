<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-uppercase is-3 is-700 is-spaced line-height-150">
          ¿Cómo cumplen el Poder Judicial y el Ministerio Público con las obligaciones de la ley?
        </h1>
        <h1 class="subtitle is-4 line-height-150">
           Medimos la implementación de la ley entre febrero de 2018 y febrero de 2020. A partir de una serie de indicadores medimos el cumplimiento de las obligaciones de acceso a la información públca del Consejo de la Magistratura de la Nación (CMN), la Corte Suprema de Justicia de la Nación (CSJN), el Ministerio Público de la Defensa (MPD) y el Ministerio Público Fiscal (MPF).
        </h1>
        <h1 class="subtitle is-4 line-height-150">
          Analizamos el cumplimiento de las obligaciones de transparencia pasiva (entrega de información solicitada en forma completa, comprensible y en formatos abiertos), las obligaciones de transparencia activa(publicación proactiva de información en forma completa, actualizada y formatos abiertos), y el nivel de autonomía y funcionamiento de los órganos garantes. Medimos la implementación de la ley entre febrero de 2018 y febrero de 2020.
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
