<template>
  <section class="specialbg">
    <Sidebar />
    <div class="py-6">
      <div class="my-6 py-6">

        <div class="columns">
          <div class="column is-8 is-offset-2">
            <Header scroll-id="ley" />
            <Seleccion scroll-id="seleccion" />
            <Vacantes scroll-id="vacantes" />
            <Proceso scroll-id="proceso" />
            <Puntajes scroll-id="puntajes" />
            <Influencias scroll-id="influencias" />
            <Conclusiones scroll-id="conclusiones" />
            <Lexico scroll-id="lexico" />
            <ArticlesAlternativeCarousel relatedTagUuid="1564af41-303f-4138-8aea-91a442732f53" scroll-id="articulos-relacionados"/>
            <Fuentes scroll-id="fuentes" />
          </div>
          <!-- <div class="column is-2">
            <Sidebar />
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from '~/components/concursos/Sidebar'
import Header from '~/components/concursos/Header'
import Seleccion from '~/components/concursos/Seleccion'
import Vacantes from '~/components/concursos/Vacantes'
import Proceso from '~/components/concursos/Proceso'
import Puntajes from '~/components/concursos/Puntajes'
import Influencias from '~/components/concursos/Influencias'
import Conclusiones from '~/components/concursos/Conclusiones'
import Lexico from '~/components/concursos/Lexico'
import Fuentes from '~/components/concursos/Fuentes'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Header,
    Sidebar,
    Seleccion,
    Vacantes,
    Proceso,
    Puntajes,
    Influencias,
    Conclusiones,
    Lexico,
    Fuentes
  }
}
</script>

<style lang="scss" scoped>

h1{
  font-family: 'Raleway', $family-sans-serif;
  color: #000000;
  font-size: 50pxrem;
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
</style>
