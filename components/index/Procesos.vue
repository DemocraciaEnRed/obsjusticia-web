<template>
  <section id="procesos">
    <div class="section">
      <div class="container">
        <p class="has-text-centered is-size-2 mb-4">
          Procesos disciplinarios a <span class="has-text-weight-bold">jueces y juezas</span>
        </p>
        <div class="columns is-centered my-5">
          <div class="column is-one-quarter has-text-centered">
            <p class="is-size-1 has-text-weight-bold">
              3854
            </p>
            <p class="is-size-4 has-text-weight-bold">
              DENUNCIAS
            </p>
            <div class="has-background-black mt-3 px-5 py-2 has-text-white is-size-5 desde-1998 has-text-white is-inline-block">
              DESDE <span class="has-text-weight-bold">1998</span>
            </div>
          </div>
        </div>
        <div class="columns is-centered is-mobile is-multiline">
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
              247
            </p>
            <p class="is-size-5 has-text-centered has-text-weight-bold">
              DENUNCIAS<br>CADUCARON
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
              27
            </p>
            <p class="is-size-5 has-text-centered has-text-weight-bold">
              DENUNCIAS<br>DESESTIMADAS
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
              40
            </p>
            <p class="is-size-5 has-text-centered has-text-weight-bold">
              JUICIOS<br>POLITICOS
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered has-text-weight-bold">
              30
            </p>
            <p class="is-size-5 has-text-centered has-text-weight-bold">
              REMOCIONES
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number-orange is-size-1 has-text-centered has-text-weight-bold">
              200
            </p>
            <p class="is-size-5 has-text-centered has-text-weight-bold">
              DENUNCIAS<br>POR CADUCAR
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="img-container">
      <img src="~/assets/images/grupo-ojos@2x.png" class="image is-hidden-touch">
      <img src="~/assets/images/grupo-ojos-mobile@2x.png" class="image is-hidden-desktop">
    </div>
    <div class="has-text-centered my-5">
      <b-button size="is-large" type="is-light">
        <p class="is-size-5 m-5">
          PROXMAMENTE
        </p>
      </b-button>
    </div>
  </section>
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
     margin-top: 2rem;
     margin-bottom: 5rem;
 }
</style>
