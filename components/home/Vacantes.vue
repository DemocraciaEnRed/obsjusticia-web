<template>
  <section id="vacantes">
    <div class="container">
      <div class="columns is-vcentered is-desktop">
        <div class="column is-3-desktop introduction-column">
          <h1 class="title is-3">
            ¿Qué pasa con los concursos de <span class="has-text-primary">Jueces</span> y <span class="has-text-secondary">Fiscales</span>?
          </h1>
          <div class="line-blue">
            <div class="filler" />
          </div>
          <div class="content">
            <p>
              Analizamos la forma en la que se llevan a cabo los procesos de selección de jueces.
            </p>
            <div class="has-text-centered">
              <a href="" class="button is-primary" disabled>Próximamente</a>
            </div>
          </div>
        </div>
        <div class="column is-4-desktop is-offset-1-desktop jueces-column">
          <img src="~/assets/img/jueves-image.svg" class="image mb-3" width="120" alt="">
          <h1 class="subtitle is-4">
            Vacantes para <span class="has-text-primary"><b>Jueces y juezas</b></span>
          </h1>
          <div class="columns is-mobile">
            <div class="column is-4">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">27</span><br><span class="is-400">EN EL PODER<br>EJECUTIVO</span>
              </p>
            </div>
            <div class="column is-4">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">27</span><br><span class="is-400">EN EL<br>SENADO</span>
              </p>
            </div>
            <div class="column is-4">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">27</span><br><span class="is-400">EN EL PODER<br>JUDICIAL</span>
              </p>
            </div>
          </div>
          <h1 class="title is-6-tablet is-12-mobile is-4 has-text-secondary">
            Concursos
          </h1>
          <div class="columns is-mobile">
            <div class="column is-6-mobile is-4-desktop">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">27</span><br><span class="is-400">CON CONCURSOS<br>INICIADOS</span>
              </p>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">27</span><br><span class="is-400">SIN CONCURSOS<br>INICIADOS</span>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-4-desktop darker-blue fiscales-column">
          <div class="bg-filler" />
          <div class="on-top">
            <img src="~/assets/img/fiscales-image.svg" class="image mb-3" width="120" alt="">
            <h1 class="subtitle is-4">
              Vacantes para <span class="has-text-secondary"><b>fiscales</b></span>
            </h1>
            <div class="columns is-mobile">
              <div class="column is-4">
                <p class="count-number my-2">
                  <span class="is-400 is-size-3 has-text-secondary">27</span><br><span class="is-400"><span class="is-size-7-touch">EN EL MINISTERIO<br>PÚBLICO FISCAL</span></span>
                </p>
              </div>
              <div class="column is-3">
                <p class="count-number my-2">
                  <span class="is-400 is-size-3 has-text-secondary">27</span><br><span class="is-400">EN EL<br>SENADO</span>
                </p>
              </div>
              <div class="column is-5">
                <p class="count-number my-2">
                  <span class="is-400 is-size-3 has-text-secondary">27</span><br><span class="is-400"><span class="is-size-7-touch">CONSEJO DE<br>LA MAGISTRATURA</span></span>
                </p>
              </div>
            </div>
            <h1 class="title is-4 has-text-secondary-dark">
              Concursos
            </h1>
            <div class="columns is-mobile">
              <div class="column is-6-mobile is-4-desktop is-offset-4-desktop">
                <p class="count-number my-2">
                  <span class="is-400 is-size-3 has-text-secondary">27</span><br><span class="is-400">CON CONCURSOS<br>INICIADOS</span>
                </p>
              </div> <div class="column is-6-mobile is-4-desktop">
                <p class="count-number my-2">
                  <span class="is-400 is-size-3 has-text-secondary">27</span><br><span class="is-400">SIN CONCURSOS<br>INICIADOS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#vacantes{
  background: #EDF2FE;
}
.darker-blue{
  background: #DAE5FD;
  position:relative;
  .bg-filler{
    position: absolute;
    left: 0;
    top:0;
    height: 100%;
    width: 100vw;
  background: #DAE5FD;
  z-index: 5;
  }
  .on-top{
    z-index: 10;
    position:relative;
  }
}
.line-blue {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 3px;
    margin-top: 1rem;
    background-color: #1C3262;
    margin-bottom: 1rem;
    .filler{
      position: absolute;
      right: 100%;
      height: 3px;
      background-color: #1C3262;
      width: 100vw;
      top: 0;
    }
 }

 .introduction-column{
  padding: 4rem 2rem;
    @include from($desktop) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
 }
 .fiscales-column{
  padding: 4rem 2rem;
   .image{
     margin: 0 auto;
   }
   text-align: center;

  // @media screen and (min-width: $tablet){
    @include from($desktop) {
   .image{
     margin: 0 0 0 auto;
    }
     text-align: right;

  }
 }
 .jueces-column{
  padding: 4rem 2rem;
  .image{
     margin: 0 auto;
   }
   text-align: center;
  // @media screen and (max-width: $tablet){
    @include from($desktop) {
   .image{
     margin: 0 auto 0 0;
    }
    text-align: left;

  }
 }
//  .fiscales-column{
//   @media screen and (min-width: $tablet){

//   }
//  }
</style>
