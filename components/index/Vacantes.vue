<template>
<section>
  <div class="section">
    <div class="container">
      <p class="has-text-centered is-size-2 mb-6">
        ¿Que pasa <span class="has-text-weight-bold">con los concursos de los Jueces y Fiscales?</span>
      </p>
      <div class="has-text-centered has-text-left-desktop">
        <img src="~/assets/images/asset-jueces.png">
        <p class="mb-5 is-size-4">
          Vacantes para <span class="has-text-weight-bold violeta">jueces y juezas</span>
        </p>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-10-tablet is-narrow-mobile has-text-centered has-text-left-desktop jueces-container">
          <div class="columns">
            <div class="column">
              <div class="px-3 py-4">
                <p class="is-size-1 has-text-weight-bold">50</p>
                <p class="is-size-5">EN EL PODER JUDICIAL</p>
                <div class="line-violeta" />

              </div>
            </div>
            <div class="column">
              <div class="px-3 py-4">
                <p class="is-size-1 has-text-weight-bold">35</p>
                <p class="is-size-5">CON CONCURSOS INICIADOS</p>
                <div class="line-violeta" />

              </div>
            </div>
            <div class="column">
              <div class="px-3 py-4">
                <p class="is-size-1 has-text-weight-bold">15</p>
                <p class="is-size-5">SIN CONCURSOS INICIADOS</p>
                <div class="line-violeta" />

              </div>
            </div>
            <div class="column">
              <div class="px-3 py-4">
                <p class="is-size-1 has-text-weight-bold">10</p>
                <p class="is-size-5">EN EL PODER EJECUTIVO</p>
                <div class="line-violeta" />

              </div>
            </div>
            <div class="column">
              <div class="px-3 py-4">
                <p class="is-size-1 has-text-weight-bold">5</p>
                <p class="is-size-5">EN EL SENADO</p>
                <div class="line-violeta" />
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2 is-hidden-mobile"></div>
      </div>
      <br>
      <div class="has-text-centered has-text-right-desktop">
        <img class="fiscales-pic-head" src="~/assets/images/asset-fiscales.png">
        <p class="mb-5 is-size-4">
          Vacantes para <span class="has-text-weight-bold naranja">fiscales</span>
        </p>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-10-tablet is-narrow-mobile is-offset-2-tablet has-text-centered has-text-right-desktop fiscales-container">
          <div class="columns">

          <div class="column">
            <div class="px-3 py-4">
              <p class="is-size-1 has-text-weight-bold">30</p>
              <p class="is-size-5">EN EL MINISTERIO PUBLICO SOCIAL</p>
              <div class="line-naranja" />

            </div>
          </div>
          <div class="column">
            <div class="px-3 py-4">
              <p class="is-size-1 has-text-weight-bold">30</p>
              <p class="is-size-5">CON CURSOS INICIADOS</p>
              <div class="line-naranja" />

            </div>
          </div>
          <div class="column">
            <div class="px-3 py-4">
              <p class="is-size-1 has-text-weight-bold">30</p>
              <p class="is-size-5">SIN CONCURSADOS INICIADOS</p>
              <div class="line-naranja" />

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style lang="scss" scoped>
.jueces-container{
  background-color: rgba(159, 94, 183, 0.3);
}
.fiscales-container{
  background-color: rgba(229, 157, 63, 0.3);
}

  .naranja{
      color: #e59d3f;
  }
  .violeta{
      color: #9f5eb7;
  }

  .line-violeta {
    display: inline-block;
    width: 80px;
    height: 3px;
    margin-top: 1rem;
    background-color: #9f5eb7;
 }
 .line-naranja {
    display: inline-block;
    width: 80px;
    height: 3px;
    margin-top: 1rem;
    background-color: #e59d3f;
}
</style>
