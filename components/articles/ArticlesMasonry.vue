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
      <div class="filter-tags">
        <div v-for="tag in tags" v-bind:key="tag.slug" class="tag filter-tag-container" v-bind:class="{ 'filter-tag-active': tagIsSelected(tag) }">
          <input class="filter-tag" type="checkbox" :id="tag.slug" :value="tag.slug" v-model="filterTags">
          <label :for="tag.slug" class="tag-label noSelect">{{ tag.name }}</label>
        </div>
      </div>
      <div v-masonry transition-duration="0.5s" item-selector=".articles-card" class="masonry-container" horizontal-order="true">
        <div v-for="article in filteredArticles" :key="article.slug" v-masonry-tile class="articles-card">
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
    tags: []
  },
  mounted () {
    this.$redrawVueMasonry()
  },
  data () {
    return {
      filterTags: []
    }
  },
  computed: {
    filteredArticles () {
      const appliedTags = this.filterTags
      return !_.isEmpty(appliedTags)
        ? _.filter(this.articles, ({ tags = [] }) => _.find(tags, ({ slug }) => _.includes(appliedTags, slug)))
        : this.articles
    }
  },
  methods: {
    tagIsSelected ({ slug }) {
      return _.includes(this.filterTags, slug)
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
  .filter-tag-container{
    flex: 1 0 21%;
    margin: 5px;
    background-color: #F5F5F5;
    border-radius: 10px;
    font-size: 12px;
  }
  .filter-tag{
    display: none;
  }
  .tag-label{
    cursor: pointer;
  }
  .filter-tag-active{
    background-color: #6C9EFF;
  }
  .noSelect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
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
