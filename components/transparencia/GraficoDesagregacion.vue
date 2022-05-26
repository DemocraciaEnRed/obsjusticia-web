<template>
  <section :id="scrollId" class="hero is-small">
        <b-collapse
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide"
            :open="false"
            >
            <template #trigger>
                <div
                    class="panel-heading"
                    role="button"
                    aria-controls="contentIdForA11y2"
                    >
                  <div class="is-flex hero-config is-justify-content-center is-align-content-center is-align-items-center">
                    <span class="icon is-align-self-center m-6"><i class="fas fa-solid fa-arrow-down has-text-white"></i></span>
                      <div class="hero-body is-size-4 has-text-centered">
                        Desagregación de los Índices
                      </div>
                    <span class="icon is-align-self-center m-6"><i class="fas fa-solid fa-arrow-down has-text-white"></i></span>
                  </div>
                </div>
            </template>
            <div class="panel-block">
              <div class="hero-body px-0 has-text-centered">
                <div class="container">
                  <br>
                  <div v-if="$fetchState.pending" class="p-6 has-text-centered">
                    <h1 class="title is-4 is-700">
                      <i class="fas fa-sync fa-spin fa-2x has-text-orange" />
                    </h1>
                    <h1 class="title is-4 is-700 is-spaced">
                      Cargando...
                    </h1>
                  </div>
                  <div v-else-if="$fetchState.error" class="p-6 has-text-centered">
                    <h1 class="title is-4 is-700">
                      <i class="fas fa-times fa-2x has-text-orange" />
                    </h1>
                    <h1 class="title is-4 is-700 is-spaced">
                      Error al cargar los datos... Intente nuevamente
                    </h1>
                  </div>
                  <div v-else>
                    <table class="table">
                      <thead>
                        <tr>
                          <th width="40%" />
                          <th class="has-text-centered is-size-4 is-size-6-mobile">
                            CMN
                          </th>
                          <th class="has-text-centered is-size-4 is-size-6-mobile">
                            CSJN
                          </th>
                          <th class="has-text-centered is-size-4 is-size-6-mobile">
                            MPD
                          </th>
                          <th class="has-text-centered is-size-4 is-size-6-mobile">
                            MPF
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(area,i) in data" :key="`area-${i}`">
                          <td class="has-text-right is-size-4 is-size-6-mobile">
                            {{ area.area }}
                          </td>
                          <td class="data-value has-text-centered is-size-4 is-size-6-mobile" :style="`color: ${area.cmn ? getColor(area.cmn) : '#777'}`">
                            {{ area.cmn ? area.cmn : '-' }}
                          </td>
                          <td class="data-value has-text-centered is-size-4 is-size-6-mobile" :style="`color: ${area.csjn ? getColor(area.csjn) : '#777'}`">
                            {{ area.csjn ? area.csjn : '-' }}
                          </td>
                          <td class="data-value has-text-centered is-size-4 is-size-6-mobile" :style="`color: ${area.mpd ? getColor(area.mpd) : '#777'}`">
                            {{ area.mpd ? area.mpd : '-' }}
                          </td>
                          <td class="data-value has-text-centered is-size-4 is-size-6-mobile" :style="`color: ${area.mpf ? getColor(area.mpf) : '#777'}`">
                            {{ area.mpf ? area.mpf : '-' }}
                          </td>
                        </tr>
                      </tbody>
                      <tfoot v-if="promedio">
                        <tr>
                          <td />
                          <td class="data-value has-text-centered is-size-5 is-size-7-mobile" :style="`color: ${promedio.cmn ? getColor(promedio.cmn) : '#777'}`">
                            {{ promedio.cmn }}
                          </td>
                          <td class="data-value has-text-centered is-size-5 is-size-7-mobile" :style="`color: ${promedio.csjn ? getColor(promedio.csjn) : '#777'}`">
                            {{ promedio.csjn }}
                          </td>
                          <td class="data-value has-text-centered is-size-5 is-size-7-mobile" :style="`color: ${promedio.mpd ? getColor(promedio.mpd) : '#777'}`">
                            {{ promedio.mpd }}
                          </td>
                          <td class="data-value has-text-centered is-size-5 is-size-7-mobile" :style="`color: ${promedio.mpf ? getColor(promedio.mpf) : '#777'}`">
                            {{ promedio.mpf }}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </b-collapse>

  </section>
</template>

<script>
// import chroma from 'chroma-js'

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
      `https://sheets.googleapis.com/v4/spreadsheets/14MCUztXQC4eP1xcAae-J0xb61cixFIMVESDia0kIyX4/values/Sheet1?key=${this.$config.googleSheetApiKey}`
    ).then(res => res.json())
    this.data = this.extractData(data)
  },
  data () {
    return {
      data: null,
      keys: [
        'area',
        'cmn',
        'csjn',
        'mpd',
        'mpf'
      ]
    }
  },
  computed: {
    promedio () {
      if (!this.data) { return {} }
      const promedio = {
        cmn: 0,
        csjn: 0,
        mpd: 0,
        mpf: 0
      }
      this.data.forEach((d) => {
        promedio.cmn += parseFloat(d.cmn ? d.cmn : 0)
        promedio.csjn += parseFloat(d.csjn ? d.csjn : 0)
        promedio.mpd += parseFloat(d.mpd ? d.mpd : 0)
        promedio.mpf += parseFloat(d.mpf ? d.mpf : 0)
      })
      promedio.cmn = (promedio.cmn / this.data.length).toFixed(2)
      promedio.csjn = (promedio.csjn / this.data.length).toFixed(2)
      promedio.mpd = (promedio.mpd / this.data.length).toFixed(2)
      promedio.mpf = (promedio.mpf / this.data.length).toFixed(2)
      return promedio
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
    getColor (value) {
      // const scale = chroma.scale(['#CD3D27', '#6C9EFF', '#1DD1A1', '#E59D3F'])
      // return scale(value).hex()
      if (value >= 0 && value <= 0.3) {
        return '#CD3D27'
      } else if (value >= 0.31 && value <= 0.6) {
        return '#E59D3F'
      } else if (value >= 0.61 && value <= 0.9) {
        return '#6C9EFF'
      } else {
        return '#1DD1A1'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero-config{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    background-color: #3157AC;
    color: #FFFFFF;
    max-height: 60px;
    border-radius: 8px;
  }

  .panel-heading{
    background-color: inherit !important;
  }
.table{
  background-color: transparent;
  margin: 0 auto 50px;
  th, td {
    color: black;
    vertical-align: middle;
  }
  thead{
    th{
      border-color: black
    }
    tr th:first-child{
      border-right: 2px solid black;
    }
  }
  tfoot{
    td{
      border-color: black
    }
    tr th:first-child{
      border-top: 2px solid black;
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
</style>
