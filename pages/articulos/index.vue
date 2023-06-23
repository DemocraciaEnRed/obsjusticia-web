<template>
  <div class="bg-container  is-justify-content-space-around has-text-centered" :style="{backgroundImage: `url('/bloques/bloque01.jpg')`}">
    <section class="">
      <div class="filler" />
      <div class="section has-background-white">
        <div class="container last-articles">
          <!-- <h1 class="title is-1 has-text-white">
            Últimos artículos
          </h1>
          <b-carousel
            :interval="8000"
            :pause-info="false"
            :indicator="false"
            :arrow="false"
          >
            <b-carousel-item v-for="article in articles" :key="article.slug">
              <div class="last-articles-container is-flex">
                <div
                  class="article-picture"
                  :style="`background-image: url(${article.image}`"
                />
                <div
                  class="
                    article-text
                    box
                    is-radiusless
                    has-text-centered
                    is-flex is-flex-direction-column is-justify-content-center
                  "
                >
                  <h1 class="title is-3 has-text-black m-0">
                    {{ article.title }}
                  </h1>
                  <hr>
                  <div class="content has-text-justified">
                    <p class="text-description">
                      {{ article.description }}
                    </p>
                  </div>
                  <div class="is-flex is-flex-direction-ro ending-block">
                    <p>
                      Por {{ article.author }}<span class="mx-2">| </span>
                      {{ article.date && article.date.slice(0, 10) }}
                    </p>
                    <div
                      v-if="article.tags && article.tags.length > 0"
                      class="tags"
                    >
                      <span
                        v-for="(tag, i) in article.tags"
                        :key="`tags${i}`"
                        class="tag is-special is-capitalized"
                      >
                        {{ tag.name }}
                      </span>
                    </div>
                  </div>
                  <div class="mt-5 has-text-centered">
                    <nuxt-link
                      :to="`/articulos/${article.slug}`"
                      class="has-text-primary is-size-5"
                    >
                      Ver el artículo completo
                      <i class="fas fa-arrow-right fa-lg" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </b-carousel-item>
          </b-carousel> -->
          <div class="my-6 py-5">
            <ArticlesMasonry :articles="articles || []" :tags="tags" :categories="categories" />
          </div>
          <client-only>
            <InfiniteLoading @infinite="infiniteHandler">
              <div slot="no-more">
                Fin de los articulos
              </div>
              <div slot="no-results">
                No hay articulos
              </div>
              <div slot="error">
                Error al cargar los articulos
              </div>
            </InfiniteLoading>
          </client-only>
        </div>
      </div>
      <!-- <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-8">
              <div v-for="article in articles" :key="article.slug" class="my-6">
                <nuxt-link :to="`/articulos/${article.slug}`">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-2by1" :style="`background-image: url(${require(`~/assets/images/${article.image}`)})`" />
                    </div>
                    <div class="media-content">
                      <p class="is-raleway is-size-5 has-text-black">
                        {{ article.date.split('T')[0].split('-').reverse().join('-') }}
                      </p>
                      <h1 class="is-raleway is-size-4 has-text-black has-text-weight-bold">
                        {{ article.title }}
                      </h1>
                      <p class="subtitle is-raleway is'size-6">
                        Por {{ article.author }}
                      </p>
                    </div>
                  </div>
                  <div class="content my-3">
                    <i class="is-size-5 is-raleway has-text-justified has-text-black">
                      {{ article.description }}
                    </i>
                    <div v-if="article.tags && article.tags.length > 0" class="tags">
                      <span v-for="(tag,i) in article.tags" :key="`tags${i}`" class="tag is-primary is-capitalized">
                        {{ tag }}
                      </span>
                    </div>
                    <hr class="has-background-black">
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section> -->
    </section>
  </div>
</template>

<script>
import ArticlesMasonry from '@/components/articles/ArticlesMasonry'
import _ from 'lodash'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    ArticlesMasonry,
    InfiniteLoading
  },
  async asyncData (context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    try {
      const res = await context.app.$storyapi.get('cdn/stories/', {
        starts_with: 'articulos/',
        resolve_relations: 'Articulo.author,Articulo.tags',
        per_page: 16,
        page: 1,
        version
      })
      const articles = res.data.stories
      const tags = _(articles).map(a => a.content.tags).flatten().uniqBy('slug').value()
      const categories = ['columnas', 'investigacion', 'entrevista']
      return {
        articles: articles.map(a => ({
          ...a.content,
          slug: a.slug
        })),
        tags,
        categories,
        totalPages: Math.ceil(res.data.total / 16),
        page: 2
      }
    } catch (err) {
      console.error(err.response.data)
      context.error({
        statusCode: err.response.status,
        message: err.response.data
      })
    }

    // const articles = await $content('articles')
    //   .only(['slug', 'title', 'date', 'author', 'image', 'description', 'tags', 'order'])
    //   .sortBy('order', 'asc')
    //   .fetch()
  },
  data () {
    return {
      page: 1,
      articles: [],
      tags: [],
      categories: [],
      storiesPerPage: 16,
      totalPages: 0,
      totalStories: 0
    }
  },
  methods: {
    async infiniteHandler ($state) {
      try {
        const version = this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev ? 'draft' : 'published'
        const res = await this.$nuxt.context.app.$storyapi.get('cdn/stories/', {
          starts_with: 'articulos/',
          resolve_relations: 'Articulo.author,Articulo.tags',
          per_page: 16,
          page: this.page++,
          version
        })
        // merge res.data.stories with this.articles
        if (res.data.stories && res.data.stories.length === 0) {
          $state.complete()
          return
        }
        this.articles = this.articles.concat(res.data.stories.map(a => ({
          ...a.content,
          slug: a.slug
        })))
        $state.loaded()
      } catch (err) {
        console.error(err.response.data)
        this.$nuxt.context.error({
          statusCode: err.response.status,
          message: err.response.data
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-container{
  // background-image: url('~/assets/img/fondoHeader.jpg');
  background-position: top;
  // background-repeat: repeat-x;
}
.media .media-left {
  width: 300px;
}
.media .media-left figure {
  background-size: cover;
  background-position: center center;
}
.filler {
  height: 430px;
}
.last-articles {
  margin-top: -320px;
}
.last-articles-container {
  width: 100%;
  z-index: 10;
  @media (max-width: $desktop) {
    flex-direction: column;
  }
  .article-picture {
    background-size: cover;
    background-position: center center;
    min-height: 300px;
    @include from($desktop) {
      width: 60%;
    }
  }
  .article-text {
    @include from($desktop) {
      width: 50%;
      max-height: 400px;
      min-height: 400px;
    }
    padding: 20px 40px;
    hr {
      width: 200px;
      background-color: #000;
      margin-left: auto;
      margin-right: auto;
    }
    .text-description {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      // line-height: normal;
    }
    .ending-block {
      @media (max-width: $desktop) {
        flex-direction: column;
        .tags {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
