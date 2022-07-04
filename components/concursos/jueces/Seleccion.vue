<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <p class="is-size-4 line-height-150">
          La selección de <b>jueces y juezas</b> es un proceso muy importante en el sistema democrático. Estas autoridades deciden conflictos particulares y sobre cuestiones que afectan a la ciudadanía en su conjunto. El proceso de selección consiste en una serie de pasos en los que intervienen el Consejo de la Magistratura, el Poder Ejecutivo y el Senado.
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
          <img src="~/assets/img/concursos/jueces-image.svg" class="image is-centered" width="90" alt="icono de martillo">
          <h1 class="title h4-imp is-4 my-4 is-700 is-chivo text-red">
            Vacantes jueces y juezas
          </h1>
          <div class="columns my-5 is-mobile is-multiline is-vcentered is-centered column is-8 is-offset-2">
            <div class="column is-4-mobile p-0 m-0 has-border little-boxes content-label-hidden">
              <div class="label-visible pt-6">
                <h1 class="title is-2 is-500 is-chivo text-red">
                  <span v-if="$fetchState.pending">
                    <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                  </span>
                  <span v-else-if="$fetchState.error">
                    <i class="fas fa-times fa-fw fa-lg" />
                  </span>
                  <span v-else>
                    {{ getValue('vacantesJuecesConsejoMagistratura') }}
                  </span>
                </h1>
                <h1 class="subtitle is-6 is-chivo">
                  EN EL CONSEJO DE<br>LA MAGISTRATURA
                </h1>
              </div>
              <div class="label-hidden has-border pt-5 pr-3">
                <div class=" is-flex is-flex-grow-1 is-align-items-center">
                  <h1 class="title is-2 is-flex-grow-1 is-500 is-chivo is-size-3-mobile has-text-white mr-1">
                    <span v-if="$fetchState.pending">
                      <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                    </span>
                    <span v-else-if="$fetchState.error">
                      <i class="fas fa-times fa-fw fa-lg" />
                    </span>
                    <span v-else>
                      {{ getValue('vacantesJuecesConcursosEnProceso') }}
                    </span>
                  </h1>
                  <h1 class="subtitle is-6 is-chivo  has-text-white mx-3 px-1">
                    CONCURSOS EN<br>PROCESO
                  </h1>
                </div>
                <div class=" is-flex is-align-items-center">
                  <h1 class="title is-2 is-flex-grow-1 is-500 is-chivo is-size-3-mobile has-text-white mr-2">
                    <span v-if="$fetchState.pending">
                      <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                    </span>
                    <span v-else-if="$fetchState.error">
                      <i class="fas fa-times fa-fw fa-lg" />
                    </span>
                    <span v-else>
                      {{ getValue('vacantesJuecesVacantesSinTramite') }}
                    </span>
                  </h1>
                  <h1 class="subtitle is-6 is-chivo  has-text-white mx-4 px-2">
                    VACANTES<br>SIN TRÁMITE
                  </h1>
                </div>
              </div>
            </div>
            <div class="column  is-4-mobile">
              <h1 class="title is-2 is-500 is-chivo text-red">
                <span v-if="$fetchState.pending">
                  <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                </span>
                <span v-else-if="$fetchState.error">
                  <i class="fas fa-times fa-fw fa-lg" />
                </span>
                <span v-else>
                  {{ getValue('vacantesJuecesPoderEjecutivo') }}
                </span>
              </h1>
              <h1 class="subtitle is-6 is-chivo">
                EN EL PODER<br>EJECUTIVO
              </h1>
            </div>
            <div class="column  is-4-mobile label-visible">
              <h1 class="title is-2 is-500 is-chivo text-red">
                <span v-if="$fetchState.pending">
                  <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                </span>
                <span v-else-if="$fetchState.error">
                  <i class="fas fa-times fa-fw fa-lg" />
                </span>
                <span v-else>
                  {{ getValue('vacantesJuecesSenado') }}
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
    <div class="container">
      <div id="botonera" class="botonera is-flex is-flex-direction-column is-align-content-center is-justify-content-center is-align-items-center">
        <a href="https://docs.google.com/spreadsheets/d/1E4YfgPvMi1My_odfryL0wwX8hvOFkBUK3a7pUaN7YzU/edit#gid=0"  class="button btn-void is-raleway fs-18  is-outlined mr-4">
          Guía de vacantes
        </a>
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
.text-red{
  color: #EC6961;
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
  border: 2px solid #EC6961;
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
  background-color: #EC6961;
  color: #fff !important;
  margin: 0px;
  transition: .6s;
}
.content-label-hidden:hover .label-hidden{
  opacity: 1;
}

.botonera{
  max-width: 100%;

}
.botonera a{
  width: 400px;
  margin: 20px
}

.btn-solid{
  box-sizing: border-box;
  background: #3157AC !important;
  border-radius: 5px;
  border: none;
  color:#fff;
}
.btn-void{
  box-sizing: border-box;
  background: none !important;
  border-radius: 5px;
  border: 2px solid #3157AC !important;
  color: #3157AC;
}

</style>
