<template>
  <div class="my-6">
    <p class="has-text-centered is-size-1">
      ¿Que pasa <span class="has-text-weight-bold">con los concursos de los Jueces y Fiscales?</span>
    </p>
    <div class="vacante-jueces">
      <div>
        <img class="ml-6" src="~/assets/images/asset-jueces.png">
        <p class="mb-5 ml-6 is-size-3">
          Vacantes para <span class="has-text-weight-bold violeta">jueces y juezas</span>
        </p>
        <div class="columns jueces-container py-4">
          <div class="column p-5 m-3">
            <div class="box-text">
              <p class="is-size-1 has-text-left has-text-weight-bold">
                50
              </p>
              <p class="is-size-5 has-text-left has-text-weight-bold">
                EN EL PODER JUDICIAL
              </p>
            </div>
            <div class="line-17" />
          </div>
          <div class="column p-5 m-3">
            <div class="box-text">
              <p class="is-size-1 has-text-left has-text-weight-bold">
                35
              </p>
              <p class="is-size-5 has-text-left has-text-weight-bold">
                CON CONCURSOS INICIADOS
              </p>
            </div>
            <div class="line-17" />
          </div>
          <div class="column p-5 m-3">
            <div class="box-text">
              <p class="is-size-1 has-text-left has-text-weight-bold">
                15
              </p>
              <p class="is-size-5 has-text-left has-text-weight-bold">
                SIN CONCURSOS INICIADOS
              </p>
            </div>
            <div class="line-17" />
          </div>
          <div class="column p-5 m-3">
            <div class="box-text">
              <p class="is-size-1 has-text-left has-text-weight-bold">
                10
              </p>
              <p class="is-size-5 has-text-left has-text-weight-bold">
                EN EL PODER EJECUTIVO
              </p>
            </div>
            <div class="line-17" />
          </div>
          <div class="column p-5 m-3">
            <div class="box-text">
              <p class="is-size-1 has-text-left has-text-weight-bold">
                5
              </p>
              <p class="is-size-5 has-text-left has-text-weight-bold">
                EN EL SENADO
              </p>
            </div>
            <div class="line-17" />
          </div>
        </div>
      </div>
    </div>
    <div class="vacante-fiscales">
      <img class="mr-6" src="~/assets/images/asset-fiscales.png">
      <p class="mb-5 mr-6 is-size-3">
        Vacantes para <span class="has-text-weight-bold naranja">fiscales</span>
      </p>
      <div class="columns fiscales-container py-4">
        <div class="column p-5 m-3">
          <div class="box-text">
            <p class="is-size-1 has-text-right has-text-weight-bold">
              30
            </p>
            <p class="is-size-5 has-text-right has-text-weight-bold">
              EN EL MINISTERIO PUBLICO FISCAL
            </p>
          </div>
          <div class="line-9" />
        </div>
        <div class="column p-5 m-3">
          <div class="box-text">
            <p class="is-size-1 has-text-right has-text-weight-bold">
              20
            </p>
            <p class="is-size-5 has-text-right has-text-weight-bold">
              CON CONCURSOS INICIADOS
            </p>
          </div>
          <div class="line-9" />
        </div>
        <div class="column p-5 m-3">
          <div class="box-text">
            <p class="is-size-1 has-text-right has-text-weight-bold">
              10
            </p>
            <p class="is-size-5 has-text-right has-text-weight-bold">
              SIN CONCURSOS INICIADOS
            </p>
          </div>
          <div class="line-9" />
        </div>
        <div class="column p-5 m-3">
          <div class="box-text">
            <p class="is-size-1 has-text-right has-text-weight-bold">
              10
            </p>
            <p class="is-size-5 has-text-right has-text-weight-bold">
              EN EL PODER EJECUTIVO
            </p>
          </div>
          <div class="line-9" />
        </div>
        <div class="column p-5 m-3">
          <div class="box-text">
            <p class="is-size-1 has-text-right has-text-weight-bold">
              5
            </p>
            <p class="is-size-5 has-text-right has-text-weight-bold">
              EN EL SENADO
            </p>
          </div>
          <div class="line-9" />
        </div>
      </div>
    </div>
    <div class="column is-one-quarter has-background-grey-lighter my-6" style="margin: auto;">
      <p class="title is-size-3 has-text-centered">
        PROXIMAMENTE
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .vacante-jueces{
      display: flex;
      width: 60%;
  }
  .vacante-fiscales{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      margin-bottom: 6em;
  }

  .fiscales-container{
      background-color: rgba(229, 157, 63, 0.3);
      width: 60%;
      height: 15em;
      padding-right: 7em;
  }

  .naranja{
      color: #e59d3f;
  }
  .violeta{
      color: #9f5eb7;
  }
  .jueces-container{
      background-color: rgba(159, 94, 183, 0.3);
  }
  .line-17 {
    width: 70px;
    height: 3px;
    margin: 1em 35px 0 0;
    background-color: #9f5eb7;
 }
 .line-9 {
    width: 70px;
    height: 3px;
    margin: 1em 0 0 8em;
    background-color: #e59d3f;
}
 .box-text{
   height: 8em;
 }
</style>
