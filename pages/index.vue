<template>
  <section style="overflow: auto">
    <Header />
    <ArticlesCarousel />
    <Vacantes />
    <Procesos />
    <Transparencia />
    <Observatorio />
    <Colaborar />
  </section>
</template>

<script>
import Header from '~/components/home/Header'
import ArticlesCarousel from '~/components/home/ArticlesCarousel'
import Vacantes from '~/components/home/Vacantes'
import Colaborar from '~/components/home/Colaborar'
import Observatorio from '~/components/home/Observatorio'
import Transparencia from '~/components/home/Transparencia'
import Procesos from '~/components/home/Procesos'

export default {
  name: 'HomePage',
  layout: 'home',
  components: {
    Header,
    ArticlesCarousel,
    Vacantes,
    Colaborar,
    Observatorio,
    Transparencia,
    Procesos
  }
}
</script>

<style lang="scss" scoped>

</style>
