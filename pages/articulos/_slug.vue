<template>
  <section class="has-background-white">
    <div class="filler has-background-primary" />
    <div class="section the-header mb-2">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-6">
            <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
              <ul>
                <li>
                  <nuxt-link :to="`/articulos`" class="has-text-white">
                    Artículos
                  </nuxt-link>
                </li>
                <li class="is-active">
                  <a href="#" class="has-text-white" aria-current="page">{{ article.title }}</a>
                </li>
              </ul>
            </nav>
            <img :src="require(`~/assets/images/${article.image}`)" class="image mb-5" alt="">
          </div>
        </div>
        <h1 class="title is-3 is-size-5-touch mb-3">
          {{ article.title }}
        </h1>
        <p>
          por {{ article.author }}
        </p>
      </div>
    </div>
    <!-- <div class="hero is-dark is-medium">
      <div
        class="background-image"
        :style="`background-image: url(${require(`../../assets/images/${article.image}`)})`"
      >
        <div class="background-dark-layer" />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-size-3-touch has-text-white m-0">
            {{ article.title }}
          </h1>
          <div class="line my-5" />
        </div>
      </div>
    </div> -->
    <!-- <div class="title-container has-text-white" :style="`background-image: url(${require(`../../assets/images/${article.image}`)})`">
      <div class="fondo-negro has-text-centered is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <h1 class="has-text-white">
          {{ article.title }}
        </h1>
        <div class="line mb-6" />
        <p class="is-size-3">
          por {{ article.author }}
        </p>
      </div>
    </div> -->
    <div class="section mt-0 mt-4 mb-0">
      <div class="container mb-6">
        <div class="columns">
          <div class="column is-2">
            <div class="data-content pl-3">
              <p class="mb-2">
                <b>Autor</b>
              </p>
              <p>{{ article.author }}</p>
              <p class="my-2">
                <b>Publicado el</b>
              </p>
              <p>{{ article.date.split('T')[0] }}</p>
              <p class="my-2">
                <b>Tags</b>
              </p>
              <div v-if="article.tags && article.tags.length > 0" class="tags">
                <span v-for="(tag,i) in article.tags" :key="`tags${i}`" class="tag is-special is-capitalized">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="column is-8">
            <div class="content has-text-justified">
              <p class="is-chivo">
                <i>{{ article.description }}</i>
              </p>
              <hr>
              <nuxt-content :document="article" class="" />
            </div>
            <div v-if="article.tags && article.tags.length > 0" class="tags">
              <span v-for="(tag,i) in article.tags" :key="`tags${i}`" class="tag is-special is-capitalized">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container is-fluid">
        <h1 class="title is-3">
          Ver otros articulos relacionados
        </h1>
        <AlternativeCarousel :skip-article="article.slug" />
      </div>
    </div>
  </section>
</template>

<script>
// import Carousel from '~/components/articles/Carousel'
import AlternativeCarousel from '~/components/articles/AlternativeCarousel'

export default {
  components: {
    AlternativeCarousel
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style lang="scss" scoped>
.the-header{
  margin-top: -140px;
  img {
    border-radius: 8px;
  }
}
.filler{
  height: 230px;
}
.background-dark-layer {
  background-color: black;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
.content{
  hr {
    background-color: #C4C4C4;
    height: 1px;
  }
}
.line {
  width: 25%;
  height: 3px;
  margin: 0 auto;
  background-color: white;
}
.icon.icon-link {
  background-image: url("~assets/svg/icon-hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.hero {
  position: relative;
}
.background-image {
  height: 100%;
  position: absolute;
  width: 100%;
  background-size: cover;
  background-position: center center;
}
</style>
