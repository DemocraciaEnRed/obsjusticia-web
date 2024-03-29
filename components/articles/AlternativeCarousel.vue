<template>
  <section class="" :id="scrollId">
    <h1 class="title is-3">
      Artículos relacionados
    </h1>
    <div v-if="$fetchState.pending" class="section">
      <h4 class="subtitle has-text-white is-4 has-text-centered">
        <i class="fas fa-sync fa-spin" />&nbsp; Cargando artículos
      </h4>
    </div>
    <div v-else>
      <div v-if="$fetchState.error" class="section">
        <h4 class="subtitle has-text-white is-4 has-text-centered">
          Ocurrió un error obtuviendo la galeria
        </h4>
      </div>
      <div v-else class="columns">
        <div v-for="article in articles" :key="`article-${article.slug}`" class="column articles-card">
          <NuxtLink :to="`/articulos/${article.slug}`">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1" :style="`background-image: url(${article.image}`" />
              </div>
              <div class="card-content py-5 px-4 is-flex is-flex-direction-column is-justify-content-space-between">
                <div>
                  <div class="is-clearfix mb-3">
                    <p class="has-text-weight-bold is-raleway is-uppercase is-pulled-left">
                      {{ article.category }}
                    </p>
                    <p class="is-raleway is-uppercase has-text-grey is-pulled-right">
                      {{ article.date && article.date.slice(0,10) }}
                    </p>
                  </div>
                  <p class="title is-5 is-raleway has-text-weight-bold is-marginless">
                    {{ article.title }}
                  </p>
                  <p class="subtitle is-6 is-raleway has-text-grey mt-2">
                    {{ article.author }}
                  </p>
                </div>
                <p class="my-5">
                  <!-- {{ article.description }} -->
                </p>
                <!-- <div class="tags">
                  <span v-for="(tag,index2) in article.tags" :key="`tag-${index2}`" class="tag is-special is-capitalized">{{ tag }}</span>
                </div> -->
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="has-text-centered my-5">
      <a href="/articulos" class="button is-primary-dark"><span class="mr-3">Ver todos los artículos</span><i class="fas fa-arrow-right" /></a>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    article: {
      required: false,
      default: () => {}
    },
    relatedTagUuid: {
      required: false,
      default: () => ''
    },
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  },
  fetchOnServer: false,
  async fetch () {
    const version = this.$nuxt.context._storyblok || this.$nuxt.context.isDev ? 'draft' : 'published'

    const options = {
      starts_with: 'articulos',
      per_page: 5,
      resolve_relations: 'Articulo.author,Articulo.tags',
      version,
      'filter_query[tags][in_array]': this.article ? _(this.article.tags).map('uuid').join() : this.relatedTagUuid
    }

    const titleFilter = this.article ? { 'filter_query[title][not_like]': this.article.title } : {}
    const optionsWithTitleFilter = _.assign({}, options, titleFilter)
    const res = await this.$storyapi
      .get('cdn/stories/', optionsWithTitleFilter)

    const _articles = res.data.stories.map(a => (
      {
        ...a.content,
        order: a.content.order || 99,
        slug: a.slug,
        author: a.content.author,
        tags: a.content.tags && a.content.tags.map(t => t.name)
      }))
      .filter(a => this.article ? a.slug !== this.article.slug : true)

    _articles.sort((a, b) => {
      return parseInt(a.order) - parseInt(b.order)
    })

    this.articles = _articles
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
        slidesToShow: 5,
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
.articles-card {
  padding: 10px 7px 15px 7px;
  z-index: 100;
  .title{
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
  .card-content{
    min-height: 190px;
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
