<template>
  <section>
    <div class="hero is-primary">
      <div class="hero-body">
        <h1 class="title is-1 has-text-centered">
        ARTICULOS
      </h1>
      </div>
    </div>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8">

      <div v-for="article in articles" :key="article.slug" class="media">
        <div class="media-left">
          <figure class="image is-2by1" :style="`background-image: url(${require(`~/assets/images/${article.image}`)})`" />
        </div>
        <div class="media-content">
          <nuxt-link :to="`/articulos/${article.slug}`">
            <p class="subtitle is-5">
              {{ article.date.split('T')[0] }}
            </p>
            <h1 class="title is-3 has-text-primary">
              {{ article.title }}
            </h1>
          </nuxt-link>
          <p class="subtitle is-6">
            Por {{ article.author }}
          </p>
          <p class="is-size-7 has-text-justified">
            {{ article.description }}
          </p>
          <div v-if="article.tags && article.tags.length > 0" class="tags">
            <span v-for="(tag,i) in article.tags" :key="`tags${i}`" class="tag is-primary"><i class="fas fa-hashtag"></i>&nbsp;{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
  </section>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['slug', 'title', 'date', 'author', 'image', 'description', 'tags'])
      .sortBy('date', 'desc')
      .fetch()
      .catch((err) => {
        // error({ statusCode: 404, message: 'Page not found' })
        console.log(err)
      })
    return { articles }
  }
}
</script>

<style lang="scss" scoped>
.media .media-left{
  width: 300px;
}
.media .media-left figure{
  background-size: cover;
  background-position: center center;
}
</style>
