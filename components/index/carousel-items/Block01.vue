<template>
  <div class="bg-container ">
    <div class="container">
      <div class="columns is-vcentered block-item">
        <div class="column">
          <figure class="image is-96x96 mb-4">
            <img class="is-rounded" src="~/assets/images/ojos.gif">
          </figure>
          <div class="upper-logo-container is-inline-block">
            <span class="is-raleway is-500 has-text-white is-size-5">Estamos observando a la justicia</span>
          </div>
          <br>
          <div class="lower-logo-container is-raleway is-inline-block">
            <span class="is-raleway is-800 has-text-black">INICIATIVA JUSTA</span>
          </div>
        </div>
        <div class="column is-5 is-align-self-flex-end pb-0">
          <div class="block-text-container content has-text-right">
            <h1 class="subtitle is-3 has-text-white">
              ¿Qué es<br><b class="is-800">Iniciativa jusTa?</b>
            </h1>
            <p class="has-text-white">
              Conocé información en tiempo real sobre los procesos mediante los cuales se eligen los jueces y fiscales, los resultados del sistema de sanciones, la transparencia y rendición de cuentas de  instituciones judiciales.
            </p>
            <div class="buttons is-right">
              <router-link to="/quienes-somos" class="button is-light is-rounded ">
                Ver más&nbsp;<i class="fas fa-arrow-right" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-container{
  background: url('~assets/images/header_img.png');
  background-size: cover;
  background-position: center center;
}
.block-item{
  padding: 30px;
  @media screen and (min-width: $tablet){
  padding-top: 140px;
  min-height: 500px;
  padding: 0;
  }
}
.block-text-container{
  padding: 30px 40px;
  background-color: #400755b0;
  background-blend-mode: multiply;
}
.upper-logo-container{
  padding: 2px 8px;
  letter-spacing: 1px;
  background-color: #6f3285;
}
.lower-logo-container{
  padding: 4px 12px;
  font-size: 3.2rem;
  background-color: #FFF;
}

</style>
