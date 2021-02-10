<template>
  <section id="procesos">
    <div class="section">
      <div class="container">
        <h2 class="subtitle is-2 has-text-centered mb-4">
          Procesos disciplinarios a&nbsp;<b class="is-800">jueces y juezas</b>
        </h2>
        <div class="has-text-centered">
          <div class="mt-6">
            <span class="is-size-1 is-700">3854</span><br><span class="is-size-4">DENUNCIAS</span>
          </div>
          <div class="has-background-black my-6 px-5 py-2 has-text-white is-size-5 desde-1998 has-text-white is-inline-block">
            <span class="is-raleway">Desde</span> <span class="is-700">1998</span>
          </div>
        </div>
        <div class="columns is-centered is-mobile is-multiline">
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered">
              247
            </p>
            <p class="is-size-5 has-text-centered">
              DENUNCIAS<br>CADUCARON
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered">
              27
            </p>
            <p class="is-size-5 has-text-centered">
              DENUNCIAS<br>DESESTIMADAS
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered">
              40
            </p>
            <p class="is-size-5 has-text-centered">
              JUICIOS<br>POLÍTICOS
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number is-size-1 has-text-centered">
              30
            </p>
            <p class="is-size-5 has-text-centered">
              REMOCIONES
            </p>
          </div>
          <div class="column is-6-mobile is-2-tablet">
            <p class="text-number-orange is-size-1 has-text-centered">
              200
            </p>
            <p class="is-size-5 has-text-centered">
              DENUNCIAS<br>POR CADUCAR
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="img-container my-5">
      <img src="~/assets/images/grupo-ojos@2x.png" class="image is-hidden-touch">
      <img src="~/assets/images/grupo-ojos-mobile@2x.png" class="image is-hidden-desktop">
    </div>
    <div class="has-text-centered my-6">
      <router-link to="/articulos" class="is-size-4 is-raleway is-800 is-uppercase has-text-black">
        QUÍERO VER MAS&nbsp;&nbsp;<i class="fas fa-arrow-right" />
      </router-link>
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
    font-weight: 700;

 }
 .text-number-orange{
    color: #cd3d27;
    font-weight: 700;
 }

</style>
