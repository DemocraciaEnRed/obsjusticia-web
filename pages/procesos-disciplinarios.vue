<template>
  <section>
    <section class="section">
      <div class="my-3 py-6" />
      <div class="container">
        <div class="columns is-centered my-6">
          <div class="column is-8">
            <div class="has-text-centered">
              <h1 class="title is-2">
                Procesos disciplinarios a jueces y juezas
              </h1>
              <h1 class="subtitle is-3">
                Te vamos a mostrar cómo funcionan los procesos de denuncias a jueces de la Nación
              </h1>
              <br>
              <p><i class="far fa-calendar fa-3x mb-2"/></p>
              <p class="is-size-4"><b>22 AÑOS</b></p>
            </div>
            <hr class="has-background-black">
            <div class="is-clearfix">
              <p class="is-pulled-left">
                1998
              </p>
              <p class="is-pulled-right">
                2020
              </p>
            </div>
            <div class="columns mt-6 is-centered">
              <div class="column is-2">
                <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                <span class="is-700 is-size-3 color-green">3370</span><br><span class="is-400">DESESTIMADAS<br></span>
              </div>
              <div class="column is-2">
                <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                <span class="is-700 is-size-3 color-green">245</span><br><span class="is-400">CADUCADAS<br></span>
              </div>
              <div class="column is-2">
                <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                <span class="is-700 is-size-3 color-green">42</span><br><span class="is-400">SANCIONES<br></span>
              </div>
              <div class="column is-2">
                <div class="mb-4" style="height:50px;width:50px;background-color:#CACACA;border-radius:500px;" />
                <span class="is-700 is-size-3 color-green">36</span><br><span class="is-400">JUICIOS PÓLITICOS<br></span>
              </div>
            </div>
            <div class="buttons is-centered mt-6">
              <a href="#graphs" class="button is-primary">IR A LOS GRÁFICOS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="overlay-graphs">
      <a href="#graphs" class="go-fullscreen button is-light"><i class="fas fa-expand" />&nbsp;&nbsp;Centrar</a>
      <div class="the-buttons buttons is-centered">
        <a href="#lexico" class="button is-primary">Léxico para no abogades</a>
        <a href="#fuente" class="button is-light">Fuente</a>
        <a href="#creditos" class="button is-light">Creditos</a>
      </div>
      <iframe id="graphs" src="https://democraciaenred.github.io/obsjusticia-graphs/" allowfullscreen class="the-graphs" loading="lazy" />
    </div>
    <div class="section specialbg">
      <img id="lexico" src="~/assets/img/001.png" class="image is-centered">
    </div>
    <div class="section specialbg">
      <img id="fuente" src="~/assets/img/002.png" class="image is-centered">
    </div>
    <div class="section specialbg">
      <img id="creditos" src="~/assets/img/003.png" class="image is-centered">
    </div>
  </section>
</template>

<script>

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.line {
display:inline-block;
width: 100px;
height: 6px;
margin: 1em 0em 2em 0em;
background-color: #00B1AF;
}
.count-number{
  line-height: normal;
}
.the-graphs{
  width: 100vw;
  height: 100vh;
}
.specialbg{
  background-color: #ebebeb;
}
.overlay-graphs{
  min-height: 100vh;
  width: 100vw;
  position:relative;
  .the-buttons{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
.go-fullscreen{
  position: absolute;
  top: 20px;
  right: 40px;
}
</style>
