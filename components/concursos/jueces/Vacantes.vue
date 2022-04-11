<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <p class="is-size-4">
          En esta sección te mostramos cuántas <b>vacantes</b> están en distintas etapas del proceso. De esta forma, se pueden evaluar demoras y asignar responsabilidades a la hora de seleccionar autoridades para los cargos disponibles.
        </p>
        <br>
        <br>
        <img src="~/assets/img/concursos/jueces-image.svg" class="image is-centered" width="90" alt="">
        <h1 class="title is-4 my-4 is-700 is-chivo has-text-primary">
          Jueces y Juezas
        </h1>
        <br>
        <br>
        <img src="~/assets/img/concursos/fiscales-image.svg" class="image is-centered" width="90" alt="">
        <h1 class="title is-4 my-4 is-700 is-chivo has-text-secondary">
          Fiscales
        </h1>
        <div class="columns my-5 is-mobile is-multiline is-centered">
          <div class="column is-4-mobile">
            <h1 class="title is-2 is-500 is-chivo has-text-secondary">
              <span v-if="$fetchState.pending">
                <i class="fas fa-sync fa-fw fa-spin fa-lg" />
              </span>
              <span v-else-if="$fetchState.error">
                <i class="fas fa-times fa-fw fa-lg" />
              </span>
              <span v-else class="es-oswald">
                {{ getValue('vacantesFiscalesPoderEjecutivo') }}
              </span>
            </h1>
            <h1 class="subtitle is-6 is-chivo">
              EN EL PODER<br>EJECUTIVO
            </h1>
          </div>
          <div class="column is-4-mobile">
            <h1 class="title is-2 is-500 is-chivo has-text-secondary">
              <span v-if="$fetchState.pending">
                <i class="fas fa-sync fa-fw fa-spin fa-lg" />
              </span>
              <span v-else-if="$fetchState.error">
                <i class="fas fa-times fa-fw fa-lg" />
              </span>
              <span v-else class="es-oswald">
                {{ getValue('vacantesFiscalesSenado') }}
              </span>
            </h1>
            <h1 class="subtitle is-6 is-chivo">
              EN EL SENADO
            </h1>
          </div>
          <div class="column is-4-mobile">
            <h1 class="title is-2 is-500 is-chivo has-text-secondary">
              <span v-if="$fetchState.pending">
                <i class="fas fa-sync fa-fw fa-spin fa-lg" />
              </span>
              <span v-else-if="$fetchState.error">
                <i class="fas fa-times fa-fw fa-lg" />
              </span>
              <span v-else class="es-oswald">
                {{ getValue('vacantesFiscalesMinisterioPublicoFiscal') }}
              </span>
            </h1>
            <h1 class="subtitle is-6 is-chivo">
              EN EL MINISTERIO<br>PÚBLICO FISCAL
            </h1>
          </div>
          <div class="column is-4-mobile">
            <h1 class="title is-2 is-500 is-chivo has-text-secondary">
              <span v-if="$fetchState.pending">
                <i class="fas fa-sync fa-fw fa-spin fa-lg" />
              </span>
              <span v-else-if="$fetchState.error">
                <i class="fas fa-times fa-fw fa-lg" />
              </span>
              <span v-else class="es-oswald">
                {{ getValue('vacantesFiscalesConcursosEnProceso') }}
              </span>
            </h1>
            <h1 class="subtitle is-6 is-chivo">
              CONCURSOS EN<br>PROCESO
            </h1>
          </div>
          <div class="column is-4-mobile">
            <h1 class="title is-2 is-500 is-chivo has-text-secondary">
              <span v-if="$fetchState.pending">
                <i class="fas fa-sync fa-fw fa-spin fa-lg" />
              </span>
              <span v-else-if="$fetchState.error">
                <i class="fas fa-times fa-fw fa-lg" />
              </span>
              <span v-else class="es-oswald">
                {{ getValue('vacantesFiscalesVacantesSinTramite') }}
              </span>
            </h1>
            <h1 class="subtitle is-6 is-chivo">
              VACANTES<br>SIN TRÁMITE
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
  },
  fetchOnServer: false,
  async fetch () {
    const data = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1BA3bVbUA8gOYGmNCnH4vvlBohvTKZfXi6j2lh9BpZCA/values/Sheet1?key=${this.$config.googleSheetApiKey}`
    ).then(res => res.json())
    this.data = this.extractData(data)
  },
  data () {
    return {
      data: null,
      keys: [
        'clave',
        'valor'
      ]
    }
  },
  methods: {
    extractData (data) {
      // eslint-disable-next-line prefer-const
      let output = []
      const theKeys = this.keys
      const theValues = data.values.slice(1)
      theValues.forEach((entry) => {
        // eslint-disable-next-line prefer-const
        const marker = {}
        theKeys.forEach((k, i) => {
          marker[k] = entry[i] !== '' ? entry[i] : null
        })
        output.push(marker)
      })
      return output
    },
    getValue (key) {
      return (this.data.find(d => d.clave === key)).valor
    }
  }
}
</script>
