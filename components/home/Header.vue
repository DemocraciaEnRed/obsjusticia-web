<template>
  <div class="bg-container block-item is-flex is-flex-direction-column is-justify-content-space-around has-text-centered" :style="{backgroundImage: `url(${blocks[activeBlock].background})`}">
    <h1 class="is-uppercase has-text-white header-text is-size-2-mobile">Por una justicia<br>transparente y abierta</h1>
    <div class="has-text-centered">
      <h4 class="is-uppercase cards-title">Datos abiertos e interactivos sobre el sistema judicial argentino</h4>
      <div class="container section py-6">
        <div class="tile is-ancestor">
          <div class="tile is-parent mx-4">
            <article class="tile is-child box box-config">
              <a  href="/concursos">
                <div>
                  <p class="title has-text-left">Concursos de magistradas y magistrados</p>
                  <div class="next-icon is-flex is-justify-content-end">
                    <i class="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
                <div class="label-hidden">
                  <p >Analizá los procesos de selección del Poder Judicial y el Ministerio Público Fiscal</p>
                </div>
              </a>
            </article>
          </div>
          <div class="tile is-parent mx-4">
            <article class="tile is-child box box-config">
              <a href="/procesos-disciplinarios">
                <div>
                  <p class="title has-text-left">Denuncias contra juezas y jueces</p>
                  <div class="next-icon is-flex is-justify-content-end" >
                    <i class="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
                <div class="label-hidden">
                  <p >Conocé como el Consejo de la Magistratura controla y sanciona a las y los jueces</p>
                </div>
              </a>
            </article>
          </div>
          <div class="tile is-parent mx-4">
            <article class="tile is-child box box-config">
              <a href="/transparencia">
                <div>
                  <p class="title has-text-left">Transparencia del sistema de justicia</p>
                  <div class="next-icon is-flex is-justify-content-end" >
                    <i class="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
                <div class="label-hidden">
                  <p >Consultá que tan transparente es el poder judicial y los organismos del Ministerio Público</p>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  fetchOnServer: false,
  async fetch () {
    const articles = await this.$content('articles')
      .where({ highlight: true })
      .only(['slug', 'title', 'description', 'date', 'category', 'author', 'image', 'imageCover', 'tags'])
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
      .catch((err) => {
        // error({ statusCode: 404, message: 'Page not found' })
        console.log(err)
      })
    articles.forEach((article) => {
      this.blocks.push({
        title: article.title,
        content: article.description,
        urlMore: null,
        route: `/articulos/${article.slug}`,
        background: require(`../../assets/img/articulos/${article.imageCover}`),
        isArticle: true
      })
    })
  },
  // if you need use a external link, should use urlMore property (and route: null)
  // or if you need use a internal link, should use route property (and urlMore: null)
  data () {
    return {
      activeBlock: 0,
      blocks: [
        {
          title: '¿Qué es JusTA?',
          content: 'Plataforma JusTA es una iniciativa para el intercambio de información, propuestas, diálogos y reclamos sobre el sistema de justicia. Promovemos una mayor apertura y rendición de cuentas del Poder Judicial y los Ministerios Públicos a través de una sección de artículos de análisis y otras de datos abiertos sobre procesos de selección y disciplinarios de jueces, juezas y fiscales, y un ranking de transparencia de estas instituciones.',
          urlMore: null,
          route: '/quienes-somos',
          background: '/bloques/bloque01.jpg',
          isArticle: false
        },
        {
          title: 'jusTA | justicia transparente y abierta',
          content: '#JusTA. El consenso es que la justicia necesita cambios. Pero, ¿qué cambios necesita y quiénes deberían impulsarlos? Necesitamos un debate de calidad, por una Justicia Transparente y Abierta. MIRÁ EL VIDEO >>>',
          urlMore: 'https://youtu.be/B0wMK2QOq6c',
          route: null,
          background: '/bloques/bloqueVideo.png',
          isArticle: false
        },
        {
          title: 'Nuestros artículos',
          content: 'Entrá acá para ver nuestros artículos sobre el funcionamiento de la justicia, transparencia, selección de jueces/as y fiscales, procesos disciplinarios y género y justicia.',
          urlMore: null,
          route: '/articulos',
          background: '/bloques/bloque01.jpg',
          isArticle: false
        }
      ]
    }
  },
  computed: {
    activeBg () {
      return this.blocks[this.activeBlock].background
    },
    theBlocks () {
      return this.blocks
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-container{
//   background-size: cover;
//   background-position: center center;
//   -webkit-transition: background 1s linear;
// transition: background 1s linear;
position: relative;
// overflow: hidden;
}
.container-config{
  margin: 0 120px;
}
.imgBg{
  background-size: cover;
  background-position: center center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.block-item{
  // padding-bottom: 200px;

  @media screen and (min-width: $tablet){
  padding-top: 140px;
  min-height: 700px;
  padding: 0;
  }
}
.container{
  z-index: 10;
}
.header-text{
  line-height: 74px;
  letter-spacing: 0.1em;
  margin-top: 20vh;
}
.cards-title{
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  margin-top: 5vh;
  color: #1DD1A1;
}
.cards-container{
  width: 60%;
  margin: 0 auto;
}
.title{
  font-weight: 400;
}
.next-icon{
  color: #1ED0A1;
  position: absolute;
  bottom: 15px;
  right: 15px;
  transition: 1s;
}
.tile .is-ancestor{
  width: 100%;
}
.box-config{
  max-width: 250px !important;
  min-height: 250px !important;
  position: relative;
}
.label-hidden{
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: #1DD1A1;
  position: absolute;
  top:0%;
  left: 0%;
  border-radius: inherit;
  padding: 10px;
  padding-top: 15px;
  text-align: left;
  font-family: inherit;
  color: #fff;
  font-size: 20px;
  transition: .5s;
}
.box:hover .label-hidden{
  opacity: 1;
}
.box:hover .next-icon{
  color: #fff;
  z-index: 1000;
}
</style>
