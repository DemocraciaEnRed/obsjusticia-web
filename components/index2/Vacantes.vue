<template>
  <section id="concursos">
    <div class="section">
      <div class="container">
        <h2 class="has-text-centered subtitle is-2 mb-6">
          ¿Qué pasa <span class="has-text-weight-bold">con los concursos de los Jueces y Fiscales?</span>
        </h2>
        <div class="has-text-centered has-text-left-desktop">
          <img src="~/assets/images/asset-jueces@3x.png" width="100">
          <h4 class="subtitle is-4 mb-6">
            Vacantes para <span class="has-text-weight-bold">jueces y juezas</span>
          </h4>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-10-tablet is-narrow-mobile has-text-centered has-text-left-desktop jueces-container">
            <div class="filler-jueces" />
            <div class="columns">
              <div class="column">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    50
                  </p>
                  <p class="is-size-5">
                    EN EL PODER JUDICIAL
                  </p>
                  <div class="line-violeta" />
                </div>
              </div>
              <div class="column">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    35
                  </p>
                  <p class="is-size-5">
                    CON CONCURSOS INICIADOS
                  </p>
                  <div class="line-violeta" />
                </div>
              </div>
              <div class="column">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    15
                  </p>
                  <p class="is-size-5">
                    SIN CONCURSOS INICIADOS
                  </p>
                  <div class="line-violeta" />
                </div>
              </div>
              <div class="column">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    10
                  </p>
                  <p class="is-size-5">
                    EN EL PODER EJECUTIVO
                  </p>
                  <div class="line-violeta" />
                </div>
              </div>
              <div class="column">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    5
                  </p>
                  <p class="is-size-5">
                    EN EL SENADO
                  </p>
                  <div class="line-violeta" />
                </div>
              </div>
            </div>
          </div>
          <div class="column is-2 is-hidden-mobile" />
        </div>
        <br>
        <div class="has-text-centered has-text-right-desktop">
          <img class="fiscales-pic-head" width="120" src="~/assets/images/asset-fiscales@3x.png">
          <h4 class="subtitle is-4 mb-6">
            Vacantes para <span class="has-text-weight-bold naranja">fiscales</span>
          </h4>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-10-tablet is-narrow-mobile is-offset-2-tablet has-text-centered has-text-right-desktop fiscales-container">
            <div class="fiscales-jueces" />
            <div class="columns">
              <div class="column is-3">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    30
                  </p>
                  <p class="is-size-5">
                    EN EL MINISTERIO PUBLICO SOCIAL
                  </p>
                  <div class="line-naranja" />
                </div>
              </div>
              <div class="column is-3">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    30
                  </p>
                  <p class="is-size-5">
                    CON CURSOS INICIADOS
                  </p>
                  <div class="line-naranja" />
                </div>
              </div>
              <div class="column is-3">
                <div class="px-3 py-4">
                  <p class="is-size-1 has-text-weight-bold">
                    30
                  </p>
                  <p class="is-size-5">
                    SIN CONCURSADOS INICIADOS
                  </p>
                  <div class="line-naranja" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="has-text-centered my-6">
          <a disabled class="button is-light is-medium is-raleway is-800 is-uppercase has-text-black">
            PRÓXIMAMENTE
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.jueces-container{
  background-color: #d6c2dd;
  position:relative;
}
.fiscales-container{
  background-color:#ebd5b9;
  position:relative;
}
.filler-jueces{
  position: absolute;
  right: 100%;
  height: 100%;
  background-color: #d6c2dd;
  width: 500%;
  top: 0;
}
.fiscales-jueces{
  position: absolute;
  left: 100%;
  height: 100%;
  background-color: #ebd5b9;
  width: 500%;
  top: 0;
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
