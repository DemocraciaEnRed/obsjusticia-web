<template>
  <section class="has-background-primary p-5">
    <div class="container">
      <div v-if="$fetchState.pending" class="section">
        <h4 class="subtitle has-text-white is-4 has-text-centered">
          <i class="fas fa-sync fa-spin" />&nbsp; Cargando articulos
        </h4>
      </div>
      <div v-else>
        <div v-if="$fetchState.error" class="section">
          <h4 class="subtitle has-text-white is-4 has-text-centered">
            Ocurrió un error obtuviendo la galeria
          </h4>
        </div>
        <div v-else class="">
          <VueSlickCarousel v-bind="settings" class="monkey">
            <div v-for="article in articles" :key="`article-${article.slug}`" class="articles-card">
              <NuxtLink :to="`articulos/${article.slug}`">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-2by1" :style="`background-image: url(${require(`../../assets/images/${article.image}`)})`">
                      <!-- <img :src="require(`../../assets/images/${article.imagen}.jpg`)" :alt="`${article.title}`"> -->
                    </figure>
                  </div>
                  <div class="card-content is-flex is-flex-direction-column is-justify-content-space-between">
                    <p class="is-6 has-text-weight-bold is-raleway is-uppercase">
                      <!-- {{ article.date.split('T')[0] }} -->
                      {{ article.type }}
                      <!-- INFORME -->
                    </p>
                    <p class="title is-size-5 is-raleway has-text-weight-bold">
                      {{ article.title }}
                    </p>
                    {{ article.author }}
                  </div>
                </div>
              </NuxtLink>
            </div>
            <template slot="prevArrow">
              <div class="custom-arrow-left" />
            </template>
            <template slot="nextArrow">
              <div class="custom-arrow-right" />
            </template>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="has-text-centered mb-4">
        <a href="" class="button is-primary-dark"><span class="mr-3">Ver todos los articulos</span><i class="fas fa-arrow-right" /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  fetchOnServer: false,
  async fetch () {
    const articles = await this.$content('articles')
      .only(['slug', 'title', 'date', 'type', 'author', 'image'])
      .sortBy('date', 'desc')
      .limit(7)
      .fetch()
      .catch((err) => {
        // error({ statusCode: 404, message: 'Page not found' })
        console.log(err)
      })
    this.articles = articles
  },
  data () {
    return {
      test: 0,
      articles: [],
      settings: {
        arrows: false,
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              adaptiveHeight: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.monkey{
  margin-top: -100px;
}
.articles-card {
  padding: 10px 10px 20px 10px;
  z-index: 100;
  .title{
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
  .card-content{
    min-height: 160px;
  }
  .card-image .image{
    background-size: cover;
    background-position: center center;
  }
  // .image{
  //   overflow: hidden;
  //   height: 26em;
  //   img{
  //     width: 100%;
  //     height: auto;
  //   }
  // }
</style>
