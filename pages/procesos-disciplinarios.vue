<template>
  <section>
    <Sidebar />
    <Denuncias />
    <!-- grafico de cuadraditos -->
    <div class="overlay-graphs container">
      <!-- <a href="#graphs" class="go-fullscreen button is-dark is-outlined"><i class="fas fa-expand" />&nbsp;&nbsp;Centrar</a> -->
      <!-- <div class="the-buttons buttons is-centered">
        <a href="#lexico" class="button is-primary">Léxico para no abogades</a>
        <a href="#fuente" class="button is-light">Fuentes y notas</a>
        <a href="#creditos" class="button is-light">Créditos</a>
      </div> -->
      <!-- <a href="#graphs" class="go-fullscreen-bottom"><i class="fas fa-arrow-up fa-2x" /></a> -->
      <iframe
        id="graphs"
        src="https://democraciaenred.github.io/obsjusticia-graphs/"
        class="the-graphs"
        scrolling="yes"
        loading="lazy"
        v-resize="{ log: true }"
        frameborder="0"
      />
      <!-- <iframe
        id="graphs"
        src="http://localhost:8000"
        class="the-graphs"
        loading="lazy"
        v-resize="{ log: true }"
        frameborder="0"
      /> -->
    </div>
    <div id="lexico" class="section">
      <!-- <img id="lexico" src="~/assets/img/001.png" class="image is-centered"> -->
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9">
            <!-- <h1 class="title is-2 has-text-centered">
              Conoce el detalle de las causas contra jueces y juezas
            </h1> -->
            <h1 class="title is-2 has-text-centered">
              Glosario
            </h1>
            <div class="my-4 has-background-white px-5 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    🗑 Desestimada
                  </h5>
                </div>
                <div class="column is-8">
                  <p class="is-300">Archivo de la causa por considerar que no hay elementos para avanzar con el caso. La desestimación in limine se produce cuando la denuncia no cumple con los requisitos mínimos establecidos por el Consejo de la Magistratura</p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-5 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    ⚰️ Causas caducadas
                  </h5>
                </div>
                <div class="column is-8">
                  <p class="is-300">Vencimiento del plazo de 3 años para investigar el caso. Transcurrido dicho plazo, no se podrá avanzar con la investigación y se archivará la causa.</p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-5 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    ⚖️ Juicio Político
                  </h5>
                </div>
                <div class="column is-8">
                  <p class="is-300">
                    Proceso de remoción ante el Jurado de Enjuiciamiento. Se podrá ordernar la suspensión de la persona denunciada.
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-5 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    👩‍⚖️ Sanción
                  </h5>
                </div>
                <div class="column is-8">
                  <p class="is-300">
                    Amonestación establecida por conductas indebidas. Las sanciones podrán incluir una advertencia, un apercibimiento o una multa.
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-5 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    👻 Renuncia
                  </h5>
                </div>
                <div class="column is-8">
                  <p class="is-300">
                    La persona denunciada decide dejar su cargo antes de que el proceso disciplinario finalice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="articulos-relacionados" class="section">
      <ArticlesAlternativeCarousel relatedTagUuid="888b86d9-d663-4289-8caa-9675b2b2421f" />
    </div>
    <div id="fuentes" class="section mb-6">
      <div class="container has-text-centered">
        <h1 class="title is-2">
          Fuentes y notas
        </h1>
        <br>
        <h6 class="subtitle is-5">
          Última actualización
        </h6>
        <h6 class="title is-5 is-800">
          {{ $config.dataDateUpdated }}
        </h6>
        <div class="content">
          <p class="is-300">
            Las visualizaciones de esta web se basan en los datos oficiales publicados en el consejo de la magistratura
          </p>
          <p class="is-300">
            Data set original de expedientes en trámite de denuncias a magistrados — <a href="http://consejoabierto.pjn.gov.ar/dataset/expedientesentramite" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
          </p>
          <p class="is-300">
            Data set original de expedientes culminados de denuncias a magistrados — <a href="http://consejoabierto.pjn.gov.ar/dataset/expedientesculminados" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
          </p>
          <p class="is-300">
            Data set original de juicios políticos — <a href="http://consejoabierto.pjn.gov.ar/dataset/juiciospoliticos" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
          </p>
          <p class="is-300">
            Data set creado por ACIJ para las visualizaciones de esta sección - <a href="https://github.com/DemocraciaEnRed/obsjusticia-graphs/tree/master/data" target="_blank" class="has-text-black is-400"><u>accede aquí</u> 🔗</a>
          </p>
          <p>Los datos publicados por el Consejo de la Magistratura están incompletos y en muchos casos no podemos certificar su rigurosidad. No hay datos publicados con perspectiva de género</p>
        </div>
      </div>
    </div>
    <div class="mx-6 pt-6"><br></div>
  </section>
</template>

<script>
import Vue from 'vue'
import iframeResize from 'iframe-resizer/js/iframeResizer'
import Sidebar from '~/components/disciplina/Sidebar.vue'
import Denuncias from '~/components/disciplina/Denuncias.vue'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Sidebar,
    Denuncias
  }
}

Vue.directive('resize', {
  bind (el, { value = {} }) {
    el.addEventListener('load', () => iframeResize(value, el))
  },
  unbind (el) {
    el.iFrameResizer.removeListeners()
  }
})
</script>

<style lang="scss" scoped>

h1{
  font-family: 'Raleway', $family-sans-serif;
  color: #000000;
  font-size: 50px;
}
h2 {
  font-family: 'Raleway', $family-sans-serif;
  color: #000000;
  font-size: 40px;
}
h3 {
  font-family: 'Raleway', $family-sans-serif;
  color: #000000;
  font-size: 35px;
}
h4 {
  font-family: 'Raleway', $family-sans-serif;
  color: #000000;
  font-size: 30px;
}
h5 {
  font-family: 'Raleway', $family-sans-serif;
  color: #000000;
  font-size: 22px;
}
h6 {
  font-family: 'Raleway', $family-sans-serif;
  color: #000000;
  font-size: 20px;
}
body{
  background-color: #fff;
}
.line {
display:inline-block;
width: 100px;
height: 6px;
margin: 1em 0em 2em 0em;
background-color: #00B1AF;
}
.count-number{
  line-height: normal;
}
.the-graphs{
  width: 100%;
  overflow-y: hidden;
}
.specialbg{
  // background-color: #ebebeb;
  background-color: #fff;
}
.overlay-graphs{
  // min-height: 100vh;
  // width: 100vw;
  .the-buttons{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .column{
    position: relative
  }
}
.go-fullscreen{
  position: absolute;
  top: 20px;
  right: 27px;
}
.go-fullscreen-bottom{
  position: absolute;
  bottom: 20px;
  right: 40px;
  color: #6b6b6b;
}
</style>
