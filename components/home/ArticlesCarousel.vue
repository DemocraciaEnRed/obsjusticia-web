<template>
  <section class="p-5">
    <div class="container">
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
            <NuxtLink :to="`articulos/${article.slug}`">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1" :style="`background-image: url(${article.image}`" />
                </div>
                <div class="card-content py-5 px-4 is-flex is-flex-direction-column is-justify-content-space-between">
                  <div class="my-1">
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
                  <!-- <p class="my-1">
                    {{ article.description }}
                  </p> -->
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="column articles-card">
            <div class="card articles-redirect-card has-background-success is-flex is-flex-direction-column">
              <h2 class="has-text-white is-uppercase is-pulled-left pt-6 pl-4 is-chivo" style="line-height: 55px;">Más<br>artículos</h2>
              <a class="next-icon is-flex is-justify-content-end" href="/articulos">
                <i class="fas fa-arrow-right fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  fetchOnServer: false,
  async fetch () {
    const version = this.$nuxt.context._storyblok || this.$nuxt.context.isDev ? 'draft' : 'published'
    const res = await this.$storyapi
      .get('cdn/stories/', {
        starts_with: 'articulos/',
        per_page: 3,
        resolve_relations: 'Artiuclo.author,Articulo.tags',
        version
      })

    this.articles = res.data.stories.map(a => (
      {
        ...a.content,
        slug: a.slug,
        tags: a.content.tags && a.content.tags.map(t => t.name)
      }))
  },
  data () {
    return {
      test: 0,
      articles: []
    }
  }
}
</script>

<style lang="scss" scoped>
.monkey{
  margin-top: -50px;
  @include from($desktop) {
    margin-top: -100px;
  }
}
.card .card-content {
  height: 240px!important;
}
.articles-card {
  padding: 10px 7px 15px 7px;
  z-index: 100;
  height:100% !important;
  .title{
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    // min-height: 60px;
  }
}

  .card-image .image{
    background-size: cover;
    background-position: center center;
  }
  .articles-redirect-card{
    height: 100%;
    max-height: 400px;
    //  @include from(769px) {
    //       min-height: 327px;
    //       font-size: 30px !important;

    // }
    //  @include from(1280px) {
    //       min-height: 400px;
    //       font-size: 40px !important;
    // }
  }
  .articles-redirect-card .next-icon{
    color: white;
    margin-top: auto;
    padding: 15px;
  }
  // .image{
  //   overflow: hidden;
  //   height: 26em;
  //   img{
  //     width: 100%;
  //     height: auto;
  //   }
  // }
  @include tablet-only{
    .articles-redirect-card{
      height: 100%;
      max-height: 400px;
      min-height: 327px;
    }
}
@include desktop-only{
    .articles-redirect-card{
      height: 100%;
      max-height: 400px;
      min-height: 351px;
    }
}
@include widescreen{
    .articles-redirect-card{
      height: 100%;
      max-height: 400px;
      min-height: 400px;
    }
}

 @include tablet-only {
    .articles-redirect-card h2{
        font-size: 30px !important;
    }
}
@include desktop-only {
    .articles-redirect-card h2{
        font-size: 30px !important;
    }
}
@include widescreen {
    .articles-redirect-card h2{
        font-size: 40px !important;
    }
}
</style>
