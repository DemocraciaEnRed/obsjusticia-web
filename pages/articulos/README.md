## Importar artículos

Actualmente los artículos están en la carpeta `content/articles` en archivos markdown (.md). La forma en la que se cargan para mostrar es usando `@nuxt/content`. Los datos del artículo en el markdown están en el YAML front matter block, en el prnicipio del archivo, con lo cual vamos a necesitar leer esa información que es la que, junto con el body, vamos a querer importar

Nuxt PreInsert Hook para poner el texto en el campo full_body.

```javascript
 hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.full_body = document.text
      }
    }
  },
```

Nuxt Page

```javascript
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
            order: a.order,
            author: a.author,
            description: a.description,
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
```
