<template>
  <section>
    <div class="hero is-primary is-medium">
      <div class="hero-body">
        <h1 class="title is-1 has-text-centered">
          ARTÍCULOS
        </h1>
      </div>
    </div>
    <section class="section">
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
                      {{ article.date.split('T')[0] }}
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
                      <i class="fas fa-hashtag" />
                      &nbsp;{{ tag }}
                    </span>
                  </div>
                  <hr class="has-background-black">
                </div>
              </nuxt-link>
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
