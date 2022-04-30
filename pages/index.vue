<template>
  <section style="overflow: auto">
    <Header />
    <ArticlesCarousel />
    <Suscribe />
    <Observatorio />
  </section>
</template>

<script>
import Header from '~/components/home/Header'
import ArticlesCarousel from '~/components/home/ArticlesCarousel'
import Suscribe from '~/components/home/Suscribe'
import Observatorio from '~/components/home/Observatorio'

export default {
  name: 'HomePage',
  layout: 'home',
  components: {
    Header,
    ArticlesCarousel,
    Suscribe,
    Observatorio
  }
}
</script>

<style lang="scss" scoped>

</style>
