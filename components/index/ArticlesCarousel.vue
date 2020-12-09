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
      <div v-else class="m-6">
        <h3 class="articulos-title my-5">
          Articulos
        </h3>
        <VueSlickCarousel v-bind="settings">
          <div v-for="article in articles" :key="`article-${article.id}`" class="articles-card">
            <NuxtLink :to="`articulos/${article.id}`">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-5by5">
                    <img :src="require(`../../assets/images/${article.imagen}.jpg`)" :alt="`${article.title}`">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6">
                        {{ article.fecha }}
                      </p>
                    </div>
                  </div>
                  <div class="content">
                    <p class="title is-4">
                      {{ article.titulo }}
                    </p>
                    {{ article.autor }}
                  </div>
                </div>
              </div>
            </NuxtLink>
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
    const articles = await this.$axios.$get('http://localhost:3000/articulos.json')
    this.articles = articles.slice(0, 6)
  },
  data () {
    return {
      test: 0,
      articles: [],
      settings: {
        arrows: true,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    .media{
      margin-bottom: 0.8em;
    }
  }
  .title{
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
  .articulos-title{
    font-size: 30px;
    font-weight: 900;
    text-align: left;
    color: #000000;
    margin-left: 2em;
  }

  .image{
    overflow: hidden;
    height: 26em;
    img{
      width: 100%;
      height: auto;
    }
  }
</style>
