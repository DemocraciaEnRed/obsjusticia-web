<template>
  <section>
    <Carousel />
    <section class="section">
      <div class="container">
        <!-- <ArticlesCarousel /> -->
      </div>
    </section>
    <Vacantes />
    <Procesos />
    <Ranking />
    <Contactanos />
  </section>
</template>

<script>
import Carousel from '~/components/index2/Carousel'
// import ArticlesCarousel from '~/components/index2/ArticlesCarousel'
import Vacantes from '~/components/index2/Vacantes'
import Procesos from '~/components/index2/Procesos'
import Ranking from '~/components/index2/Ranking'
import Contactanos from '~/components/index2/Contactanos'
export default {
  name: 'HomePage2',
  layout: 'home2',
  components: {
    Carousel,
    // ArticlesCarousel,
    Vacantes,
    Procesos,
    Ranking,
    Contactanos
  }
}
</script>

<style lang="scss" scoped>
// .ver-mas {
//   font-size: 2em;
//   font-weight: 800;
//   color: #000000;
// }
</style>
