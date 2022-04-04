<template>
  <section :id="scrollId" class="hero">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="is-uppercase is-1 is-700">
          Concursos de jueces, juezas y fiscales
        </h1>
        <div class="py-6">
          <h1 class="title is-2 is-700 is-chivo">
            <span v-if="$fetchState.pending">
              <i class="fas fa-sync fa-fw fa-spin fa-lg" />
            </span>
            <span v-else-if="$fetchState.error">
              <i class="fas fa-times fa-fw fa-lg" />
            </span>
            <span v-else class="es-oswald">
              {{ getValue('vacantesTotales') }}
            </span>
          </h1>
          <h1 class="subtitle is-5 is-chivo">
            VACANTES TOTALES
          </h1>
          <br>
          <div class="columns">
            <div class="column">
              <input
                name="contestType"
                :checked="this.contestType == 'judges'"
                v-on:input="updateContestType($event.target.value)"
                type="radio"
                id="judges"
                value="judges"
                class="contest-type-radio"
              >
              <label for="judges" class="radio-label judges-label">
                <img src="~/assets/img/concursos/jueces-image.svg" class="image is-centered" width="90" alt="">
                <h1 class="title is-4 my-4 is-700 is-chivo has-text-primary">
                  Jueces y Juezas
                </h1>
                <div class="columns my-5 is-mobile">
                  <div class="column">
                    <h1 class="title is-2 is-500 is-chivo has-text-primary">
                      <span v-if="$fetchState.pending">
                        <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                      </span>
                      <span v-else-if="$fetchState.error">
                        <i class="fas fa-times fa-fw fa-lg" />
                      </span>
                      <span v-else>
                        {{ getValue('vacantesJueces') }}
                      </span>
                    </h1>
                    <h1 class="subtitle is-5 is-chivo">
                      VACANTES
                    </h1>
                  </div>
                  <div class="column">
                    <h1 class="title is-2 is-500 is-chivo has-text-primary">
                      <span v-if="$fetchState.pending">
                        <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                      </span>
                      <span v-else-if="$fetchState.error">
                        <i class="fas fa-times fa-fw fa-lg" />
                      </span>
                      <span v-else>
                        {{ getValue('tramitesEnCursoJueces') }}
                      </span>
                    </h1>
                    <h1 class="subtitle is-5 is-chivo">
                      TRAMITES<br>EN CURSO
                    </h1>
                  </div>
                </div>
              </label>
            </div>
            <div class="column">
              <input
                name="contestType"
                :checked="this.contestType == 'attorneys'"
                v-on:input="updateContestType($event.target.value)"
                type="radio"
                id="attorneys"
                value="attorneys"
                class="contest-type-radio"
              >
              <label for="attorneys" class="radio-label attorneys-label">
                <img src="~/assets/img/concursos/fiscales-image.svg" class="image is-centered" width="90" alt="">
                <h1 class="title is-4 my-4 is-700 is-chivo has-text-secondary">
                  Fiscales
                </h1>
                <div class="columns my-5 is-mobile">
                  <div class="column">
                    <h1 class="title is-2 is-500 is-chivo has-text-secondary">
                      <span v-if="$fetchState.pending">
                        <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                      </span>
                      <span v-else-if="$fetchState.error">
                        <i class="fas fa-times fa-fw fa-lg" />
                      </span>
                      <span v-else>
                        {{ getValue('vacantesFiscales') }}
                      </span>
                    </h1>
                    <h1 class="subtitle is-5 is-chivo">
                      VACANTES
                    </h1>
                  </div>
                  <div class="column">
                    <h1 class="title is-2 is-500 is-chivo has-text-secondary">
                      <span v-if="$fetchState.pending">
                        <i class="fas fa-sync fa-fw fa-spin fa-lg" />
                      </span>
                      <span v-else-if="$fetchState.error">
                        <i class="fas fa-times fa-fw fa-lg" />
                      </span>
                      <span v-else>
                        {{ getValue('tramitesEnCursoFiscales') }}
                      </span>
                    </h1>
                    <h1 class="subtitle is-5 is-chivo">
                      TRAMITES<br>EN CURSO
                    </h1>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <p class="is-300 is-size-5 test">
            <b>(*)</b> Los trámites en curso son aquellas vacantes cuyos concursos ya comenzaron o ya fueron realizados y elevados al Poder Ejecutivo o el Senado. Las restantes vacantes no cuentan aún con trámite de selección iniciado.
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
    value: {
      type: String,
      default: () => ''
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
    },
    updateContestType (newContestType) {
      this.$emit('input', newContestType)
    }
  },
  computed: {
    contestType () {
      return this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  background-color: transparent;
  margin: 0 auto 50px;
  th, td {
    color: black;
  }
  thead{
    th{
      border-color: black
    }
    tr th:first-child{
      border-right: 2px solid black;
    }
  }
  tbody{
    tr td:first-child{
      border-right: 2px solid black;
      font-weight: 300;
    }
    tr td{
      border-bottom: 0;
    }
  }
}
.data-value{
  font-weight: 700;
}
.contest-type-radio{
  opacity: 0;
}
.radio-label{
  padding: 30px 20px 0 20px;
  display: block;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor:pointer;
}
.judges-label{
  border: 3px solid #467CF6;
  box-sizing: border-box;
  border-radius: 5px;
}
.attorneys-label{
  padding-bottom: 5px;
  border: 3px solid #3157AC;
  box-sizing: border-box;
  border-radius: 5px;
}
.contest-type-radio:checked+label{
  background-color: #DEE8FF;
}
</style>
