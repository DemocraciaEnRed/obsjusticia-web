<template>
  <section class="has-background-white">
    <div class="filler has-background-primary" />
    <div class="section the-header mb-2">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-6">
            <nav
              class="breadcrumb has-succeeds-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <nuxt-link :to="`/articulos`" class="has-text-white">
                    Artículos
                  </nuxt-link>
                </li>
                <li class="is-active">
                  <a href="#" class="has-text-white" aria-current="page">{{
                    article.title
                  }}</a>
                </li>
              </ul>
            </nav>
            <img
              :src="`${article.image}`"
              class="image mb-5 is-fullwidth"
              :alt="article.title"
            >
          </div>
        </div>
        <h1 class="title is-3 is-size-5-touch mb-3">
          {{ article.title }}
        </h1>
        <p>por {{ article.author }}</p>
      </div>
    </div>
    <div class="section mt-0 mt-4 mb-0">
      <div class="container mb-6">
        <div class="columns">
          <div class="column is-2">
            <div class="data-content">
              <p class="mb-2">
                <b>Autor</b>
              </p>
              <p>{{ article.author }}</p>
              <p class="my-2">
                <b>Publicado el</b>
              </p>
              <p>
                {{ article.date.slice(0,10) }}
              </p>
              <p class="my-2">
                <b>Tags</b>
              </p>
              <div v-if="article.tags && article.tags.length > 0" class="tags">
                <span
                  v-for="({ name }, i) in article.tags"
                  :key="`tags${i}`"
                  class="tag is-special is-capitalized"
                >{{ name }}</span>
              </div>
              <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  class="twitter-share-button"
                  data-size="large"
                  :data-text="article.title"
                  data-via="ACIJargentina"
                  data-hashtags="justa,acij"
                  data-lang="es"
                  data-show-count="false"
                >
                  Tweet
                </a><script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
          <div class="column is-8">
            <div class="content has-text-justified">
              <p class="is-chivo">
                <i>{{ article.description }}</i>
              </p>
              <hr>
              <div v-html="$md.render(article.body)" />
            </div>
            <div v-if="article.tags && article.tags.length > 0" class="tags">
              <span
                v-for="({ name }, i) in article.tags"
                :key="`tags${i}`"
                class="tag is-special is-capitalized"
              >{{ name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container is-fluid">
        <AlternativeCarousel :article="article"/>
      </div>
    </div>
  </section>
</template>

<script>
// import Carousel from '~/components/articles/Carousel'
import StoryblokBridge from 'storyblok-nuxt'
import AlternativeCarousel from '~/components/articles/AlternativeCarousel'

export default {
  components: {
    AlternativeCarousel
  },
  async asyncData (context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    try {
      const res = await context.app.$storyapi
        .get(`cdn/stories/articulos/${context.params.slug}?resolve_relations=Articulo.author,Articulo.tags`, {
          version
        })

      return {
        article: {
          ...res.data.story.content,
          slug: context.params.slug,
          tags: res.data.story.content.tags && res.data.story.content.tags.map(t => ({
            name: res.data.rels.filter(r => r.uuid === t)[0].name,
            uuid: t
          }))
        }
      }
    } catch (err) {
      if (!err.response) {
        console.error(err)
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api'
        })
      } else {
        console.error(err.response.data)
        context.error({
          statusCode: err.response.status,
          message: err.response.data
        })
      }
    }
  },
  data () {
    return {
      story: this.article
    }
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      })
    })
  },
  head () {
    return {
      title: `${this.article.title} - JUSTA: Plataforma por una justicia transparente y abierta`,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'article:author', property: 'article:author', content: this.article.author },
        { hid: 'article:publisher', property: 'article:publisher', content: 'JUSTA' },
        { hid: 'og:title', property: 'og:title', content: `${this.article.title} - JUSTA: Plataforma por una justicia transparente y abierta` },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'og:image', property: 'og:image', content: `https:${this.article.image}` },
        { hid: 'og:url', property: 'og:url', content: `https://justa.acij.org.ar/articulos/${this.article.slug}` },
        { hid: 'twitter:title', property: 'twitter:title', content: `${this.article.title} - JUSTA: Plataforma por una justicia transparente y abierta` },
        { hid: 'twitter:description', property: 'twitter:description', content: this.article.description },
        { hid: 'twitter:url', property: 'twitter:url', content: `https://justa.acij.org.ar/articulos/${this.article.slug}` },
        { hid: 'twitter:image', property: 'twitter:image', content: `https:${this.article.image}` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.the-header {
  margin-top: -140px;
  img {
    border-radius: 8px;
  }
}
.filler {
  height: 160px;
  @include from($desktop) {
    height: 230px;
  }
}
.background-dark-layer {
  background-color: black;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
.content {
  hr {
    background-color: #c4c4c4;
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
