<template>
  <section>
    <div class="title-container has-text-white" :style="`background-image: url(${require(`../../assets/images/${post.imagen}.jpg`)})`">
      <div class="fondo-negro has-text-centered is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <h1 class="has-text-white">
          {{ post.titulo }}
        </h1>
        <div class="line mb-6" />
        <p class="is-size-3">
          por {{ post.autor }}
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <div class="my-6">
          <p class="is-size-3 has-text-weight-bold">
            {{ post.introduccion }}
          </p>
        </div>
        <div v-for="parrafo in post.parafos" :key="`parrafo-${parrafo.titulo}`" class="is-size-3 my-6">
          <p class="is-size-2 has-text-weight-bold my-3">
            {{ parrafo.titulo }}
          </p>
          <p>
            {{ parrafo.contenido }}
          </p>
        </div>
      </div>
      <div class="column mb-6">
        <div class="box has-background-white py-6 mt-6">
          <div class="has-text-centered">
            <p class="is-size-1">
              TEMAS
            </p>
            <div class="mt-4">
              <p class="is-size-4">
                #ACIJ #JUDICIAL #MAFALDA #REDESSOCIALES
              </p>
            </div>
          </div>
          <div class="columns has-text-centered is-size-2 mt-5">
            <div class="column">
              <a href="https://www.facebook.com/ACIJ.ORG">
                <span class="icon">
                  <i class="fab fa-facebook-f" />
                </span>
              </a>
            </div>
            <div class="column">
              <a href="https://twitter.com/ACIJargentina">
                <span class="icon">
                  <i class="fab fa-twitter" />
                </span>
              </a>
            </div>
            <div class="column">
              <a href="https://www.linkedin.com/company/asociacióncivilporlaigualdadylajusticia/">
                <span class="icon">
                  <i class="fab fa-linkedin" />
                </span>
              </a>
            </div>
            <div class="column">
              <a href="https://www.youtube.com/user/CanalACIJ">
                <span class="icon">
                  <i class="fab fa-youtube" />
                </span>
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
  layout: 'articles',
  async asyncData ({ $axios, params }) {
    const articles = await $axios.$get('http://localhost:3000/articulos.json')
    const post = articles.filter((article) => {
      return article.id === JSON.parse(params.slug)
    })[0]
    return { post }
  }
}
</script>

<style lang="scss" scoped>
  .fondo-negro{
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
  .title-container{
    background-size: cover;
    background-position: center center;
    height: 30em;
    h1{
      font-size: 5em;
    }
  }
  .line {
    width: 25%;
    height: 3px;
    background-color: white;
  }
</style>
