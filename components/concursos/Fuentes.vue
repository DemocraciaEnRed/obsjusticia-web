<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body columns is-multiline px-0 has-text-centered">
      <div class="column is-full is-full-mobile">
          <h1 class="title is-2 is-700 is-spaced">
            Fuentes
          </h1>
      </div>
      <div class="container column columns">
        <div class="column is-auto">
          <h6 class="subtitle is-4">
            Última actualización
          </h6>
          <h6 class="title is-5 is-800">
            {{ $config.dataDateUpdated }}
          </h6>
        </div>
        <div class="column is-half">
          <div class="content is-size-5">
            <p class="is-300">
              Las visualizaciones de esta web se basan en los datos oficiales publicados o facilitados por el Consejo de la Magistratura y el Ministerio Público Fiscal.
            </p>
            <p class="is-300">
              En caso de detectar algún error, escribinos a <a href="mailto:info@acij.org.ar" target="_blank" class="has-text-black is-400"><u>info@acij.org.ar</u></a>
            </p>
          </div>
        </div>
        <br>
        <div class="column is-auto">
            <p v-if="concursType == 'judges'" class="is-300">
              Data set original de concursos — <a href="https://docs.google.com/spreadsheets/d/1GInMcwjI-jCns4TrUxIcaY_soe-1mkhk5Z1qGJYhu50/edit#gid=1113035164" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
            </p>
            <p v-else-if="concursType == 'attorneys'" class="is-300">
              Data set original de concursos — <a href="https://docs.google.com/spreadsheets/d/1dcrgYzQdayxyp-5HDBZRPf69ipQ34i3UdVEhmyRfxXw/edit#gid=0" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
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
    },
    concursType: {
      type: String
    }
  }
}
</script>
