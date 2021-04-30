<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container" style="width: 100%;">
        <h1 class="subtitle is-5">
          En el cuadro que sigue encontrarás los puntajes de cada concurso en marcha (algunos anteriores también) y qué candidatos/as se beneficiaron con las impugnaciones y entrevistas personales:
        </h1>
        <div class="field has-addons mx-6">
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select v-model="sheetSelected">
                <option v-for="place in lugares" :key="`lugar-${place.key}`" :disabled="place.disabled" :value="place.key">
                  {{ place.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-primary" :class="{'is-outlined': type !== 'table'}" @click="type = 'table'">
              Tabla
            </button>
          </div>
          <div class="control">
            <button class="button is-primary" :class="{'is-outlined': type !== 'graph'}" @click="type = 'graph'">
              Gráfico
            </button>
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
          <div v-if="type == 'graph'">
            <client-only>
              <v-parallel-chart class="chart" :option="parallelChartOptions" />
            </client-only>
          </div>
          <div v-else-if="type == 'table'" class="is-flex is-flex-direction-row my-5 px-6">
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
                      Orden de<br>Mérito
                    </th>
                    <th class="is-uppercase">
                      Impugnación
                    </th>
                    <th class="is-uppercase">
                      Impugnación Oposición
                    </th>
                    <th class="is-uppercase">
                      Impugnación Antecedentes
                    </th>
                    <th class="is-uppercase">
                      Sumatoria
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td>{{ p.oposicion }}</td>
                    <td>{{ p.antecedentes }}</td>
                    <td>{{ p.primerasum }}</td>
                    <td class="has-background-warning">
                      {{ p.primerordenmerito }}
                    </td>
                    <td class="is-uppercase" :class="{'has-text-orange': p.impugnacion == 'si'}">
                      {{ p.impugnacion }}
                    </td>
                    <td>{{ p.impugnacionopocision }}</td>
                    <td>{{ p.impugnacionantecedentes }}</td>
                    <td>{{ p.nuevasumatoria }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="third-table">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th class="is-uppercase has-background-orange">
                      Nuevo Orden de Mérito
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in data" :key="`orden-${i}`">
                    <td class="has-background-warning">
                      {{ p.nuevoordenmerito }}
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
  async fetch () {
    const data = await fetch(
      `https://spreadsheets.google.com/feeds/list/1SCyb2UYkO6JWrVaOhf3gUT6lQRtw1uH21YHsmAa61gU/${this.sheetSelected}/public/full?alt=json`
    ).then((res) => {
      return res.json()
    })
    this.data = this.extractData(data)
    this.prepareChart(this.data)
  },
  data () {
    return {
      data: null,
      type: 'table',
      lugares: [
        { disabled: false, key: '1', label: '412-CN Crim y Corr Federal - Sala' },
        { disabled: false, key: '2', label: '413-CN Civ y Com Federal - Sala I' },
        { disabled: true, key: '3', label: '433-JN Crim y Corr Federal N°12' },
        { disabled: false, key: '4', label: '418-CN en lo Penal Económico - Sala A' },
        { disabled: false, key: '5', label: '430-JN en lo Penal Económico N°10' },
        { disabled: false, key: '6', label: '415-CN Civ y Com Federal - Sala Esp Def de la Comp' },
        { disabled: true, key: '7', label: '427-JN Civ y Com Federal N° 2' },
        { disabled: true, key: '8', label: '409-CF de Mendoza - Sala A' },
        { disabled: true, key: '9', label: '390-TOCF 2 Rosario' },
        { disabled: true, key: '10', label: '414-CF Mar del Plata' },
        { disabled: true, key: '11', label: '416-CN del Trabajo - Sala VII' },
        { disabled: true, key: '12', label: '408-CN en lo Comercial de la Capital - Sala B' },
        { disabled: true, key: '13', label: '417-JN en lo Crim y Corr de la Capital N° 1' },
        { disabled: true, key: '14', label: '389-TOCF N° 1 y 6 de la Capital' },
        { disabled: true, key: '15', label: '386-JN Civ y Com Federal N° 9 y 10' },
        { disabled: true, key: '16', label: '357-CF de Tucumán' },
        { disabled: true, key: '17', label: '358-JN Crim y Corr N° 2 de Lomas de Zamora' },
        { disabled: true, key: '18', label: '332-TOCF de Posadas' },
        { disabled: true, key: '19', label: '356-TOCF de Formosa' },
        { disabled: true, key: '20', label: '333-TOCF de Bahía Blanca' },
        { disabled: true, key: '21', label: '345-TOCF de Resistencia' },
        { disabled: true, key: '22', label: '377-CF de Salta - Sala I' },
        { disabled: true, key: '23', label: '381-CF de San Justo' },
        { disabled: true, key: '24', label: '391-CF de la Seguridad Social' },
        { disabled: true, key: '25', label: '393-CF de la Plata' },
        { disabled: true, key: '26', label: '399-CF de San Martín' }
      ],
      sheetSelected: '1',
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
        toolbox: {
          show: true,
          feature: {
            dataView: {
              readOnly: false,
              emphasis: {
                iconStyle: {
                  textAlign: 'center'
                }
              }
            },
            saveAsImage: {
              emphasis: {
                iconStyle: {
                  textAlign: 'right'
                }
              }
            }
          }
        },
        parallelAxis: [
          { dim: 0, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: -20, align: 'left', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Orden de Merito' },
          { dim: 1, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 0, align: 'center', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Orden de Merito + Impugnacion' },
          { dim: 2, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 0, align: 'center', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Entrevista' },
          { dim: 3, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { margin: 0, align: 'center', formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Terna Comisión' },
          { dim: 4, inverse: true, min: 1, max: 100, minorTick: { show: true }, axisLine: { lineStyle: { width: 1, color: 'black' } }, axisTick: { lineStyle: { width: 2, color: 'black' } }, axisLabel: { formatter: v => `${v}°`, color: 'black', fontWeight: 600, fontSize: 14, padding: [2, 4], backgroundColor: 'white', borderColor: '#CACACA', borderRadius: 4, borderWidth: 1 }, name: 'Terna Plenario' }
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
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Orden de Mérito</b>: ${a.data.value[0]}°</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px;"><b>Oposicion</b>:&nbsp;&nbsp;&nbsp;${personData.oposicion}</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px;"><b>Antecedentes</b>:&nbsp;&nbsp;&nbsp;${personData.antecedentes}</p>
            <p style="font-size:9px; text-align: left; line-height: normal; padding-left:12px; padding-bottom: 10px;"><b>Sumatoria</b>:&nbsp;&nbsp;&nbsp;${personData.primerasum}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>¿Impugnaciones?</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacion.toUpperCase()}</p>`
            if (personData.impugnacion.toLowerCase() === 'si') {
              aux += `
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px;"><b>Oposicion</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacionopocision}</p>
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px;"><b>Antecedentes</b>:&nbsp;&nbsp;&nbsp;${personData.impugnacionantecedentes}</p>
                <p style="font-size:10px; text-align: left; line-height: normal; padding-left:12px; padding-bottom: 10px;"><b>Sumatoria</b>:&nbsp;&nbsp;&nbsp;${personData.nuevasumatoria}</p>
              `
            }
            aux += `
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Nuevo Orden de Mérito</b>:&nbsp;&nbsp;&nbsp;${a.data.value[1]}°</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Entrevista</b>:&nbsp;&nbsp;&nbsp;${a.data.value[2] ?? 'No pasó / Sin datos'}${a.data.value[2] ? '°' : ''}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Terna comisión</b>:&nbsp;&nbsp;&nbsp;${a.data.value[3] ?? 'No pasó / Sin datos'}${a.data.value[3] ? '°' : ''}</p>
            <p style="font-size:11px; text-align: left; line-height: normal;"><b>Terna plenario</b>:&nbsp;&nbsp;&nbsp;${a.data.value[4] ?? 'No pasó / Sin datos'}${a.data.value[4] ? '°' : ''}</p>
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
            // if (personData.ternacomision === '*') {
            //   aux += `
            //   <p style="font-size:11px; text-align: left; line-height: normal; padding-top: 3px; padding-bottom: 3px;">* Participante renuncio o no se presentó a entrevista</p>
            //   `
            // }
            // if (personData.ternaplenario === '*') {
            //   aux += `
            //   <p style="font-size:11px; text-align: left; line-height: normal; padding-top: 3px; ">* Participante renuncio o no se presentó a entrevista</p>
            //   `
            // }
            return aux
          }
        },
        series: []
      },
      chartOptions: {
        legend: {
          type: 'scroll'
        },
        xAxis: {
          type: 'category',
          data: [
            'Oposicion',
            'Antecedentes',
            'Impugnacion oposición',
            'Impugnacion Antecedentes',
            'Entrevista',
            'Merito Final'
          ]
        },
        yAxis: {
          name: 'Orden de Merito',
          inverse: true,
          min: 0
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
    extractData (data) {
      // eslint-disable-next-line prefer-const
      let output = []
      data.feed.entry.forEach((entry) => {
        // eslint-disable-next-line prefer-const
        let marker = {}
        this.keys.forEach((key) => {
          marker[key] = entry[`gsx$${key}`].$t !== '' ? entry[`gsx$${key}`].$t : null
        })
        output.push(marker)
      })
      return output
    },
    getDataByNombre (name) {
      return this.data.find(p => p.nombre === name)
    },
    prepareChart (data) {
      const serieImpugnacionTrue = {
        name: 'Impugnaron',
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
      const serieImpugnacionFalse = {
        name: 'No impugnaron',
        type: 'parallel',
        data: [],
        smooth: false,
        emphasis: {
          lineStyle: {
            color: '#4017f5',
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
            // color: this.getColor(parseFloat(index) / this.data.length),
            color: d.impugnacion === 'si' ? '#f0d001' : '#3257ab',
            opacity: 0.75,
            width: 4
          }
        }
        if (d.impugnacion === 'si') {
          serieImpugnacionTrue.data.push(theData)
        } else {
          serieImpugnacionFalse.data.push(theData)
        }
        const auxMax = Math.max(...theData.value)
        theMax = theMax > auxMax ? theMax : auxMax
      })
      this.parallelChartOptions.parallelAxis.forEach((d, i) => {
        this.parallelChartOptions.parallelAxis[i].max = theMax
      })
      this.parallelChartOptions.series = [serieImpugnacionTrue, serieImpugnacionFalse]
      this.parallelChartOptions.legend.data = ['Impugnaron', 'No impugnaron']
    },
    getColor (value) {
      const scale = chroma.scale(['#f0d001', '#3257ab'])
      return scale(value).hex()
    },
    getValue (key) {
      return (this.data.find(d => d.clave === key)).valor
    }
  }
}
</script>

<style lang="scss" scoped>
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
  width: 250px;
  .table{
    width: 100%
    thead th {
    }
    tbody td{
      text-align: right;
      border-right: 1px solid black;
      max-width: 250px;
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
  }
  tbody td{
    border-right: 1px solid black;
    width: 100px;
  }
}
.third-table{
  width: 150px;
  .table {
    width: 100%;
  }
  tbody td{
    border-left: 1px solid black;
  }
}
.table{
  background-color: transparent;
  font-size: 0.9rem;

  td {
    padding: 5px 5px;
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
