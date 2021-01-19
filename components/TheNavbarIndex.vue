<template>
  <nav class="navbar index-navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="~/assets/images/logo_justa@3x.png"
            alt="Justa"
            class="logo-navbar"
          >
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end" style="margin: 0 auto;">
          <div class="navbar-item">
            <router-link to="/" class="nav-link has-text-black" :class="{'active': $route.name == 'index'}">
              INICIO
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/articulos" class="nav-link has-text-black">
              ARTÍCULOS
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/#procesos" class="nav-link has-text-black">
              PROCESOS
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/#transparencia" class="nav-link has-text-black">
              TRANSPARENCIA
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/#concursos" class="nav-link has-text-black">
              CONCURSOS
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/quienes-somos" class="nav-link has-text-black">
              QUÍENES SOMOS
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isHome () {
      return this.$route
    }
  }
}
</script>

<style lang="scss" scoped>
.index-navbar{
  position: absolute;
  width: 100%;
  background-color: rgba(196, 196, 196, 0.6);
}

.nav-link{
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Raleway", $family-primary;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 5px;
  &.active{
    background-color: rgba(215, 215, 215, 0.8);
  }
  &:hover{
    background-color: rgba(215, 215, 215, 0.8);
  }
}
</style>
