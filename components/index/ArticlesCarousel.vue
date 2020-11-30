<template>
  <section>
    <div v-if="$fetchState.pending" class="section">
      <h4 class="subtitle has-text-primary is-4 has-text-centered">
        <i class="fas fa-sync fa-spin" />&nbsp; Cargando articulos
      </h4>
    </div>
    <div v-else>
      <div v-if="$fetchState.error" class="section">
        <h4 class="subtitle has-text-primary is-4 has-text-centered">
          Ocurrió un error obtuviendo la galeria
        </h4>
      </div>
      <div v-else class="my-6">
        <VueSlickCarousel v-bind="settings">
          <div v-for="article in articles" :key="`article-${article.id}`" class="articles-card">
            <div class="card is-flex is-justify-content-space-around is-flex-direction-column">
              <div class="card-content is-flex-grow-1">
                <p class="title">
                  {{ article.title }}
                </p>
                <p class="subtitle">
                  Jeff Atwood
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <i class="fas fa-eye" />&nbsp;Leer el articulo
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  fetchOnServer: false,
  async fetch () {
    const articles = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
    this.articles = articles.slice(0, 10)
  },
  data () {
    return {
      test: 0,
      articles: [],
      settings: {
        dots: true,
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
              slidesToShow: 2,
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
.articles-card {
  padding: 30px 10px;
  .card{
    height: 200px;
  }
  .title{
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
