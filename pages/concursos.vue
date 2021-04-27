<template>
  <section class="specialbg">
    <Header />

    <div id="lexico" class="section">
      <!-- <img id="lexico" src="~/assets/img/001.png" class="image is-centered"> -->
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9">
            <h1 class="title is-2 has-text-centered">
              Léxico para no abogades
            </h1>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Desestimada
                  </h5>
                  <h5 class="subtitle is-5">
                    🗑️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>La mayoría de las causas fueron desestimadas. Un alto número se desestiman <b><i>inlimines</i></b>, esto significa que no cumplen con los requisitos mínimos establecidos por el consejo de la Magistratura</p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Causas caducadas
                  </h5>
                  <h5 class="subtitle is-5">
                    ⚰️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>(Prescribieron) por la falta de voluntad o impericia del Consejo de la Magistratura: la ley establece que tiene <b>3 años</b> para investigar y determinar un veredicto, caso contrario se cierra por la falta de eficiencia del Consejo. En definitiva, todos esos casos son acsos de injusticias.</p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Juicio Político
                  </h5>
                  <h5 class="subtitle is-5">
                    ⚖️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    Algunas denuncias por su nivel de gravedad llegan a un Jurado de Enjuiciamiento
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Sanción
                  </h5>
                  <h5 class="subtitle is-5">
                    👩‍⚖️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    Estas son las causas que tuvieron una sanción, puede ser una sanción firme, sanción disciplinaria y por esto reciben una advertencia, un apercibimiento o una multa
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Renuncia
                  </h5>
                  <h5 class="subtitle is-5">
                    👻
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    En muchos casos el juez renuncia antes de que la denuncia termine
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4 has-background-white px-6 py-5">
              <div class="columns">
                <div class="column is-4">
                  <h5 class="title is-4">
                    Consejo de la Magistratura
                  </h5>
                  <h5 class="subtitle is-5">
                    🏛️
                  </h5>
                </div>
                <div class="column is-8">
                  <p>
                    El Consejo de la Magistratura es el órgano creado por la Constitución para seleccionar jueces y juezas, tramitar procesos disciplinarios o de remoción y administrar los recursos del Poder Judicial de la Nación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="fuente" class="section">
      <div class="container has-text-centered">
        <h1 class="title is-2">
          Fuente y notas
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
          <p>Los datos están <b>incompletos</b> y en muchos casos no podemos certificar su rigurosidad<br>No hay datos publicados con perspectiva de género<br>Intentaremos actualizar y mejorar estos datos</p>
        </div>
      </div>
    </div>
    <div id="creditos" class="section">
      <div class="container has-text-centered">
        <h1 class="title is-2">
          Créditos
        </h1>
        <br>
        <br>
        <h6 class="subtitle is-5 mb-3">
          Idea general
        </h6>
        <a href="https://acij.org.ar" target="_blank"><img src="~/assets/img/acij-logo-black.png" width="150" class="image is-centered"></a>
        <br>
        <br>
        <h6 class="subtitle is-5 mb-3">
          Desarrollado por
        </h6>
        <a href="https://democraciaenred.org" target="_blank"><img src="~/assets/img/logo-der-black.svg" width="150" class="image is-centered"></a>
        <br>
        <br>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/concursos/Header.vue'
export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
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
  // width: 100vw;
  height: 100vh;
  max-height: 1080px;
  overflow-y: hidden;
}
.specialbg{
  background-color: #edf2fe;
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
