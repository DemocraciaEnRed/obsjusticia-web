<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="is-6-mobile mt-4 is-3-desktop links-columns level">
            <a href="/articulos" class="has-text-white is-size-5 level-item">Artículos</a>
            <router-link to="/concursos" class="has-text-white is-size-5 level-item">Concursos</router-link>
            <a href="/procesos-disciplinarios" class="has-text-white is-size-5 level-item">Disciplina</a>
            <router-link to="/transparencia" class="has-text-white is-size-5 level-item">Transparencia</router-link>
            <a href="https://causasdecorrupcion.org/" class="has-text-white is-size-5 level-item">Corrupción</a>
            <a href="/quienes-somos" class="has-text-white is-size-5 level-item">¿Qué es JusTA?</a>
            <div class="level-item">
              <!-- <span class="is-size-5">¿Encontraste algún error? </span> -->
              <a href="mailto:info@acij.org.ar" class="has-text-white is-size-5 ml-4">¡Ayúdanos a mejorar! Contactanos</a>
            </div>
        </div>
        <div class="columns py-6 mt-6">
          <div class="column is-12-mobile is-4-desktop has-text-centered">
            <img src="~/assets/img/logo-white.svg" width="164">
          </div>
          <div class="column is-12-mobile is-4-desktop has-text-centered">
            <img src="~/assets/img/acij-logo.png" width="164">
          </div>
          <div class="columns column is-12-mobile is-4-desktop has-text-centered">
            <div class="column is-two-fifth"></div>
            <div class="column is-one-fifth">
              <img src="~/assets/img/der-icon.svg" width="60" alt="Desarrollado con ♥ por Democracia en Red">
            </div>
            <p class="column is-two-fifths">Desarrollado con ❤️ </br> por <b>Democracia en red</b></p>
          </div>
        </div>
        <p class="is-200 has-text-centered mt-6-mobile">
          Todos los derechos reservados 2022
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-top{
  color: #FFF;
  // .image{
  //   // max-width: 120px;
  //   margin: 0 auto;
  //   @media screen and (min-width: $tablet){
  //     margin: 0 auto 0 0;
  //   }
  // }
 }
 .der-logo, .acij-logo{
    margin: 0 auto;
    @include from($desktop) {
        margin: 0 auto 0 0;
    }
 }
 .der-logo {
   width: 160px;
 }
 .links-columns{
  text-align: center;
    @include from($desktop) {
      text-align: left;
    }
 }
 .float-left{
   float: left;
 }
</style>
