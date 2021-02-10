<template>
  <div>
    <div class="footer">
      <div class="">
        <div class="container">
          <div class="columns is-mobile is-multiline mb-5 is-vcentered">
            <div class="column is-12-mobile is-3-desktop">
              <img src="~/assets/images/acij-logo.png" width="167" class="image acij-logo">
            </div>
            <div class="column is-6-mobile is-2-desktop links-columns">
              <ul>
                <li><a href="#" class="has-text-white">Articulos</a></li>
                <li><a href="#" class="has-text-white">Selección</a></li>
              </ul>
            </div>
            <div class="column is-6-mobile is-2-desktop links-columns">
              <ul>
                <li><a href="#" class="has-text-white">¿Qué es iniciativa justa?</a></li>
                <li><a href="#" class="has-text-white">Disciplina</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div class="columns">
              <div class="column">
                <a herf="https://democraciaenred.org"><img src="~/assets/img/der-footer-full.png" class="image der-logo" alt=" Desarrollado con ♥ por Democracia en Red"></a>
              </div>
              <div class="column has-text-right-desktop has-text-centered-touch">
                Todos los derechos reservados 2020
              </div>
            </div>
          </div>
        </div>
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
 .links-columns{
  text-align: center;
    @include from($desktop) {
      text-align: left;
    }
 }
</style>
