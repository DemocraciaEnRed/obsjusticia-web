<template>
  <div>
    <div class="hero is-black is-medium bg-container2">
      <div class="hero-body">
        <div class="container">
          <div class="is-hidden-mobile">
            <br>
            <br>
            <br>
          </div>
          <h2 class="has-text-white has-text-centered has-text-weight-bold is-uppercase">
            Entrevistas, columnas e Investigaciones
          </h2>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="box">
          <p class="is-uppercase is-size-5 mb-3">
            Filtrar por Autor
          </p>
          <div class="field has-addons">
            <div class="control has-icons-left is-expanded">
              <input v-model="searchAuthor" class="input" type="text" placeholder="Buscar por autor" @keydown="reloadSearch">
              <span class="icon is-small is-left">
                <i class="fas fa-search" />
              </span>
            </div>
            <div class="control">
              <a class="button is-link" @click="reloadSearch">
                Buscar
              </a>
            </div>
          </div>
          <div class="columns">
            <div class="column is-narrow">
              <p class="is-uppercase is-size-5 mb-3">
                Filtrar por tipo de articulo
              </p>
              <div class="tags">
                <span v-for="category in categories" :key="category" class="tag is-light is-medium is-clickable" :class="{ 'is-link': categoryIsSelected(category) }" @click="toggleCategory(category)">{{ category }}</span>
              </div>
            </div>
            <div class="column is-narrow">
              <p class="is-uppercase is-size-5 mb-3">
                Filtrar por tipo de articulo
              </p>
              <div class="select">
                <select v-model="dateOrder" class="control" @change="reloadSearch">
                  <option value="" disabled>
                    ORDENAR POR
                  </option>
                  <option value="desc" selected>
                    MÁS RECIENTES
                  </option>
                  <option value="asc">
                    MÁS ANTIGUOS
                  </option>
                </select>
              </div>
            </div>
          </div>
          <p class="is-uppercase is-size-5 my-3">
            Filtrar por tema
          </p>
          <div class="tags">
            <span v-for="tag in tags" :key="tag.slug" class="tag is-light is-medium is-clickable" :class="{ 'is-link': tagIsSelected(tag) }" @click="toggleTag(tag)">{{ tag.name }}</span>
          </div>
        </div>
        <ArticlesMasonry :articles="articles || []" @update="reloadSearch" />
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
  </div>
</template>

<script>
import ArticlesMasonry from '@/components/articles/ArticlesMasonry'
// import _ from 'lodash'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    ArticlesMasonry,
    InfiniteLoading
  },
  async asyncData (context) {
    try {
      const res = await context.app.$storyapi.get('cdn/stories/', {
        starts_with: 'articulos/',
        resolve_relations: 'Articulo.author,Articulo.tags',
        per_page: 16,
        page: 1,
        version: 'published',
        sort_by: 'published_at:desc',
        filter_query: {
          // author: {
          //   in: 'Ezequiel Nino'
          // }
          // tags: {
          //   in_array: '301fa125-c866-48d0-be5f-6d9c765306ca'
          // }
        }
      })
      const articles = res.data.stories
      const resTags = await context.app.$storyapi.get('cdn/stories/', {
        starts_with: 'tags/',
        sort_by: 'name:asc',
        version: 'published'
      })
      const tags = resTags.data.stories.map((tag) => {
        return {
          name: tag.name,
          slug: tag.slug,
          id: tag.id,
          uuid: tag.uuid
        }
      })
      return {
        articles: articles.map(a => ({
          ...a.content,
          slug: a.slug
        })),
        tags,
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
      selectedTags: [],
      categories: ['Columna', 'Investigación', 'Entrevista'],
      selectedCategory: null,
      searchAuthor: '',
      dateOrder: 'desc',
      storiesPerPage: 16,
      totalPages: 0,
      totalStories: 0
    }
  },
  methods: {
    async infiniteHandler ($state) {
      try {
        const res = await this.$nuxt.context.app.$storyapi.get('cdn/stories/', {
          starts_with: 'articulos/',
          resolve_relations: 'Articulo.author,Articulo.tags',
          per_page: 16,
          page: this.page++,
          version: 'published'
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
    },

    async reloadSearch (objQuery) {
      // const { tags, categories, search } = objQuery
      const filterQuery = this.getFilters()

      const articles = await this.$nuxt.context.app.$storyapi.get('cdn/stories/', {
        starts_with: 'articulos/',
        resolve_relations: 'Articulo.author,Articulo.tags',
        per_page: 16,
        page: 1,
        version: 'published',
        sort_by: `published_at:${this.dateOrder}`,
        filter_query: filterQuery
      })
      this.articles = articles.data.stories.map(a => ({
        ...a.content,
        slug: a.slug
      }))
      this.page = 2
    },
    categoryIsSelected (category) {
      return this.selectedCategory === category
    },
    tagIsSelected (tag) {
      return this.selectedTags.includes(tag.uuid)
    },
    toggleCategory (category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = null
      } else {
        this.selectedCategory = category
      }
      this.reloadSearch()
    },
    toggleTag (tag) {
      if (this.selectedTags.includes(tag.uuid)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag.uuid)
      } else {
        this.selectedTags.push(tag.uuid)
      }
      this.reloadSearch()
    },
    getFilters () {
      const filterQuery = {}
      if (this.selectedTags.length > 0) {
        filterQuery.tags = {
          in_array: this.selectedTags.join(',')
        }
      }
      if (this.selectedCategory) {
        filterQuery.category = {
          in: this.selectedCategory
        }
      }
      if (this.searchAuthor) {
        filterQuery.author = {
          like: `*${this.searchAuthor}*`
        }
      }
      return filterQuery
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-container2{
  background-image: url('/bloques/bloque01.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
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

.search-text-row{
  display: inline-block;
}
.search-input-container{
  padding-top: 7px;
  position: relative;
  float: right;
  @media (max-width: $desktop){
    float: none;
    margin-bottom: 20px;
  }
}
.search-input-container i{
  position: absolute;
  right: 15px;
  top: 16px;
  font-size: 20px;
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
