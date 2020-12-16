<template>
  <div class="bg-container ">
    <div class="container">
      <div class="columns is-vcentered block-item">
        <div class="column">
          <figure class="image is-96x96 mb-4">
            <img class="is-rounded" src="~/assets/images/ojos.gif" >
          </figure>
          <div class="upper-logo-container is-inline-block">
            <span class="is-raleway is-600">Estamos observando a la justicia</span>
          </div>
          <br>
          <div class="lower-logo-container is-raleway is-inline-block">
            <span class="is-raleway is-800 has-text-white is-size-3">Iniciativa Justa</span>
          </div>
        </div>
        <div class="column is-align-self-flex-end pb-0">
          <div class="block-text-container content ">
            <h1 class="title is-3 is-raleway has-text-white">
              ¿Qué es Iniciativa jusTa?
            </h1>
            <p class="has-text-white">
              Conocé información en tiempo real sobre los procesos mediante los cuales se eligen los jueces y fiscales, los resultados del sistema de sanciones, la transparencia y rendición de cuentas de  instituciones judiciales.
            </p>
            <div class="buttons">
              <a href="#" class="button is-light is-rounded ">Ver Mas&nbsp;<i class="fas fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .carousel-item{
//   // min-height: 400px;
//   // height: 100%;
// }

.bg-container{
  background: url('~assets/images/image (1).png');
  background-size: cover;
  background-position: center center;
  // object-fit: contain;
}
.block-item{
  padding: 30px;
  @media screen and (min-width: $tablet){
  min-height: 400px;
  padding: 0;
  }
}
.block-text-container{
  padding: 30px 40px;
  background-color: #6f3285;
  background-blend-mode: multiply;
  opacity: 0.7;
}
.upper-logo-container{
  padding: 5px 15px;
  background-color: #FFF;
}
.lower-logo-container{
  padding: 10px 40px;
  background-color: #6f3285;
}

</style>
