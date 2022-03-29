<template>
<BulmaAccordion
 dropdown
    :icon="'caret'"
    :caretAnimation="{
        duration: '.6s',
        timerFunc: 'ease-in-out'
    }"
    :slide="{
        duration: '.9s',
        timerFunc: 'ease'
    }">
  <section :id="scrollId" class="hero is-small">
      <div class="hero-body px-0 has-text-centered">
        <div class="">
          <BulmaAccordionItem>
            <div slot="title" class="hero-body px-0 has-text-centered hero-config">
              Desagregacion de los indices
            </div>
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
                    Conocé la metodología utilizada para medir el cumplimiento de la Ley de Acceso a la Información.
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
                    <a href="/pdf/Metodología-de-medición_transparencia.pdf" target="_blank" class="download-button">Descargar</a>
                  </h1>
                </div>
              </div>
            </div>
          </BulmaAccordionItem>
        </div>
      </div>
    </section>
</BulmaAccordion>
</template>
<script>
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'
export default {
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  },
  components: {
    BulmaAccordion,
    BulmaAccordionItem
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

  }
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
