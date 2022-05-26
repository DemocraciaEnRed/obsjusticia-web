<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <p class="is-size-4 line-height-150">
          La selección de <b>fiscales y fiscalas</b> es un proceso muy importante en el sistema democrático. Estas autoridades deciden conflictos particulares y sobre cuestiones que afectan a la ciudadanía en su conjunto. El proceso de selección consiste en una serie de pasos en los que intervienen el Consejo de la Magistratura, el Poder Ejecutivo y el Senado.
        </p>
        <br>
        <p class="is-size-4 line-height-150">
          Te mostramos los datos sobre los concursos:
        </p>
        <br>
        <br>
        <div>
          <br>
          <br>
          <img src="~/assets/img/concursos/fiscales-image.svg" class="image is-centered" width="90" alt="">
          <h1 class="title is-4 my-4 is-700 is-chivo has-text-primary">
            Vacantes fiscales y fiscalas
          </h1>
          <div class="columns my-5 is-mobile is-multiline is-vcentered is-centered column is-8 is-offset-2">
            <div class="column is-4-mobile p-0 m-0 has-border little-boxes content-label-hidden">
              <div class="label-visible pt-6">
                <h1 class="title is-2 is-500 is-chivo text-blue">
                  <span v-if="$fetchState.pending">
                    <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                  </span>
                  <span v-else-if="$fetchState.error">
                    <i class="fas fa-times fa-fw fa-lg" />
                  </span>
                  <span v-else>
                    {{ getValue('vacantesFiscalesMinisterioPublicoFiscal') }}
                  </span>
                </h1>
                <h1 class="subtitle is-6 is-chivo">
                  EN EL MINISTERIO<br>PÚBLICO FISCAL
                </h1>
              </div>
              <div class="label-hidden has-border pt-5 pr-3">
                <div class="is-flex is-flex-grow-1 is-align-items-center">
                  <h1 class="title is-2 is-flex-grow-1 is-500 is-chivo is-size-3-mobile has-text-white mr-1">
                    <span v-if="$fetchState.pending">
                      <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                    </span>
                    <span v-else-if="$fetchState.error">
                      <i class="fas fa-times fa-fw fa-lg" />
                    </span>
                    <span v-else>
                      {{ getValue('vacantesFiscalesConcursosEnProceso') }}
                    </span>
                  </h1>
                  <h1 class="subtitle is-6 is-chivo has-text-white mx-3 px-1">
                    CONCURSOS EN<br>PROCESO
                  </h1>
                </div>
                <div class="is-flex is-align-items-center">
                  <h1 class="title is-5  is-flex-grow-1 is-500 is-chivo is-size-5-mobile has-text-white mr-2">
                    <span v-if="$fetchState.pending">
                      <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                    </span>
                    <span v-else-if="$fetchState.error">
                      <i class="fas fa-times fa-fw fa-lg" />
                    </span>
                    <span v-else>
                      {{ getValue('vacantesFiscalesVacantesSinTramite') }}
                    </span>
                  </h1>
                  <h1 class="subtitle is-6 is-chivo has-text-white">
                    VACANTES<br>SIN TRÁMITE
                  </h1>
                </div>
              </div>
            </div>
            <div class="column is-4-mobile">
              <h1 class="title is-2 is-500 is-chivo has-text-primary">
                <span v-if="$fetchState.pending">
                  <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                </span>
                <span v-else-if="$fetchState.error">
                  <i class="fas fa-times fa-fw fa-lg" />
                </span>
                <span v-else>
                  {{ getValue('vacantesFiscalesPoderEjecutivo') }}
                </span>
              </h1>
              <h1 class="subtitle is-6 is-chivo">
                EN EL PODER<br>EJECUTIVO
              </h1>
            </div>
            <div class="column is-4-mobile">
              <h1 class="title is-2 is-500 is-chivo has-text-primary">
                <span v-if="$fetchState.pending">
                  <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                </span>
                <span v-else-if="$fetchState.error">
                  <i class="fas fa-times fa-fw fa-lg" />
                </span>
                <span v-else>
                  {{ getValue('vacantesFiscalesSenado') }}
                </span>
              </h1>
              <h1 class="subtitle is-6 is-chivo">
                EN EL SENADO
              </h1>
          </div>
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
<style scoped>
.text-blue{
  color: #3157AC;
}
.little-boxes{
  width: 172px;
  height: 155px;
  align-items: center;
  padding: 20px;
  gap: 12px;
  background: #FFFFFF;
}
.has-border{
  border: 2px solid #3157AC;
  border-radius: 10px;
}
.label-visible{
  height: 100%;
  width: 100%;
}
.content-label-hidden{
  position: relative;
}
.label-hidden{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0px;
  background-color: #3157AC;
  color: #fff !important;
  margin: 0px;
  transition: .6s;
}
.content-label-hidden:hover .label-hidden{
  opacity: 1;
}
</style>
