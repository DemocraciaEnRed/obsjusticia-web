<template>
  <div class="my-6">
    <p class="has-text-centered is-size-1">
      Procesos disciplinarios a <span class="has-text-weight-bold">jueces y juezas</span>
    </p>
    <div class="column is-one-quarter is-flex-direction-column is-flex is-justify-content-center is-align-content-center has-text-centered mt-6" style="margin: auto;">
      <p class="is-size-1 has-text-weight-bold">
        3854
      </p>
      <p class="is-size-4 has-text-weight-bold">
        DENUNCIAS
      </p>
      <div class="column is-one-third has-background-black has-text-white mt-3" style="margin: auto;">
        <p class="is-size-5 desde-1998">
          DESDE <span class="has-text-weight-bold">1998</span>
        </p>
      </div>
    </div>
    <div class="columns my-6 box-container">
      <div class="column">
        <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
          247
        </p>
        <p class="is-size-4 has-text-centered has-text-weight-bold">
          DENUNCIAS CADUCARON
        </p>
      </div>
      <div class="column">
        <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
          27
        </p>
        <p class="is-size-4 has-text-centered has-text-weight-bold">
          DENUNCIAS DESESTIMADAS
        </p>
      </div>
      <div class="column">
        <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
          40
        </p>
        <p class="is-size-4 has-text-centered has-text-weight-bold">
          JUICIOS POLITICOS
        </p>
      </div>
      <div class="column">
        <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
          30
        </p>
        <p class="is-size-4 has-text-centered has-text-weight-bold">
          REMOCIONES
        </p>
      </div>
      <div class="column">
        <p class="text-number-orange is-size-1 has-text-centered has-text-weight-bold">
          200
        </p>
        <p class="is-size-4 has-text-centered has-text-weight-bold">
          DENUNCIAS POR CADUCAR
        </p>
      </div>
    </div>
    <div class="img-container">
      <img src="~/assets/images/grupo-ojos.png">
    </div>
    <p class="is-size-3 has-text-centered mb-6">
      QUIERO VER MAS
      <b-icon icon="arrow-right" size="is-small" />
    </p>
  </div>
</template>
<style lang="scss" scoped>
 .desde-1998{
     letter-spacing: 1.8px;
 }
 .box-container{
     width: 60%;
     margin: auto;
 }
 .text-number{
    color: #20424f;

 }
 .text-number-orange{
    color: #cd3d27;
 }
 .img-container{
     width: 100%;
     margin-top: 5em;
     margin-bottom: 5em;
     img {
         width: 100%;
     }
 }
</style>
