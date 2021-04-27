<template>
  <section class="specialbg">
    <div class="py-6">
      <div class="container my-6 py-6">
        <div class="columns">
          <div class="column is-offset-2">
            <Header scroll-id="ley" />
            <TransparenciaActiva scroll-id="transparencia-activa" />
            <TransparenciaPasiva scroll-id="transparencia-pasiva" />
            <SujetosObligados scroll-id="sujetos-obligados" />
            <OrganosGarantes scroll-id="organos-garantes" />
            <Cumplimiento scroll-id="cumplimiento" />
            <GraficoIndices scroll-id="grafico-indices" />
            <GraficoCumplimiento scroll-id="grafico-cumplimiento" />
            <GraficoDesagregacion scroll-id="grafico-desagregacion" />
            <Glosario scroll-id="glosario" />
            <SobreTransparenciaPasiva scroll-id="sobre-pa" />
            <SobreTransparenciaActiva scroll-id="sobre-ta" />
            <SobreOrganosGarantes scroll-id="sobre-og" />
            <InformacionAdicional scroll-id="informacion-adicional" />
            <Fuentes scroll-id="fuentes" />
            <Creditos scroll-id="creditos" />
          </div>
          <div class="column is-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>

    <!--
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
    </div> -->
  </section>
</template>

<script>
import Sidebar from '~/components/transparencia/Sidebar'
import Header from '~/components/transparencia/Header'
import TransparenciaActiva from '~/components/transparencia/TransparenciaActiva'
import TransparenciaPasiva from '~/components/transparencia/TransparenciaPasiva'
import SujetosObligados from '~/components/transparencia/SujetosObligados'
import OrganosGarantes from '~/components/transparencia/OrganosGarantes'
import Cumplimiento from '~/components/transparencia/Cumplimiento'
import GraficoIndices from '~/components/transparencia/GraficoIndices'
import GraficoCumplimiento from '~/components/transparencia/GraficoCumplimiento'
import GraficoDesagregacion from '~/components/transparencia/GraficoDesagregacion'
import Glosario from '~/components/transparencia/Glosario'
import SobreTransparenciaActiva from '~/components/transparencia/SobreTransparenciaActiva'
import SobreTransparenciaPasiva from '~/components/transparencia/SobreTransparenciaPasiva'
import SobreOrganosGarantes from '~/components/transparencia/SobreOrganosGarantes'
import InformacionAdicional from '~/components/transparencia/InformacionAdicional'
import Fuentes from '~/components/transparencia/Fuentes'
import Creditos from '~/components/transparencia/Creditos'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Header,
    Sidebar,
    OrganosGarantes,
    SujetosObligados,
    TransparenciaActiva,
    TransparenciaPasiva,
    Cumplimiento,
    GraficoIndices,
    GraficoCumplimiento,
    GraficoDesagregacion,
    Glosario,
    SobreTransparenciaActiva,
    SobreTransparenciaPasiva,
    SobreOrganosGarantes,
    InformacionAdicional,
    Fuentes,
    Creditos
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
  background-color: #ffeeed;
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
