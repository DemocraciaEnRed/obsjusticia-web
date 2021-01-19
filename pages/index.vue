<template>
  <section>
    <Carousel />
    <section class="section">
      <div class="container">
        <ArticlesCarousel />
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
  layout: 'home',
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
