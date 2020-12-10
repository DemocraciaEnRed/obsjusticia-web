<template>
  <section>
    <div class="hero is-dark is-medium">
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
          <p class="is-size-5 is-size-6-touch">
            por {{ article.author }}
          </p>
        </div>
      </div>
    </div>
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
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters">
            <div class="content has-text-justified">
              <p class="is-size-5">
                <i>{{ article.description }}</i>
              </p>
              <nuxt-content :document="article" />
            </div>
          </div>
          <div class="column">
            <div class="data-content pl-3">
              <p class="is-size-5 mb-2">
                <b>Autor</b>
              </p>
              <p>{{ article.author }}</p>
              <p class="is-size-5 my-2">
                <b>Publicado el</b>
              </p>
              <p>{{ article.date.split('T')[0] }}</p>
              <p class="is-size-5 my-2">
                <b>Tags</b>
              </p>
              <div class="tags" v-if="article.tags && article.tags.length > 0">
                <span v-for="(tag,i) in article.tags" :key="`tags${i}`" class="tag is-primary">{{ tag }}</span>
              </div>
            </div>
            <!-- <div class="box">
              <div class="has-text-centered">
                <p class="is-size-1">TEMAS</p>
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
                  <a
                    href="https://www.linkedin.com/company/asociacióncivilporlaigualdadylajusticia/"
                  >
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
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style lang="scss" scoped>
.background-dark-layer {
  background-color: black;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.7;
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
.data-content{
  border-left: 3px solid $dark;
  padding-left: 15px;
}
</style>
