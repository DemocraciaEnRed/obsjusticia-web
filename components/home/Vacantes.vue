<template>
  <section id="seleccion">
    <div class="container">
      <div class="columns is-desktop mt-0">
        <div class="column is-3-desktop introduction-column">
          <h1 class="title is-3">
            ¿Qué pasa con los concursos de <span class="has-text-primary">Jueces</span> y <span class="has-text-secondary">Fiscales</span>?
          </h1>
          <div class="line-blue"></div>
          <div class="content">
            <p>
              Analizamos la forma en la que se llevan a cabo los procesos de selección de jueces.
            </p>
            <div class="has-text-left">
              <a href="" class="button is-size-5 is-primary mt-5" disabled>Próximamente</a>
            </div>
          </div>
        </div>
        <div class="column is-4-desktop is-offset-1-desktop jueces-column">
          <img src="~/assets/img/jueves-image.svg" class="image mb-3" width="120" alt="">
          <h1 class="subtitle is-4 mb-1">
            Vacantes para <span class="has-text-primary"><b>jueces y juezas</b></span>
          </h1>
          <h1 class="mt-4 mb-3 is-size-5">
            <span class="is-600 has-text-primary">254</span> vacantes en total
          </h1>
          <div class="columns is-mobile">
            <div class="column is-4">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">105</span><br><span class="is-400">EN EL PODER<br>EJECUTIVO</span>
              </p>
            </div>
            <div class="column is-3">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">23</span><br><span class="is-400">EN EL<br>SENADO</span>
              </p>
            </div>
            <div class="column is-5">
              <p class="count-number my-2">
                <span class="is-400 is-size-3 has-text-primary">126</span><br><span class="is-400">EN EL CONSEJO DE<br>LA MAGISTRATURA</span>
              </p>
              <h1 class="title is-6-tablet is-12-mobile is-5 has-text-secondary my-2 pt-4 pl-5 title-border-left">
                Concursos
              </h1>
               <p class="count-number my-2">
                <span class="is-400 is-size-4 has-text-primary mr-6">56</span><span class="is-400 is-size-6">INICIADOS</span>
              </p>
              <p class="count-number my-2">
                <span class="is-400 is-size-5 has-text-primary mr-3">Sin<br>datos*</span><span class="is-400 is-size-6 fix-position">SIN INICIAR</span>
              </p>
            </div>
          </div>
          <p><span class="is-400 is-size-4 has-text-primary">(*)</span> Estos datos no pueden construirse actualmente de la información disponible.</p>
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
                  <span class="is-400 is-size-4 has-text-secondary">Sin datos*</span><br><span class="is-400"><span class="is-size-7-touch">EN EL PODER<br>EJECUTIVO</span></span>
                </p>
              </div>
              <div class="column is-4">
                <p class="count-number my-2">
                  <span class="is-400 is-size-4 has-text-secondary">Sin datos*</span><br><span class="is-400">EN EL<br>SENADO</span>
                </p>
              </div>
              <div class="column is-5">
                <p class="count-number my-2">
                  <span class="is-400 is-size-3 has-text-secondary">44</span><br><span class="is-400"><span class="is-size-7-touch">EN EL MINISTERIO<br>PÚBLICO FISCAL</span></span>
                </p>
                <h1 class="title is-6-tablet is-12-mobile is-5 has-text-secondary-dark my-2 pt-4 pr-5 title-border-right">
                  Concursos
                </h1>
                <p class="count-number my-2">
                  <span class="is-400 mr-5 is-size-6">INICIADOS</span><span class="is-400 is-size-4 has-text-secondary">17</span>
                </p>
                <p class="count-number my-2">
                  <span class="is-400 mr-5 is-size-6">SIN INICIAR</span><span class="is-400 is-size-5 has-text-secondary">Sin<br>datos*</span>
                </p>
              </div>
            </div>
            <p><span class="is-400 is-size-4 has-text-primary">(*)</span> Estos datos no pueden construirse actualmente de la información disponible.</p>
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
#seleccion {
  background: #EDF2FE;
}
#vacantes{
  background: #EDF2FE;
}
.fix-position{
  top: -15px;
  position: relative;
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
.title-border-left {
  border-top: 2px solid #1C3262;
  border-left: 2px solid #1C3262;
}
.title-border-right {
  border-top: 2px solid #1C3262;
  border-right: 2px solid #1C3262;
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
  align-self: center;
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
