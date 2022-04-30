<template>
  <div class="bg-container block-item is-flex is-flex-direction-column is-justify-content-space-around has-text-centered" :style="{backgroundImage: `url(${blocks[activeBlock].background})`}">
    <h1 class="is-uppercase has-text-white header-text is-size-2-mobile">Por una justicia<br>transparente y abierta</h1>
    <div class="has-text-centered">
      <h4 class="is-uppercase cards-title">Datos abiertos e interactivos sobre el sistema judicial argentino</h4>
      <div class="container py-6">
        <div class="tile is-ancestor">
          <div class="tile is-parent mx-4">
            <article class="tile is-child box">
              <p class="title">Concursos de magistradas y magistrados</p>
              <span>Ir</span>
            </article>
          </div>
          <div class="tile is-parent mx-4">
            <article class="tile is-child box">
              <p class="title">Denuncias contra juezas y jueces</p>
              <span>Ir</span>
            </article>
          </div>
          <div class="tile is-parent mx-4">
            <article class="tile is-child box">
              <p class="title">Transparencia del sistema de justicial</p>
              <span>Ir</span>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
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
</style>
