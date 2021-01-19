<template>
  <b-carousel :indicator="true" :indicator-inside="false" indicator-position="is-bottom" :indicator-background="false" indicator-style="is-dots">
    <b-carousel-item>
      <Block01 />
    </b-carousel-item>
    <b-carousel-item>
      <Block02 />
    </b-carousel-item>
    <b-carousel-item>
      <Block03 />
    </b-carousel-item>
  </b-carousel>
</template>

<script>
import Block01 from './carousel-items/Block01.vue'
// import headerImg from '~/assets/images/header_img.png'
export default {
  components: {
    Block01
  }

}
</script>

<style lang="scss" scoped>
</style>
