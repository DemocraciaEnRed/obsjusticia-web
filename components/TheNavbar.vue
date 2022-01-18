<template>
  <b-navbar wrapper-class="container" transparent>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/quienes-somos">
        <img src="~/assets/images/logo_justa.png" width="70">
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/">
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/articulos">
        Artículos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/procesos-disciplinarios">
        Procesos
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/transparencia">
        Transparencia
      </b-navbar-item>
      <b-navbar-item tag="a" href="https://causasdecorrupcion.org/">
        Observatorio
      </b-navbar-item>
      <!-- <a href="/corrupcion">
        Corrupción
      </a> -->
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
