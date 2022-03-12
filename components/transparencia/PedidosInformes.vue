<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced">
          Pedidos de informes a insitituciones
        </h1>
        <br>
        <div v-if="$fetchState.pending" class="p-6 has-text-centered">
          <h1 class="title is-3 is-700">
            <i class="fas fa-sync fa-spin fa-2x has-text-orange" />
          </h1>
          <h1 class="title is-3 is-700 is-spaced">
            Cargando...
          </h1>
        </div>
        <div v-else-if="$fetchState.error" class="p-6 has-text-centered">
          <h1 class="title is-3 is-700">
            <i class="fas fa-times fa-2x has-text-orange" />
          </h1>
          <h1 class="title is-3 is-700 is-spaced">
            Error al cargar los datos... Intente nuevamente
          </h1>
        </div>
        <div v-else>
          <div class="content">
            <p class="is-size-4 line-height-150">
              Accedé a los pedidos de acceso a la información pública que presentamos ante el Poder Judicial y Ministerio Público y sus respuestas.
            </p>
          </div>
          <div class="search-input-container-container">
            <div class="search-text-row search-input-container">
              <i class="fa fa-search"></i>
              <input v-model="searchText" class="search-input" placeholder="Busque por sujeto obligado">
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th class="has-text-centered is-size-4">
                  Pedido  de información
                </th>
                <th class="has-text-centered is-size-4">
                  Sujeto obligado
                </th>
                <th class="has-text-centered is-size-4">
                  Resumen del pedido
                </th>
                <th class="has-text-centered is-size-4">
                  Respuesta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ pedido, respuesta }, index) in pedidosFiltrados" :key="index">
                <td class="data-value has-text-centered is-size-5">
                  {{ pedido.fecha }}
                </td>
                <td class="data-value has-text-centered is-size-5">
                  {{ pedido.sujetoObligado }}
                </td>
                <td class="data-value has-text-centered is-size-5">
                  <p v-for="(detalleResumen, index) in pedido.resumen" :key="index" >
                    {{ detalleResumen }}
                  </p>
                </td>
                <td class="data-value has-text-centered is-size-5">
                  {{ respuesta.fecha }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="content">
            <p class="is-size-4 line-height-150">
              Solicitá información pública a los órganos del sistema de justicia.
            </p>
            <button>
              Descarga directa
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  },
  async fetch () {
    const data = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/15xk-4HyFs9OG42tOPPrSkSIUOL1x4cYVCQOa-p9OnCU/values/Sheet1?key=${this.$config.googleSheetApiKey}`
    ).then(res => res.json())
    this.pedidos = this.extractData(data)
  },
  data () {
    return {
      pedidos: [],
      searchText: ''
    }
  },
  methods: {
    extractData ({ values }) {
      const filasPedidos = values.slice(1)
      const pedidos = filasPedidos.map(([__, sujetoObligado, fechaPedido, fechaReiteracionPedido, resumen, linkPedido, , , , fechaRespuesta, tipoRespuesta, , linkRespuesta, fechaReiteracionRespuesta = '']) => ({
        pedido: {
          sujetoObligado,
          fecha: fechaPedido,
          fechaReiteracion: fechaReiteracionPedido,
          link: this.validLink(linkPedido),
          resumen: resumen.split('\n')
        },
        respuesta: {
          fecha: fechaRespuesta,
          fechaReiteracion: fechaReiteracionRespuesta,
          link: this.validLink(linkRespuesta),
          tipo: tipoRespuesta
        }
      }))

      console.log({ pedidos: JSON.stringify(pedidos) })
      return pedidos
    },
    validLink (link) {
      return link && link.match(/http(s):\/\//) ? link : null
    }
  },
  computed: {
    pedidosFiltrados () {
      const toComparableText = category => _.chain(category).toLower().deburr().value()
      const searchText = this.searchText
      return _.filter(this.pedidos, ({ pedido: { sujetoObligado } }) =>
        !searchText || (searchText.length >= 3 && _.includes(toComparableText(sujetoObligado), toComparableText(searchText)))
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  background-color: transparent;
  margin: 0 auto 50px;
  overflow: auto;
  display: block;
  th, td {
    color: black;
  }
  thead{
    th{
      border-color: black
    }
  }
  tbody{
    tr td{
      border-bottom: 0;
    }
  }
}
.data-value{
  font-weight: 700;
}
.search-text-row{
  display: inline-block;
}
.search-input-container-container{
  width: 100%;
  display: inline-block;
}
.search-input-container{
  padding-top: 7px;
  position: relative;
  float: right;
  @media (max-width: $desktop){
    float: none;
    margin-bottom: 20px;
  }
}
.search-input-container i{
  position: absolute;
  right: 15px;
  top: 16px;
  font-size: 20px;
}
.search-input{
  width: 500px;
  background-color: transparent;
  border-radius: 5px;
  padding: 8px;
  border-width: 3px;
  @media (max-width: $desktop){
    width: 350px;
  }
}
::placeholder {
  color: black;
}
</style>
