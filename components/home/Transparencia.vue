<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h1 class="title is-3">
            Transparencia del sistema de justicia argentino
          </h1>
          <div class="line-violeta">
            <div class="filler" />
          </div>
          <div class="content">
            <p>
              Medimos la transparencia de los órganos del sistema de justicia nacional
              según el cumplimiento de la ley nacional de acceso a la información.
            </p>
            <p class="has-text-magenta-dark">
              <i class="far fa-calendar fa-lg" />
            </p>
            <p class="has-text-magenta-dark">
              <b>Próximamente</b><br>Accedé a los pedidos de información que realizamos para JusTA
            </p>
          </div>
        </div>
        <div class="column">
          <img src="~/assets/img/transparencia.svg" width="325" class="image transparencia-pic" alt="Transparencia">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section{
background-color: #F4EDFE;
}
.line-violeta {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 3px;
    margin-top: 1rem;
    background-color: #3B1C62;
    margin-bottom: 1rem;
    .filler{
      position: absolute;
      right: 100%;
      height: 3px;
      background-color: #3B1C62;
      width: 100vw;
      top: 0;
    }
 }
 .transparencia-pic{
   margin: 0 auto;
    @include from($desktop) {
   margin-left: auto;
   margin-right: 0;
    }
 }
</style>
