<template>
  <div>
    <div class="footer-top">
      <div class="section py-0">

        <div class="container">
          <img src="~/assets/images/justa@3x.png" class="image">
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered has-text-left-desktop">
            Desarrollado con ♥ por Democracia en Red
          </div>
          <div class="column has-text-centered has-text-right-desktop">
            Todos los derechos reservados 2020
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer-top{
  background-color: $dark;
  color: #FFF;
  padding-top: 60px;
  padding-bottom: 60px;
  .image{
    max-width: 120px;
    margin: 0 auto;
    @media screen and (min-width: $tablet){
      margin: 0 auto 0 0;
    }
  }
 }
 .footer-bot{
   background-color: #20424f;
   color: white;
   height: 5em;
 }
</style>
