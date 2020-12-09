<template>
  <div>
    <section class="w-100">
      <div>
        <Carousel />
        <ArticlesCarousel />
        <div class="ver-mas is-flex is-justify-content-center is-align-content-center">
          <a href="/articulos" class="is-flex has-text-black">
            <h5>Ver todos los articulos</h5>
            <b-icon class="ml-5 mt-3" icon="arrow-right" size="is-small" />
          </a>
        </div>
      </div>
      <Vacantes />
      <Procesos />
      <Ranking />
      <Contactanos />
    </section>
  </div>
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
  .ver-mas{
    font-size: 2em;
    font-weight: 800;
    color: #000000;
  }
</style>
