<template>
  <section :id="scrollId" class="hero is-fullheight my-6">
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
          <table class="table">
            <thead>
              <tr>
                <th class="has-text-centered">
                  Pedido  de información
                </th>
                <th class="has-text-centered">
                  Sujeto obligado
                </th>
                <th class="has-text-centered">
                  Resumen del pedido
                </th>
                <th class="has-text-centered">
                  Respuesta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ pedido, respuesta }, index) in pedidos" :key="index">
                <td class="data-value has-text-centered is-size-4">
                  {{ pedido.fecha }}
                </td>
                <td class="data-value has-text-centered is-size-4">
                  {{ pedido.sujetoObligado }}
                </td>
                <td class="data-value has-text-centered is-size-4">
                  <p v-for="(detalleResumen, index) in pedido.resumen" :key="index" >
                    {{ detalleResumen }}
                  </p>
                </td>
                <td class="data-value has-text-centered is-size-4">
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
      pedidos: []
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
      return link.match(/http(s):\/\//) ? link : null
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
</style>
