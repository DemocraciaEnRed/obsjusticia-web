<template>
  <nav class="navbar index-navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
            <router-link to="/quienes-somos" class="nav-link" exact-active-class="no-active" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              <img src="~/assets/images/logo_justa.png" width="70">
            </router-link>
          </div>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end" style="margin: 0 auto;">
          <div class="navbar-item">
            <router-link to="/" class="nav-link" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              Inicio
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/articulos" class="nav-link" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              Artículos
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/concursos" class="nav-link" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              Concursos
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/procesos-disciplinarios" class="nav-link" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              Disciplina
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/transparencia" class="nav-link" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              Transparencia
            </router-link>
          </div>
          <div class="navbar-item">
            <a href="https://causasdecorrupcion.org/" class="nav-link" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              Corrupcion
            </a>
          </div>
          <div class="navbar-item">
            <router-link to="/quienes-somos" class="nav-link" :class="{'has-text-dark': dark, 'has-text-white': !dark}">
              JusTA
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
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
  // background-color: rgba(196, 196, 196, 0.6);
  background-color: transparent;
}

.nav-link{
  font-weight: 600;
  // text-transform: uppercase;
  font-family: "Raleway", $family-primary;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 5px;
  color: #FFF;
  &.active{
    background-color: rgba(215, 215, 215, 0.8);
    color: #000 !important;
  }
  &:hover{
    background-color: rgba(215, 215, 215, 0.8);
    color: #000 !important;
  }
}

#navbarBasicExample{
  margin-left: -5rem;
}
</style>
