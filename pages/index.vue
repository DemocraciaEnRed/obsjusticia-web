<template>
  <section>
    <Carousel />
    <section class="section">
      <div class="container">
        <ArticlesCarousel />
        <br>
        <br>
          <a href="/articulos" class="has-text-black">
            <h5 class="title is-3 is-size-4-touch has-text-centered">Ver todos los articulos <i class="fas fa-arrow-right"></i></h5>
          </a>
      </div>
    </section>
    <Vacantes />
    <Procesos />
    <Ranking />
    <Contactanos />
  </section>
</template>

<script>
import Carousel from '~/components/index/Carousel'
import ArticlesCarousel from '~/components/index/ArticlesCarousel'
export default {
  name: 'HomePage',
  components: {
    Carousel,
    ArticlesCarousel
  }
}
</script>

<style lang="scss" scoped>
.ver-mas {
  font-size: 2em;
  font-weight: 800;
  color: #000000;
}
</style>
