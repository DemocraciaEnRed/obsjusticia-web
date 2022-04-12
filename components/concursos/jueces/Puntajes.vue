<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container" style="width: 100%;">
        <h3 class="is-uppercase is-2 is-500 line-height-150">
          Elegí el concurso que te interese
        </h3>
        <p class="is-size-5 line-height-150">
          Accedé a la información sobre concursos en trámite y finalizados con los puntajes asignados en cada etapa.
        </p>
        <div class="field has-addons m-6">
          <div class="control is-expanded">
            <div class="select">
              <select v-model="sheetSelected">
                <option v-for="place in lugares" :key="`lugar-${place.key}`" :disabled="place.disabled" :value="place.key">
                  {{ place.label }} ({{ place.status }})
                </option>
              </select>
            </div>
          </div>
        </div>
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
          <p class="subtitle is-4 has-text-left is-spaced mt-6 mb-3 line-height-150">
            CONCURSO: {{ selectedContest() }}
          </p>
          <client-only>
            <v-parallel-chart class="chart" :option="parallelChartOptions" />
            <div>
              <button class="button is-primary is-outlined" @click="downloadGraphCSV">
                Descargar gráfico
              </button>
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button"
                data-size="large"
                data-text="Mirá los concursos de jueces y fiscales en JUSTA!"
                data-via="ACIJargentina"
                data-hashtags="justa,acij"
                data-lang="es"
                data-show-count="false"
              >
                Tweet
              </a><script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </client-only>
          <div class="is-flex is-flex-direction-row my-5 px-6">
            <div class="first-table">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td>{{ p.nombre }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="second-table">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th class="is-uppercase">
                      Puntaje Oposición
                    </th>
                    <th class="is-uppercase">
                      Puntaje Antecedentes
                    </th>
                    <th class="is-uppercase">
                      Sumatoria Puntajes
                    </th>
                    <th class="is-uppercase has-background-orange">
                      1º Orden de<br>mérito
                    </th>
                    <th class="is-uppercase">
                      Suma por impugnación
                    </th>
                    <th class="is-uppercase">
                      Impugnación Oposición
                    </th>
                    <th class="is-uppercase">
                      Impugnación Antecedentes
                    </th>
                    <th class="is-uppercase">
                      Sumatoria Impugnación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td>{{ p.oposicion != null ? p.oposicion : '-' }}</td>
                    <td>{{ p.antecedentes != null ? p.antecedentes : '-' }}</td>
                    <td>{{ p.primerasum != null ? p.primerasum : '-' }}</td>
                    <td class="has-background-warning">
                      {{ p.primerordenmerito != null ? p.primerordenmerito : '-' }}
                    </td>
                    <td class="is-uppercase" :class="{'has-text-orange': p.impugnacion == 'si'}">
                      {{ p.impugnacion != null ? p.impugnacion : '-' }}
                    </td>
                    <td>{{ p.impugnacionopocision != null ? p.impugnacionopocision : '-' }}</td>
                    <td>{{ p.impugnacionantecedentes != null ? p.impugnacionantecedentes : '-' }}</td>
                    <td>{{ p.nuevasumatoria != null ? p.nuevasumatoria : '-' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="third-table">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th class="is-uppercase has-background-orange">
                      Nuevo<br>Orden<br>de Mérito
                    </th>
                    <th class="is-uppercase has-background-orange">
                      Entrevista
                    </th>
                    <th class="is-uppercase has-background-orange">
                      Terna<br>propuesta
                    </th>
                    <th class="is-uppercase has-background-orange">
                      Terna<br>final
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td class="has-background-warning">
                      {{ p.nuevoordenmerito != null ? p.nuevoordenmerito : '-' }}
                    </td>
                    <td class="has-background-warning">
                      {{ p.ordenentrevista != null ? p.ordenentrevista : '-' }}
                    </td>
                    <td class="has-background-warning">
                      {{ p.ternacomision != null ? p.ternacomision.toUpperCase() : '-' }}
                    </td>
                    <td class="has-background-warning">
                      {{ p.ternaplenario != null ? p.ternaplenario : '-' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chroma from 'chroma-js'

export default {
  components: {},
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  },
  fetchOnServer: false,
  async fetch () {
    if (this.status == null) {
      await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1SCyb2UYkO6JWrVaOhf3gUT6lQRtw1uH21YHsmAa61gU/values/Estado?key=${this.$config.googleSheetApiKey}`
      )
        .then(res => res.json())
        .then((dataStatus) => {
          this.status = this.extractDataStatus(dataStatus)
          this.fillLugares(this.status)
          this.sheetSelected = this.lugares[0].key
        })
        .then(async () => {
          const data = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/1SCyb2UYkO6JWrVaOhf3gUT6lQRtw1uH21YHsmAa61gU/values/${this.lugares[0].key}?key=${this.$config.googleSheetApiKey}`
          ).then((res) => {
            return res.json()
          })
          this.data = this.extractData(data)
          this.prepareChart(this.data)
        })
    } else {
      const data = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1SCyb2UYkO6JWrVaOhf3gUT6lQRtw1uH21YHsmAa61gU/values/${this.sheetSelected}?key=${this.$config.googleSheetApiKey}`
      ).then((res) => {
        return res.json()
      })
      this.data = this.extractData(data)
      this.prepareChart(this.data)
    }
  },
  data () {
    return {
      data: null,
      status: null,
      statusKeys: [
        'nombre',
        'estado',
        'mostrar'
      ],
      lugares: [
        { disabled: false, key: '2', label: 'Cargando' }
      ],
      sheetSelected: '2',
      keys: [
        'nombre',
        'oposicion',
        'antecedentes',
        'primerasum',
        'primerordenmerito',
        'impugnacion',
        'impugnacionopocision',
        'impugnacionantecedentes',
        'nuevasumatoria',
        'nuevoordenmerito',
        'ordenentrevista',
        'ternacomision',
        'ternaplenario',
        'nota',
        'sum-opo',
        'sum-opo-ant',
        'sum-opo-ant-iopo',
        'sum-opo-ant-iopo-iant',
        'orden-opo',
        'orden-opo-ant',
        'orden-opo-ant-iopo',
        'orden-opo-ant-iopo-iant'
      ],
      parallelChartOptions: {
        parallelAxis: [
          { dim: 0, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: -30, align: 'left', formatter: v => `${v}°`, color: 'black', fontSize: 12, padding: [2, 4] }, name: '1º Orden de mérito' },
          { dim: 1, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { show: false, formatter: v => '' }, name: 'Suma impugnación' },
          { dim: 2, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { show: false, formatter: v => '' }, name: 'Entrevista', nameTextStyle: { fontWeight: 'bold' } },
          { dim: 3, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { show: false, formatter: v => '' }, name: 'Terna Propuesta' },
          { dim: 4, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 10, formatter: v => `${v}°`, color: 'black', fontSize: 12, padding: [2, 4] }, name: 'Terna Final', nameTextStyle: { fontWeight: 'bold' } }
        ],
        color: ['#f0d001', '#3257ab'],
        legend: {
          top: 10,
          // orient: 'vertical',
          data: [],
          // left: 0,
          // width: 100,
          itemWidth: 30,
          formatter: '{name}',
          type: 'scroll'
          // itemGap:
        },

        parallel: { // Definition of a parallel coordinate system.
          top: 90,
          parallelAxisDefault: { // A pattern for axis definition, which can avoid repeating in `parallelAxis`.
            type: 'value',
            nameLocation: 'start',
            nameGap: 20
          }
        },
        tooltip: {
          padding: 10,
          borderWidth: 1,
          formatter: (a) => {
            const personData = this.getDataByNombre(a.data.name)
            let aux = `
            <p style="font-size:16px; font-weight: bold; margin-bottom: 10px; text-align: left;">${a.data.name}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>1º Orden de mérito</b>: ${a.data.value[0]}°</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px;"><b>Oposicion</b>:&nbsp;&nbsp;&nbsp;${personData.oposicion}</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px;"><b>Antecedentes</b>:&nbsp;&nbsp;&nbsp;${personData.antecedentes}</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px; padding-bottom: 10px;"><b>Sumatoria</b>:&nbsp;&nbsp;&nbsp;${personData.primerasum}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>¿Impugnaciones?</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacion != null ? personData.impugnacion.toUpperCase() : '-'}</p>`
            if (personData.impugnacion != null && personData.impugnacion.toLowerCase() === 'si') {
              aux += `
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px;"><b>Oposicion</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacionopocision}</p>
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px;"><b>Antecedentes</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacionantecedentes}</p>
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px; padding-bottom: 10px;"><b>Sumatoria</b>:&nbsp;&nbsp;&nbsp;${personData.nuevasumatoria}</p>
              `
            }
            aux += `
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Nuevo Orden de Mérito</b>:&nbsp;&nbsp;&nbsp;${a.data.value[1]}°</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Entrevista</b>:&nbsp;&nbsp;&nbsp;${a.data.value[2] ?? 'No pasó / Sin datos'}${a.data.value[2] ? '°' : ''}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Terna propuesta</b>:&nbsp;&nbsp;&nbsp;${a.data.value[3] ?? 'No pasó / Sin datos'}${a.data.value[3] ? '°' : ''}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Terna final</b>:&nbsp;&nbsp;&nbsp;${a.data.value[4] ?? 'No pasó / Sin datos'}${a.data.value[4] ? '°' : ''}</p>
            `
            if (personData.ordenentrevista === '*') {
              aux += `
              <p style="font-size:11px; text-align: left; line-height: normal; padding-top: 10px; ">* Participante renuncio o no se presentó a entrevista</p>
              `
            }
            if (personData.nota !== null) {
              aux += `
              <p style="font-size:11px; text-align: left; line-height: normal; padding-top: 10px; ">${personData.nota}</p>
              `
            }
            return aux
          }
        },
        series: []
      }
    }
  },
  watch: {
    sheetSelected () {
      this.$fetch()
    }
  },
  methods: {
    extractDataStatus (data) {
      // eslint-disable-next-line prefer-const
      let output = []
      const theKeys = this.statusKeys
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
    fillLugares (data) {
      const output = []
      data.forEach((l) => {
        const aux = {
          disabled: l.mostrar !== 'TRUE',
          key: l.nombre.split(' ')[0],
          label: l.nombre,
          status: l.estado
        }
        output.push(aux)
      })
      this.lugares = output
    },
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
    getDataByNombre (name) {
      return this.data.find(p => p.nombre === name)
    },
    prepareChart (data) {
      const parallelSerie = {
        type: 'parallel',
        data: [],
        smooth: false,
        emphasis: {
          lineStyle: {
            color: '#fc8312',
            opacity: 0.75,
            width: 5,
            type: 'dotted',
            cap: 'butt',
            join: 'round',
            dashOffset: 10
          }
        }
      }
      let theMax = 1
      data.forEach((d, index) => {
        // console.log((index / data.length).toFixed(2))
        const coloredStatus = [
          {
            // TODO rename to match 'designación senado' one
            status: 'ternaplenario',
            color: '#59D320'
          },
          {
            status: 'ternaplenario',
            color: '#E59D3F'
          },
          {
            status: 'ternaplenario',
            color: '#CD3D27'
          }
        ]
        const contestantColoredStatus = coloredStatus.find(({ status }) => d[status]) || coloredStatus.at(-1)
        const color = contestantColoredStatus.color
        const theData = {
          name: d.nombre,
          value: [
            parseInt(d.primerordenmerito) ? parseInt(d.primerordenmerito) : null,
            parseInt(d.nuevoordenmerito) ? parseInt(d.nuevoordenmerito) : null,
            parseInt(d.ordenentrevista) ? parseInt(d.ordenentrevista) : null,
            parseInt(d.ternacomision) ? parseInt(d.ternacomision) : null,
            parseInt(d.ternaplenario) ? parseInt(d.ternaplenario) : null
          ],
          lineStyle: {
            color,
            opacity: 0.75,
            width: 3
          }
        }
        parallelSerie.data.push(theData)
        const auxMax = Math.max(...theData.value)
        theMax = theMax > auxMax ? theMax : auxMax
      })
      const parallelAxis = this.parallelChartOptions.parallelAxis
      if (data.length > 30) {
        this.parallelChartOptions.parallelAxis = parallelAxis.filter(({ name }) => name !== 'Nombre')
      } else {
        if (!parallelAxis.find(({ name }) => name === 'Nombre')) {
          const nameAxis = { name: 'Nombre', type: 'category', inverse: true, axisLine: { show: false }, axisTick: { show: false }, axisLabel: { margin: -80, align: 'left', fontSize: 14 } }
          this.parallelChartOptions.parallelAxis.unshift(nameAxis)
        }

        const sortedByPrimerOrdenMerito = data.sort((a, b) => {
          const primerOrdenMeritoDeA = parseInt(a.primerordenmerito)
          const primerOrdenMeritoDeB = parseInt(b.primerordenmerito)
          if (primerOrdenMeritoDeA < primerOrdenMeritoDeB) {
            return -1
          } else {
            if (primerOrdenMeritoDeA > primerOrdenMeritoDeB) {
              return 1
            }
            return 0
          }
        })
        this.parallelChartOptions.parallelAxis[0].data = sortedByPrimerOrdenMerito.map(it => it.nombre.split(' ').slice(0, 3).join(' '))
      }
      this.parallelChartOptions.parallelAxis.forEach((d, i) => {
        if (d.name === 'Nombre') {
          return
        }
        this.parallelChartOptions.parallelAxis[i].max = theMax
      })
      this.parallelChartOptions.series = [parallelSerie]
    },
    getColor (value) {
      const scale = chroma.scale(['#f0d001', '#3257ab'])
      return scale(value).hex()
    },
    getValue (key) {
      return (this.data.find(d => d.clave === key)).valor
    },
    selectedContest () {
      const selectedContest = this.lugares.find(it => it.key === this.sheetSelected)
      return selectedContest && selectedContest.label
    }
  }
}
</script>

