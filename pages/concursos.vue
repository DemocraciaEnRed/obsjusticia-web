<template>
  <section class="specialbg">
    <div v-if="contestType">
      <Sidebar />
    </div>
    <div class="py-6">
      <div class="my-6 py-6">
        <SideTypePicker v-model="contestType" class="is-hidden-mobile" />
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <Header scroll-id="ley" v-model="contestType"/>
            <div v-if="contestType == 'judges'">
              <Jueces />
            </div>
            <div v-else-if="contestType == 'attorneys'">
            </div>
             <div v-if="contestType">
              <ArticlesAlternativeCarousel relatedTagUuid="1564af41-303f-4138-8aea-91a442732f53" scroll-id="articulos-relacionados"/>
              <Fuentes scroll-id="fuentes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideTypePicker from '~/components/concursos/SideTypePicker'
import Header from '~/components/concursos/Header'
import Jueces from '~/components/concursos/jueces'
import ArticlesAlternativeCarousel from '~/components/articles/AlternativeCarousel'
import Fuentes from '~/components/concursos/Fuentes'
import Sidebar from '~/components/concursos/Sidebar'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    SideTypePicker,
    Header,
    Jueces,
    ArticlesAlternativeCarousel,
    Fuentes,
    Sidebar
  },
  data () {
    return {
      contestType: ''
    }
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
  background-color: #EDF2FE;
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
