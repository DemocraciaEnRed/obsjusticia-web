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
        <div class="field m-6">
          <div class="control">
            <div class="select">
              <select ref="contestSelect" v-model="sheetSelected">
                <option :value="null" disabled>Elegir un concurso</option>
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
        <div v-else-if="!this.sheetSelected" class="my-6 select-contest-button-container">
          <!-- <button
            class="button is-outlined p-6 select-contest-button"
            v-bind:class="!this.isMobile() && 'is-large'"
            @click="$refs.contestSelect.focus()">
            Hacé click aqui para elegir un concurso
          </button> -->
        </div>
        <div v-else>
            <p>
              El gráfico muestra a las y los primeros 30 concursantes  ordenados según el puntaje obtenido en el primer orden de mérito. La tabla muestra a todas las personas inscriptas y sus respectivos puntajes.
            </p>
          <p class="subtitle is-4 has-text-left is-spaced mt-6 mb-3 line-height-150">
            CONCURSO: {{ selectedContest() }}
          </p>
          <div class="py-6">
            <client-only>
              <v-parallel-chart class="chart" :option="parallelChartOptions" />
              <p class="is-size-6 has-text-justified order-explanation">
                ORDEN DESCENDENTE DE ACUERDO<br>A PUNTAJE OPOSICIÓN
              </p>
              <div class="mt-6" v-bind:class="!this.isMobile() && 'is-flex is-justify-content-flex-end mr-6'">
                <button class="button is-primary is-outlined mr-4" @click="downloadGraphCSV">
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
          </div>
          <div class="py-6">
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
                      <th>
                        Examen<br>escrito
                      </th>
                      <th>
                        Curriculum
                      </th>
                      <th>
                        Suma de<br>puntajes
                      </th>
                      <th class="has-background-orange">
                        1º Orden de<br>mérito
                      </th>
                      <th>
                        Suma por impugnación
                      </th>
                      <th class="has-background-orange">
                        2º Orden de<br>mérito
                      </th>
                      <th>
                        <a v-if="this.contestInterview()" v-bind:href="this.contestInterview()" target="_blank" class="interview-link">Entrevista</a>
                        <p v-else>Entrevista</p>
                        <span class="icon is-align-self-center mt-2 ml-1 is-size-4"><i class="fab fa-youtube"></i></span>
                      </th>
                      <th>
                        Terna<br>propuesta
                      </th>
                      <th>
                        Terna<br>final
                      </th>
                      <th>
                        Elección<br>Poder<br>Ejecutivo
                      </th>
                      <th class="has-background-orange">
                        Designación<br>Senado
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
                      <td :class="{'has-text-success': p.nuevasumatoria > p.primerasum, 'has-text-danger': p.nuevasumatoria < p.primerasum }">
                        {{ p.nuevasumatoria != null ? p.nuevasumatoria : '-' }}
                      </td>
                      <td class="has-background-warning">
                        {{ p.nuevoordenmerito != null ? p.nuevoordenmerito : '-' }}
                      </td>
                      <td>
                        {{ p.ordenentrevista != null ? p.ordenentrevista : '-' }}
                      </td>
                      <td>
                        {{ p.ternacomision != null ? p.ternacomision.toUpperCase() : '-' }}
                      </td>
                      <td>
                        {{ p.ternaplenario != null ? p.ternaplenario : '-' }}
                      </td>
                      <td>
                        {{ p['Elección Poder Ejecutivo'] != null ? 'Si' : 'No' }}
                      </td>
                      <td class="has-background-warning">
                        {{ p['Designación Senado'] != null ? 'Si' : 'No' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-bind:class="!this.isMobile() && 'is-flex is-justify-content-space-between'">
              <div class="m-6">
                <div class="columns">
                  <span class="colum is-one-fifth lost-points-icon"/>
                  <p class="colum m-1">Perdió puntos por impugnación</p>
                </div>
                <div class="columns mt-2">
                  <span class="colum won-points-icon"/>
                  <p class="colum m-1">Ganó puntos por impugnación</p>
                </div>
                <div class="columns mt-2">
                  <span class="icon is-align-self-center m-1 is-size-4"><i class="fab fa-youtube"></i></span>
                  <p class="colum mt-1 ml-2">Vinculo a entrevistas grabadas</p>
                </div>
              </div>
              <div class="mt-6" v-bind:class="!this.isMobile() && 'is-flex is-justify-content-flex-end mr-6'">
                <button class="button is-primary is-outlined mr-4" @click="downloadGraphCSV">
                  Descargar tabla completa
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="content-button">
      <div class="cb-transparent py-5">
        <a href="" class="">Contactanos</a>
      </div>
      <div class="cb-solid py-5">
        <a href="" class="">Suscribite al newsletter de Concursos</a>
      </div>
    </div> -->
    <div class="container">
      <div id="botonera" class="botonera is-flex is-flex-direction-column is-align-content-center is-justify-content-center is-align-items-center">
        <a href="https://docs.google.com/spreadsheets/d/1GInMcwjI-jCns4TrUxIcaY_soe-1mkhk5Z1qGJYhu50/edit#gid=1113035164"  class="button  btn-void-red is-primary is-raleway fs-18 is-outlined mr-4">
          Data Set Original
        </a>
        <p class="is-size-3-desktop  is-size-2-touch has-text-centered">
          Si tenés información sobre algún problema en un concurso o queres recibir novedades sobre cocursos
        </p>
        <a  href="mailto:info@acij.org.ar"  class="button btn-solid is-raleway fs-18  is-outlined mr-4">
         Contactanos
        </a>
        <a  href="https://docs.google.com/forms/d/e/1FAIpQLSd7yqPdfqJCWU75_bwtsLZW7zvE-kXpVyqzRMMoS_NC7tJe5A/viewform"  class="button btn-void is-raleway fs-18  is-outlined mr-4">
          Suscribite al newsletter de Concursos
        </a>
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
      `https://sheets.googleapis.com/v4/spreadsheets/1GInMcwjI-jCns4TrUxIcaY_soe-1mkhk5Z1qGJYhu50/values/Estado?key=${this.$config.googleSheetApiKey}`
      )
        .then(res => res.json())
        .then((dataStatus) => {
          this.status = this.extractDataStatus(dataStatus)
          this.fillLugares(this.status)
        })
        .then(async () => {
          await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/1GInMcwjI-jCns4TrUxIcaY_soe-1mkhk5Z1qGJYhu50/values/Entrevistas?key=${this.$config.googleSheetApiKey}`
          )
            .then(res => res.json())
            .then((interviewsData) => {
              this.fillInterviewsLinks(interviewsData)
            })
        })
    } else {
      const data = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1GInMcwjI-jCns4TrUxIcaY_soe-1mkhk5Z1qGJYhu50/values/${this.sheetSelected}?key=${this.$config.googleSheetApiKey}`
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
      sheetSelected: null,
      interviewsKeys: [
        'concurso',
        'link'
      ],
      interviewsLinks: [],
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
        'Elección Poder Ejecutivo',
        'Designación Senado',
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
          { dim: 0, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 2, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: -40, align: 'left', formatter: v => `${v}°`, color: 'black', fontSize: 14, padding: [2, 4] }, name: '1º Orden de mérito' },
          { dim: 1, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 2, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { show: false, formatter: v => '' }, name: 'impugnación' },
          { dim: 2, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 2, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { show: false, formatter: v => '' }, name: 'Entrevista', nameTextStyle: { fontWeight: 'bold' } },
          { dim: 3, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 2, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { show: false, formatter: v => '' }, name: 'Terna Propuesta' },
          { dim: 4, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 2, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 20, formatter: v => `${v}°`, color: 'black', fontSize: 14, padding: [2, 4] }, name: 'Terna Final', nameTextStyle: { fontWeight: 'bold' } },
          { dim: 5, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 2, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 20, formatter: v => '', color: 'black', fontSize: 14, padding: [2, 4] }, name: 'Designación senado', nameTextStyle: { fontWeight: 'bold' } }
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
    fillInterviewsLinks (data) {
      // eslint-disable-next-line prefer-const
      let output = []
      const theKeys = this.interviewsKeys
      const theValues = data.values.slice(1)
      theValues.forEach((entry) => {
        // eslint-disable-next-line prefer-const
        const marker = {}
        theKeys.forEach((k, i) => {
          marker[k] = entry[i] !== '' ? entry[i] : null
        })
        output.push(marker)
      })
      this.interviewsLinks = output
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
      const sortedByPrimerOrdenMerito = data.sort((a, b) => {
        const primerOrdenMeritoDeA = parseInt(a.primerordenmerito) || 999999
        const primerOrdenMeritoDeB = parseInt(b.primerordenmerito) || 999999
        if (primerOrdenMeritoDeA < primerOrdenMeritoDeB) {
          return -1
        } else {
          if (primerOrdenMeritoDeA > primerOrdenMeritoDeB) {
            return 1
          }
          return 0
        }
      })
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
      const cappedJudges = sortedByPrimerOrdenMerito.slice(0, 30)
      cappedJudges.forEach((d, index) => {
        // console.log((index / data.length).toFixed(2))
        const coloredStatus = [
          {
            status: 'Designación Senado',
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
            parseInt(d.ternaplenario) ? parseInt(d.ternaplenario) : null,
            d['Designación Senado'] ? parseInt(d.ternaplenario) : null
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
      if (!parallelAxis.find(({ name }) => name === 'Nombre') && !this.isMobile()) {
        const nameAxis = { name: 'Nombre', type: 'category', inverse: true, axisLine: { show: false }, axisTick: { show: false }, axisLabel: { margin: -80, align: 'left', fontSize: 11 } }
        this.parallelChartOptions.parallelAxis.unshift(nameAxis)
      }

      this.parallelChartOptions.parallelAxis[0].data = cappedJudges.map(it => it.nombre.split(' ').slice(0, 3).join(' '))
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
    },
    downloadGraphCSV () {
      const keys = Object.keys(this.data[0]).join(',')
      let csv = `${keys}\n`
      this.data.forEach((row) => {
        csv += Object.values(row).join(',')
        csv += '\n'
      })
      const anchor = document.createElement('a')
      anchor.href = 'data:text/csvcharset=utf-8,' + encodeURIComponent(csv)
      anchor.target = '_blank'
      anchor.download = 'concursos.csv'
      anchor.click()
    },
    isMobile () {
      return screen.width <= 760
    },
    contestInterview () {
      const contestInterviewLink = this.interviewsLinks.find(({ concurso }) => concurso === this.sheetSelected)
      if (!contestInterviewLink) {
        return ''
      }

      return contestInterviewLink.link
    }
  }
}
</script>

<style lang="scss" scoped>
.chart{
  height: 75vh;
}
.control{
  box-sizing: border-box;
  background: #FF6F6F !important;
  border-radius: 5px;
  border: none;
}
.control .select{
  width: 100%;
  height: auto;
}
.control .select i::after{
  color: #fff !important;
}
.field{
  border-color: #fff !important;
}
.field .control select {
  background: #ff6f6f9c;
  border-color: #FF6F6F;
  width: 100% !important;
  color: #fff;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: left;
  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;
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
.select-contest-button-container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  border: 2px solid grey;
  border-radius: 10px;
  border-style: dashed;
}
.select-contest-button{
  background-color: transparent;
  text-transform: uppercase;
  border: 3px solid #9F5EB7;
  box-sizing: border-box;
  border-radius: 10px;
  color: #9F5EB7;
}
.order-explanation{
  margin-left: 20%;
  margin-top: -30px;
}
.lost-points-icon{
  margin: 6px 8px;
  width: 15px;
  height: 15px;
  background-color: #f14668;
  display: inline-table;
}
.won-points-icon{
  margin: 6px 8px;
  width: 15px;
  height: 15px;
  background-color: #48c78e;
  display: inline-table;
}
.interview-link{
  color: #6C9EFF;
  text-decoration-line: underline;
}
.content-button{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 40px;
  gap: 10px;
  justify-content: center;
  align-content: center;

}
.content-button a {
  width: 100%;
  height: 100%;
  display: block;
  font-size: 100%;
}

.cb-solid {
  height: 60px;
  width: 30%;
  background: #3157AC;
  color: #fff !important;
  border-radius: 5px;
  text-align: center;
  margin: 10px;
}
 .cb-solid a{
   color: #fff;
 }
.cb-transparent{
  height: 60px;
  width: 30%;
  justify-content: center;
  background: transparent;
  border: 1px solid #3157AC;
  border-radius: 5px;
  color: #3157AC;
  text-align: center;
  margin: 10px;
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
  color: #3157AC !important;
}
.btn-void-red{
  box-sizing: border-box;
  background: none !important;
  border-radius: 5px;
  border: 2px solid #CD3D27 !important;
  color: #CD3D27 !important;
}
.btn-void-red:hover{
  box-sizing: border-box;
  background: none !important;
  border-radius: 5px;
  background:  #CD3D27 !important;
  color: #fff !important;
}
</style>
