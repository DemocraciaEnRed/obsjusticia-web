<template>
    <section :id="scrollId" class="hero is-small">
      <div class="hero-body px-0 has-text-centered">
        <div class="">
            <div slot="content" class="containe">
              <div class="">
                <div class="my-6 is-flex is-flex-direction-column is-align-items-center is-align-content-center">
                  <h1 class="subtitle is-4">
                    Accedé a los datos de las mediciones realizadas en formatos abiertos.
                  </h1>
                  <h1 class="title is-4 has-text-centered pt-5">
                    <a href="/pdf/Datos-de-las-mediciones-sobre-tansparencia-en-el-PJ-y-MPF_Actualización-Marzo-2021.xlsx" target="_blank" class="download-button">Descargar</a>
                  </h1>
                </div>
                <div class="pt-6 my-6 is-flex is-flex-direction-column is-align-items-center is-align-content-center">
                  <h1 class="subtitle is-4">
                    Conocé la metodología utilizada para medir el cumplimiento de la Ley de Acceso a la Información Pública.
                  </h1>
                  <h1 class="title is-4 has-text-centered pt-5">
                    <a href="/pdf/metodologia-medicion-transparencia.pdf" target="_blank" class="download-button">Descargar</a>
                  </h1>
                </div>
                <div class="pt-6 my-6 is-flex is-flex-direction-column is-align-items-center is-align-content-center">
                  <h1 class="subtitle is-4">
                    Accedé al informe sobre el cumplimiento de la Ley de Acceso a la Información Pública.
                  </h1>
                  <h1 class="title is-4 has-text-centered pt-5">
                    <a href="https://acij.org.ar/wp-content/uploads/2021/09/Informe-Hacia-la-efectiva-mplementacion-de-la-Ley-de-Acceso-a-la-Informacion.pdf" target="_blank" class="download-button">Descargar</a>
                  </h1>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  components: {
  },
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  }
}
</script>

<style lang="scss" scoped>
.download-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;

  position: static;
  width: 222px;
  height: 50px;
  left: 283.5px;
  top: 38px;
  color: #fff;
  background: #3157AC;
  border-radius: 5px;

}
</style>
