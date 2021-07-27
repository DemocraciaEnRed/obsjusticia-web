<template>
  <section class="">
    <div class="filler has-background-primary" />
    <div class="section">
      <button @click="importar(articles)">
        Importar
      </button>
    </div>
  </section>
</template>

<script>
import StoryblokClient from 'storyblok-js-client'

export default {

  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .sortBy('order', 'asc')
      .fetch()

    return { articles }
  },
  methods: {
    importar (articulos) {
      // Initialize the client with the oauth token
      const Storyblok = new StoryblokClient({
        oauthToken: process.env.STORYBLOK_OAUTH_TOKEN // can be found in your My account section
      })

      const config = {
        spaceId: '121062', // can be found in the space settings.
        parentFolder: '62398156' // navigate into your folder and copy the id from the URL at app.storyblok.com <- last one
      }

      articulos.forEach((a) => {
        const story = {
          slug: a.slug,
          name: a.title,
          parent_id: config.parentFolder,
          content: {
            component: 'Post',
            title: a.title,
            author: a.author,
            description: a.description,
            order: a.order,
            date: a.date,
            long_text: a.full_body,
            image: a.image,
            category: a.category
          }
        }
        console.log(a)

        Storyblok.post(`spaces/${config.spaceId}/stories/`, {
          story
        }).then((res) => {
          console.log(`Success: ${res.data.story.name} was created.`)
        }).catch((err) => {
          console.log(`Error: ${err}`)
        })
      }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.filler{
  height: 430px;
}
</style>
