<template>
  <b-navbar wrapper-class="container" transparent>
    <!-- <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="~/assets/images/logo_justa@3x.png"
          alt="Justa"
          class="logo-navbar"
        >
      </b-navbar-item>
    </template> -->
    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/">
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/articulos">
        Artículos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/#procesos">
        Procesos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/#transparencia">
        Transparencia
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/#concursos">
        Concursos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/quienes-somos">
        Quiénes somos
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
