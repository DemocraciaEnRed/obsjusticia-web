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
              <i class="fa fa-search" />
              <input v-model="searchText" class="search-input" placeholder="Busque por sujeto obligado">
            </div>
          </div>
          <table class="table">
            <div v-if="pedidosFiltrados.length > 0" class="has-text-centered">
              <thead>
                <tr>
                  <th class="has-text-centered is-size-5 has-text-weight-normal header-item">
                    Pedido  de información
                  </th>
                  <th class="has-text-centered is-size-5 has-text-weight-normal header-item">
                    Sujeto obligado
                  </th>
                  <th class="has-text-centered is-size-5 has-text-weight-normal header-item">
                    Resumen del pedido
                  </th>
                  <th class="has-text-centered is-size-5 has-text-weight-normal header-item">
                    Respuesta
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="({ pedido, respuesta }, index) in pedidosFiltrados" :key="index">
                  <td class="data-value has-text-centered is-size-5">
                    <p class="has-text-weight-normal mb-4">
                      {{ pedido.fecha }}
                    </p>
                    <div v-if="pedido.fechaReiteracion">
                      <p class="has-text-weight-bold">
                        Reiterado {{ pedido.fechaReiteracion }}
                      </p>
                    </div>
                    <div class="mt-4">
                      <a :href="pedido.link" target="_blank">Solicitud</a>
                    </div>
                  </td>
                  <td class="data-value has-text-centered is-size-5 has-text-weight-normal">
                    {{ pedido.sujetoObligado }}
                  </td>
                  <td class="data-value has-text-centered is-size-5 has-text-weight-light">
                    <p v-for="(detalleResumen, index) in pedido.resumen" :key="index" class="pl-4 has-text-left">
                      {{ detalleResumen }}
                    </p>
                  </td>
                  <td class="data-value has-text-centered is-size-5 has-text-weight-normal">
                    <p>{{ respuesta.fecha }}</p>
                    <div v-if="respuesta.link" class="mt-4">
                      <a :href="respuesta.link" target="_blank">{{ toUpper(respuesta.tipo) }}</a>
                    </div>
                    <div v-else-if="respuesta.tipo">
                      <p>{{ toUpper(respuesta.tipo) }}</p>
                    </div>
                    <div v-else>
                      PENDIENTE
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
            <div v-else>
              <p class="is-size-4">
                No hay pedidos que coincidan con la búsqueda
              </p>
            </div>
          </table>
          <div class="content download-section">
            <p class="is-size-4 line-height-150 download-info mt-1">
              Solicitá información pública a los órganos del sistema de justicia.
            </p>
            <button class="download-button">
              <a href="https://docs.google.com/spreadsheets/d/15xk-4HyFs9OG42tOPPrSkSIUOL1x4cYVCQOa-p9OnCU/edit#gid=0" target="_blank" class="is-size-5">
                Descarga directa
              </a>
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
  fetchOnServer: false,
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
  computed: {
    pedidosFiltrados () {
      const toComparableText = category => _.chain(category).toLower().deburr().value()
      const searchText = this.searchText
      return _.filter(this.pedidos, ({ pedido: { sujetoObligado } }) =>
        !searchText || (searchText.length >= 3 && _.includes(toComparableText(sujetoObligado), toComparableText(searchText)))
      )
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

      return pedidos
    },
    validLink (link) {
      return link && link.match(/http(s):\/\//) ? link : null
    },
    toUpper (string) {
      return _.toUpper(string)
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
  height: 700px;
  overflow-y: scroll;
  thead tr:nth-child(1) th{
    background-color: #3157AC;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  td {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  thead{
    th{
      color: white;
      vertical-align: middle;
      position: sticky; top: 0;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  tbody{
    tr {
      border-bottom: 2px solid #C3C3C3;
      background-color: #EAEAEA;
    }
    tr:last-child{
      border-bottom: none;
    }
    tr td{
      border-bottom: 0;
    }
    td{
      vertical-align: middle;
    }
  }
  .header-item{
    position: relative;
  }
  .header-item::after{
    content: "";
    height: 70%;
    width: 1px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    margin-top: 15px;
  }
  .header-item:last-child:after{
    display: none;
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
  top: 46px;
  font-size: 20px;
  color: #3157AC;
}
.search-input{
  width: 500px;
  padding: 8px;
  border: 2px solid #3157AC;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 15px;
  outline: none;
  @media (max-width: $desktop){
    width: 350px;
  }
}
.download-section{
  width: fit-content;
  margin: 0 auto;
}
.download-info{
  float: left;
}
.download-button{
  background-color: transparent;
  border: 2px solid #3262C0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 15px;
  float: left;
  margin-left: 30px;
}
</style>
