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
        oauthToken: 'OAUTH_TOKEN' // can be found in your My account section
      })

      const config = {
        spaceId: '122014', // can be found in the space settings.
        parentFolder: '64554705' // navigate into your folder and copy the id from the URL at app.storyblok.com <- last one
      }

      articulos.forEach((a) => {
        const story = {
          slug: a.slug,
          name: a.title,
          parent_id: config.parentFolder,
          content: {
            component: 'Articulo',
            title: a.title,
            order: a.order,
            author: a.author,
            description: a.description,
            body: a.full_body,
            date: a.date,
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
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.filler{
  height: 430px;
}
</style>
