<template>
  <b-navbar wrapper-class="container" transparent>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/">
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/articulos">
        Artículos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/procesos-disciplinarios">
        Procesos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/#seleccion">
        Selección
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/disciplina">
        Disciplina
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/concurso">
        Concurso
      </b-navbar-item>
      <!-- <a href="/corrupcion">
        Corrupción
      </a> -->
      <b-navbar-item tag="nuxt-link" to="/quienes-somos">
        Iniciativa JusTA
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar-item{
  font-weight: 600;
  // text-transform: uppercase;
  font-family: 'Raleway', $family-primary;
}
</style>
