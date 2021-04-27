<template>
  <section class="section is-medium px-0 has-text-centered">
    <h1 class="title is-4 is-700">
      <i class="fas fa-search has-text-orange fa-2x" />
    </h1>
    <h1 :id="scrollId" class="title is-4 is-700 is-spaced">
      ¿Qué son los Órganos Garantes (OG)?
    </h1>
    <h1 class="subtitle is-4">
      La ley establece que cada sujeto obligado debe crear un organismo con autonomía funcional y con competencias y funciones idénticas a las de la Agencia de Acceso a la Información Pública que funciona en el ámbito del Poder Ejecutivo, para controlar el cumplimiento de la ley y resolver los reclamos ante las denegatorias.
    </h1>
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
