<template>
  <section class="specialbg">
    <div class="py-6">
      <div class="my-6 py-6">
        <Sidebar />
        <div class="columns">
          <div class="column is-8 is-offset-2">

            <Header scroll-id="ley" />
            <PedidosInformes scroll-id="pedidos-informes" />
            <Cumplimiento scroll-id="cumplimiento" />
            <GraficoIndices scroll-id="grafico-indices" />
            <GraficoCumplimiento scroll-id="grafico-cumplimiento" />
            <GraficoDesagregacion scroll-id="grafico-desagregacion" />
            <InformacionAdicional scroll-id="informacion-adicional" />
            <Conclusiones scroll-id="conclusiones" />
            <Glosario scroll-id="glosario" />
            <ArticlesAlternativeCarousel relatedTagUuid="d7a60eec-bd2d-4b72-9342-3995837bf443" scroll-id="articulos-relacionados" />
            <Fuentes scroll-id="fuentes" />
          </div>
          <!-- <div class="column is-2 sidebar">
            <Sidebar />
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from '~/components/transparencia/Sidebar'
import Header from '~/components/transparencia/Header'
import PedidosInformes from '~/components/transparencia/PedidosInformes'
import Cumplimiento from '~/components/transparencia/Cumplimiento'
import GraficoIndices from '~/components/transparencia/GraficoIndices'
import GraficoCumplimiento from '~/components/transparencia/GraficoCumplimiento'
import GraficoDesagregacion from '~/components/transparencia/GraficoDesagregacion'
import Glosario from '~/components/transparencia/Glosario'
import Conclusiones from '~/components/transparencia/Conclusiones'
import InformacionAdicional from '~/components/transparencia/InformacionAdicional'
import Fuentes from '~/components/transparencia/Fuentes'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Header,
    PedidosInformes,
    Sidebar,
    Cumplimiento,
    GraficoIndices,
    GraficoCumplimiento,
    GraficoDesagregacion,
    Glosario,
    Conclusiones,
    InformacionAdicional,
    Fuentes
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
.sidebar{
  padding-right: 50px;
}
.columns{
  margin-right: 0px;
}
</style>
