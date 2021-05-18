<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-4 is-700 is-spaced">
          Sobre transparencia activa
        </h1>
        <br>
        <div class="columns is-centered is-multiline">
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-exclamation-triangle has-text-orange fa-2x" />
            </h1>
            <p>Ninguno de los sujetos obligados publica las declaraciones juradas patrimoniales de sus integrantes para su descarga directa.</p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-file-excel has-text-orange fa-2x" />
            </h1>
            <p>
              La CSJN no publica información sobre permisos, concesiones y autorizaciones otorgados, informes de auditorías y la información sobre cómo y dónde se realiza una solicitud de información pública.
            </p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-random has-text-orange fa-2x" />
            </h1>
            <p>El CMN no publica información sobre transferencias,  permisos, concesiones y autorizaciones otorgados y los trámites y procedimientos que se realicen ante el organismo.</p>
          </div>
          <div class="column is-6">
            <h1 class="title is-4 is-700">
              <i class="fas fa-poll has-text-orange fa-2x" />
            </h1>
            <p>Ninguno de los sujetos obligados publica de forma completa la información sobre su presupuesto y contrataciones.</p>
          </div>
          <div class="column is-6">
            <h1 class="title is-4 is-700">
              <i class="fas fa-copy has-text-orange fa-2x" />
            </h1>
            <p>Ni el MPD ni el MPF publican informes de auditoría.</p>
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