<style lang="scss" scoped>
.select{
  display: grid;
  width: 60%;
  margin: 0 auto;
}
.chart{
  height: 75vh;
}
.field .control select {
  background: transparent;
  border-color: #467CF6;
  color: #f0d001;
  color: #467CF6;
}
.first-table{
  margin-bottom: 0;
  width: 170px;
  .table{
    tbody {
      box-shadow: 5px 1px 4px -2px #00000078;
    }
    width: 100%
    thead th {
      border-right: 1px solid black;
    }
    tbody td{
      text-align: left;
      border-right: 1px solid black;
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.second-table{
  overflow: auto;
  thead th {
    width: 100px;
    font-size: 0.75rem;
  }
  tbody td{
    border-right: 1px solid black;
    width: 100px;
  }
}
.third-table{
  margin-bottom: 0;
  width: 250px;
  .table {
    width: 100%;
  }
  tbody {
    box-shadow: -5px 1px 4px -2px #00000078;
  }
  thead th {
    font-size: 0.75rem;
  }
  tbody td{
    border-left: 1px solid black;
  }
}
.table{
  background-color: transparent;
  font-size: 1rem;

  td {
    padding: 2px 5px;
    color: black;
    vertical-align: middle;
    border-bottom: 0;
  }
  thead{
    th{
      border-color: black;
      height: 80px;
      vertical-align: middle;
      line-height: normal;
    }
  }
  tfoot{
    td{
      border-color: black
    }
  }
}
</style>
