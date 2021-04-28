<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="subtitle is-5">
          En el cuadro que sigue encontrarás los puntajes de cada concurso en marcha (algunos anteriores también) y qué candidatos/as se beneficiaron con las impugnaciones y entrevistas personales:
        </h1>
        <div class="field has-addons mx-6">
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select v-model="sheetSelected">
                <option v-for="place in lugares" :key="`lugar-${place.key}`" :value="place.key">
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
          <div v-if="type == 'graph'" class="py-6 has-text-centered">
            <h1 class="subtitle is-5">
              Próximamente
            </h1>
          </div>
          <div v-else-if="type == 'nono'">
            <LineChart :data="barChartData" :options="barChartOptions" :height="500" />
          </div>
          <!-- <div v-else-if="type == 'table'" class="table-container">
            <table class="table mb-0 is-fullwidth">
              <thead>
                <tr>
                  <th />
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
                  <th class="is-uppercase has-background-orange">
                    Nuevo Orden de Mérito
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(p,i) in data" :key="`orden-${i}`">
                  <td>{{ p.nombre }}</td>
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
                  <td class="has-background-warning">
                    {{ p.nuevoordenmerito }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
          <div v-else-if="type == 'table'" class="is-flex is-flex-direction-row my-5">
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
    console.log(data)
    this.data = this.extractData(data)
    // this.data = this.createLabels(this.data)
    this.barChartData.datasets = this.createDatasets(this.data)
    console.log(this.data)
  },
  data () {
    return {
      data: null,
      type: 'table',
      lugares: [
        { key: '1', label: '412-CN Crim y Corr Federal - Sala' },
        { key: '2', label: '413-CN Civ y Com Federal - Sala I' }
        // { key: '433-JN', label: '433-JN Crim y Corr Federal N°12' },
        // { key: '418-CN', label: '418-CN en lo Penal Económico - Sala A' },
        // { key: '430-JN', label: '430-JN en lo Penal Económico N°10' },
        // { key: '415-CN', label: '415-CN Civ y Com Federal - Sala Esp Def de la Comp' },
        // { key: '427-JN', label: '427-JN Civ y Com Federal N° 2' },
        // { key: '409-CF', label: '409-CF de Mendoza - Sala A' },
        // { key: '390-TOCF', label: '390-TOCF 2 Rosario' },
        // { key: '414-CF', label: '414-CF Mar del Plata' },
        // { key: '416-CN', label: '416-CN del Trabajo - Sala VII' },
        // { key: '408-CN', label: '408-CN en lo Comercial de la Capital - Sala B' },
        // { key: '417-JN', label: '417-JN en lo Crim y Corr de la Capital N° 1' },
        // { key: '389-TOCF', label: '389-TOCF N° 1 y 6 de la Capital' },
        // { key: '386-JN', label: '386-JN Civ y Com Federal N° 9 y 10' },
        // { key: '357-CF', label: '357-CF de Tucumán' },
        // { key: '358-JN', label: '358-JN Crim y Corr N° 2 de Lomas de Zamora' },
        // { key: '332-TOCF', label: '332-TOCF de Posadas' },
        // { key: '356-TOCF', label: '356-TOCF de Formosa' },
        // { key: '333-TOCF', label: '333-TOCF de Bahía Blanca' },
        // { key: '345-TOCF', label: '345-TOCF de Resistencia' },
        // { key: '377-CF', label: '377-CF de Salta - Sala I' },
        // { key: '381-CF', label: '381-CF de San Justo' },
        // { key: '391-CF', label: '391-CF de la Seguridad Social' },
        // { key: '393-CF', label: '393-CF de la Plata' },
        // { key: '399-CF', label: '399-CF de San Martín' }
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
        'ordenmeritooposicion',
        'ordenmeritoantecedentes'
      ],
      barChartData: {
        // labels: [
        //   'Orden de Merito',
        //   'Orden de Merito Final'
        // ],
        labels: [
          'Orden de Merito - Oposicion',
          'Orden de Merito - Antecedentes',
          'Orden de Merito - Merito Final'
        ],
        // labels: [
        //   'Oposicion',
        //   'Antecedentes',
        //   'Impugnacion Oposicion',
        //   'Orden de Merito Final'
        // ],
        datasets: [
          {
            label: 'Visits',
            data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78, 45],
            backgroundColor: '#003f5c'
          },
          {
            label: 'Pages Views',
            data: [30, 24, 57, 23, 68, 72, 25, 64, 133, 143, 165, 33, 56],
            backgroundColor: '#2f4b7c'
          },
          {
            label: 'Users',
            data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
            backgroundColor: '#665191'
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
          align: 'start'
        },
        title: {
          display: true,
          text: 'Orden de merito',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 1,
                beginAtZero: false
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
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
    createDatasets (data) {
      const theDataset = []
      data.forEach((d, index) => {
        console.log((index / data.length).toFixed(2))
        theDataset.push({
          label: d.nombre,
          // data: [parseInt(d.oposicion), (parseInt(d.oposicion) + parseInt(d.antecedentes)), (parseInt(d.oposicion) + parseInt(d.antecedentes) + parseInt(d.diffsumatoria)), d.nuevasumatoria],
          // data: [parseInt(d.primerordenmerito), (parseInt(d.nuevoordenmerito))],
          data: [parseInt(d.ordenmeritooposicion), parseInt(d.primerordenmerito), parseInt(d.nuevoordenmerito)],
          fill: false,
          lineTension: 0,
          spanGasps: true,
          backgroundColor: d.impugnacion === 'si' ? 'pink' : this.getColor((index / data.length)),
          borderColor: d.impugnacion === 'si' ? 'pink' : this.getColor((index / data.length))
        })
      })
      return theDataset
    },
    getColor (value) {
      const scale = chroma.scale(['#fbeb7c', '#3257ab'])
      return scale(value).hex()
    },
    getValue (key) {
      return (this.data.find(d => d.clave === key)).valor
    }
  }
}
</script>

<style lang="scss" scoped>
.field .control select {
  background: transparent;
  border-color: #467CF6;
  color: #467CF6;
}
.first-table{
  width: 25%;
  overflow-x: scroll;
  .table{
    width: 100%
    thead th {
      // width: 400px;
    }
    tbody td{
      text-align: right;
      // font-size: 0.9rem;
      border-right: 1px solid black;
    }
  }
}
.second-table{
  width: 65%;
  overflow: auto;
  .table {
    width: 600px;
  }
  thead th {
    // width: 200px;
    text-overflow: ellipsis;
    font-size: 0.5rem;
    // writing-mode: vertical-rl;
    // text-orientation: sideways;
  }
  tbody td{
    border-right: 1px solid black;
  }
}
.third-table{
  width: 10%;
  .table {
    width: 100%;
  }
  thead th {
    // width: 200px;
    font-size: 0.7rem;
    // writing-mode: vertical-rl;
    // text-orientation: sideways;
  }
  tbody td{
    border-left: 1px solid black;
  }
}
.table{
  background-color: transparent;
  // display: block;
  // margin: 0 auto 50px;
  table-layout: fixed;
  font-size: 0.9rem;

  td {
    height: 50px;
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
    tr th:first-child{
      // border-right: 2px solid black;
    }
  }
  tfoot{
    td{
      border-color: black
    }
    tr th:first-child{
      // border-top: 2px solid black;
    }
  }
  tbody{
    // tr td:first-child{
    //   // border-right: 2px solid black;
    //   font-weight: 300;
    // }
    // tr td{
    //   border-bottom: 0;
    // }
  }
}
</style>
