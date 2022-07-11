<template>
      <section class="section">
      <div class="my-3 py-6" />
      <div class="container">
        <div class="columns is-centered my-6">
          <div class="column is-8">
            <div id="totales" class="has-text-centered">
              <h1 class=" is-uppercase is-size-4-mobile is-2 is-700">
                Procesos disciplinarios contra jueces y juezas
              </h1>
              <br>
              <p class="is-size-5">
                Te mostramos cómo funcionan los procesos de denuncias a jueces y juezas del Poder Judicial de la Nación.
              </p>
              <br>
              <br>
              <p class="is-size-3 es-oswald is-800">
                <span class="is-700 es-oswald is-size-2">{{ valores['total'] }}</span><span class="is-400"> DENUNCIAS<br> RECIBIDAS<br></span>
              </p>
              <br>
              <br>
            </div>
            <hr class="has-background-black">
            <div class="is-clearfix">
              <p class="is-pulled-left es-oswald is-size-5">
                1998
              </p>
              <p class="is-pulled-right es-oswald is-size-5">
                2022
              </p>
            </div>
            <div class="columns mt-3 is-centered">
              <div class="column is-narrow">
                <div class="px-2">
                  <p class="mb-4"><i class="text-acij fas is-size-2 fa-file" /></p>
                  <span class="text-acij is-700 es-oswald is-size-2">{{ valores['activas'] }}</span><br><span class="text-acij is-400">ABIERTAS<br></span>
                  <hr class="background-acij category-separator">
                </div>
              </div>
              <div class="column is-narrow">
                <div class="px-2">
                  <p class="mb-4"><i class="text-acij fas is-size-2 fa-trash" /></p>
                  <span class="text-acij is-700 es-oswald is-size-2">{{ valores['desestimadas'] }}</span><br><span class="text-acij is-400">DESESTIMADAS<br></span>
                  <hr class="background-acij category-separator">
                </div>
              </div>
              <div class="column is-narrow">
                <div class="px-2">
                  <p class="mb-4"><i class="text-acij fas is-size-2 fa-exclamation-triangle" /></p>
                  <span class="text-acij is-700 es-oswald is-size-2">{{ valores['caducadas'] }}</span><br><span class="text-acij is-400">CADUCADAS<br></span>
                  <hr class="background-acij category-separator">
                </div>
              </div>
              <div class="column is-narrow">
                <div class="px-2">
                  <p class="mb-4"><i class="text-acij fas is-size-2 fa-gavel" /></p>
                  <span class="text-acij is-700 es-oswald is-size-2">{{ valores['sanciones'] }}</span><br><span class="text-acij is-400">SANCIONES<br></span>
                  <hr class="background-acij category-separator">
                </div>
              </div>
              <div class="column is-narrow">
                <div class="px-2">
                  <p class="mb-4"><i class="text-acij fas is-size-2 fa-balance-scale" /></p>
                  <span class="text-acij is-700 es-oswald is-size-2">{{ valores['juiciosPoliticos'] }}</span><br><span class="text-acij is-400">JUICIOS POLÍTICOS<br></span>
                  <hr class="background-acij category-separator">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Denuncias',
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
      `https://sheets.googleapis.com/v4/spreadsheets/1CyseRkBO38H3Zx9PIXZmB6K9WU3h-m2yZd8ezFQWV-E/values/Sheet1?key=${this.$config.googleSheetApiKey}`
    ).then(res => res.json())
    this.valores = this.extractData(data)
  },
  data () {
    return {
      valores: {}
    }
  },
  methods: {
    extractData (data) {
      const theKeys = data.values[0]
      const theValues = data.values[1]
      let cont = 0
      const marker = {}
      theKeys.forEach((entry) => {
        marker[entry] = theValues[cont]
        cont++
      })
      return marker
    }
  }

}
</script>

<style>
.category-separator{
  width: 50%;
  height: 3px;
}

.text-acij{
  color:#3157AC;
}
.background-acij{
  background-color: #3157AC;
}
</style>
