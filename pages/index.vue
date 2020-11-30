<template>
  <div>
    <section class="container">
      <Carousel />
      <ArticlesCarousel />
      <section class="section">
        <h3 class="title has-text-primary has-text-centered">
          Próximamente
        </h3>
      </section>
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
