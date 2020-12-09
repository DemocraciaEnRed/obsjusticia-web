<template>
  <b-navbar wrapper-class="" centered transparent>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="~/assets/images/logo_justa@3x.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
          class="logo-navbar"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        INICIO
      </b-navbar-item>
      <b-navbar-item href="#">
        ARTICULOS
      </b-navbar-item>
      <b-navbar-item href="#">
        PROCESOS
      </b-navbar-item>
      <b-navbar-item href="#">
        TRANSPARENCIA
      </b-navbar-item>
      <b-navbar-item href="#">
        OBSERVATORIO
      </b-navbar-item>
      <b-navbar-item href="#">
        JUSTICIA Y GENERO
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
  text-transform: uppercase;
}
.logo-navbar{
  margin-left: 8em;
}
</style>
