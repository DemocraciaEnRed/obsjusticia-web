<template>
  <div class="block-text-container content has-text-left" :class="{'is-highlight': block.isArticle}">
    <div class="columns is-mobile is-vcentered">
      <div class="column">
        <h1 class="subtitle is-4 has-text-white is-400">
          {{ block.title }}
        </h1>
        <p class="has-text-white is-400">
          {{ block.content }}
        </p>
      </div>
      <div class="column is-narrow">
        <router-link to="/quienes-somos" class="button is-white ">
          Ver más<i class="fas fa-arrow-right ml-4" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.block-text-container{
  padding: 30px 40px;
  background-color: #000;
  background-blend-mode: multiply;
  min-height: 250px;
  &.is-highlight{
    background-color: #467CF6;
  }
}
</style>
