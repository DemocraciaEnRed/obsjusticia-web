<template>
  <div>
    <no-ssr>
      <!-- <div v-if="$fetchState.pending" class="section">
        <h4 class="subtitle has-text-dark is-4 has-text-centered">
          <i class="fas fa-sync fa-spin" />&nbsp; Cargando artículos
        </h4>
      </div>
      <div v-else>
        <div v-if="$fetchState.error" class="section">
          <h4 class="subtitle has-text-white is-4 has-text-centered">
            Ocurrió un error obtuviendo la galeria
          </h4>
        </div> -->
      <!-- <div v-else class=""> -->
      <div class="is-flex is-flex-direction-column">
        <h1 class="es-raleway is-size-1-touch search-text-row mb-4 has-text-white is-uppercase">
          Entrevistas, columnas e Investigaciones
        </h1>
        <div class="search-text-row search-input-container">
          <i class="fa fa-search"></i>
          <input v-model="searchText" class="search-input" placeholder="AUTOR/A   (Nombre/Apellido)">
        </div>
      </div>
      <div class="" style="height:150px"></div>
      <div class="is-flex is-align-items-center is-align-content-center my-6">
        <div class="is-uppercase is-align-self-flex-start">
          <h5>Filtrar por tipo de articulo</h5>
           <div v-for="category in categories" v-bind:key="category" class="tag filter-pills-container" v-bind:class="{ 'filter-pill-active': categoryIsSelected(category) }">
          <input class="filter-pill" type="checkbox" :id="category" :value="category" v-model="appliedCategories">
          <label :for="category" class="pill-label noSelect">{{ toUpper(category) }}</label>
        </div>
        </div>
        <div class="date-sorter-container is-align-self-flex-end" >
          <select v-model="dateOrder" class="date-sorter">
            <option value="" disabled>ORDENAR POR</option>
            <option value="desc" selected>MÁS RECIENTES</option>
            <option value="asc">MÁS ANTIGUOS</option>
          </select>
        </div>
      </div>
      <div class="has-text-left">
        <h5 class="filters-title is-uppercase">Filtrar por Tema</h5>
        <div v-for="tag in tags" v-bind:key="tag.slug" class="tag filter-pills-container" v-bind:class="{ 'filter-pill-active': tagIsSelected(tag) }">
          <input class="filter-pill" type="checkbox" :id="tag.slug" :value="tag.slug" v-model="appliedTags">
          <label :for="tag.slug" class="pill-label noSelect">{{ tag.name }}</label>
        </div>
        </br>
      </div>
      <div v-masonry transition-duration="0.5s" item-selector=".articles-card" class="masonry-container" horizontal-order="true">
        <div v-if="filteredAndSortedArticles.length">
          <div v-for="(article, key) in filteredAndSortedArticles" :key="article.slug + key" v-masonry-tile class="articles-card" >
            <NuxtLink :to="`articulos/${article.slug}`">
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
                    <!-- <p class="subtitle is-6 is-raleway has-text-grey mt-2">
                          {{ article.order }}
                        </p> -->
                  </div>
                  <p class="my-5">
                    {{ article.description }}
                  </p>
                  <div class="tags">
                    <span v-for="tag in article.tags" :key="tag.slug" class="tag is-special is-capitalized">{{ tag.name }}</span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="empty-filter-results" v-else>No hay artículos que coincidan con la búsqueda</div>
      </div>
      <!-- </div>
      </div> -->
    </no-ssr>
  </div>
  </no-ssr>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  fetchOnServer: false,
  props: {
    articles: [],
    tags: [],
    categories: []
  },
  mounted () {
    this.$redrawVueMasonry()
  },
  data () {
    return {
      appliedTags: [],
      appliedCategories: [],
      searchText: '',
      dateOrder: 'desc'
    }
  },
  computed: {
    filteredAndSortedArticles () {
      const appliedTags = this.appliedTags
      const appliedCategories = this.appliedCategories
      const searchText = this.searchText
      return _(this.articles)
        .filter(({ tags = [], category, author }) => {
          const tagsApply = !_.isEmpty(appliedTags) ? _.find(tags, ({ slug }) => _.includes(appliedTags, slug)) : true
          category = _.includes(category, 'investigacion') ? 'investigacion' : category
          const toComparableText = category => _.chain(category).toLower().deburr().value()
          const categoryApplies = !_.isEmpty(appliedCategories) ? _(appliedCategories).map(toComparableText).includes(toComparableText(category)) : true
          const textMatches = searchText && searchText.length >= 3 ? _.includes(toComparableText(author), toComparableText(searchText)) : true
          return tagsApply && categoryApplies && textMatches
        })
        .orderBy('date', this.dateOrder)
        .value()
    }
  },
  methods: {
    tagIsSelected ({ slug }) {
      return _.includes(this.appliedTags, slug)
    },
    categoryIsSelected (category) {
      return _.includes(this.appliedCategories, category)
    },
    toUpper (string) {
      return _.toUpper(string)
    }
  }
}
</script>

<style lang="scss" scoped>
.articles-card {
  padding: 10px 7px 15px 7px;
  z-index: 100;
  @media (max-width: $desktop){
    width: 100%;
    position: relative !important;
    top: 0 !important;
    left: 0 !important;
  }
  @include from($desktop) {
    width: calc(100% / 4);
  }
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
  .filter-pills-container{
    flex: 1 0 21%;
    margin: 5px;
    background-color: #F5F5F5;
    border-radius: 10px;
    font-size: 12px;
    padding: 0;
  }
  .filter-pill{
    display: none;
  }
  .pill-label{
    cursor: pointer;
    padding: 0 9px 0 9px;
  }
  .filter-pill-active{
    background-color: #6C9EFF;
  }
  .noSelect{
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
  }
  .empty-filter-results{
    margin-top: 30px;
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
  .search-input{
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    border-radius: 5px;
    padding: 8px;
    border-width: 3px;
    background: #FFFFFF;
    border: 2px solid #3157AC;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    @media (max-width: $desktop){
      width: 350px;
    }
  }
  ::placeholder {
    color: black;
  }
  .filters-title{
    padding-left: 10px;
    margin-bottom: 10px;
  }
  .date-sorter-container{
    padding: 20px 0 10px 10px;
  }
  .date-sorter{
    background-color: transparent;
    border: none;
    border-bottom: solid 1px;
    width: 200px;
    padding: 10px 0 10px 30px;
  }
  // .image{
  //   overflow: hidden;
  //   height: 26em;
  //   img{
  //     width: 100%;
  //     height: auto;
  //   }
  // }

  @include mobile{
    .es-raleway{
      line-height: 50px;
    }
  }
</style>
