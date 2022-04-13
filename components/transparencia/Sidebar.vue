<template>
  <scrollactive active-class="active" class="my-nav" :offset="0" :duration="1000" bezier-easing-value=".5,0,.35,1">
    <a href="#ley" class="scrollactive-item">Ley 27.275</a>
    <a href="#pedidos-informes" class="scrollactive-item">Solicitudes de información</a>
    <a href="#cumplimiento" class="scrollactive-item">Medición</a>
    <a href="#grafico-indices" class="scrollactive-item">Índice general</a>
    <a href="#grafico-cumplimiento" class="scrollactive-item">Índice T.A.</a>
    <a href="#grafico-desagregacion" class="scrollactive-item">Desagregación de indices</a>
    <a href="#informacion-adicional" class="scrollactive-item">Adicionales</a>
    <a href="#conclusiones" class="scrollactive-item">Conclusiones</a>
    <a href="#glosario" class="scrollactive-item">Glosario</a>
    <a href="#articulos-relacionados" class="scrollactive-item">Artículos relacionados</a>
    <a href="#fuentes" class="scrollactive-item">Fuentes y notas</a>
  </scrollactive>
</template>

<style lang="scss" scoped>
.my-nav{
  background-color: #F9F9F9;
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 10000;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 1.5rem;
  // -webkit-box-shadow: 0px 5px 2px 0px rgba(0,0,0,0.92);
  // box-shadow: 0px 5px 2px 0px rgba(0,0,0,0.92);
  border-top: 2px #3157ac solid;

  .scrollactive-item{
    display:inline-block;
    padding: 0px 10px 0px 0px;
    text-transform: uppercase;
    text-align: right;
    color: #6b6b6b;
    margin: 5px 0px;
    &.active{
    padding: 5px 5px 0px 5px;
      color: #3157ac;
      font-weight: 800;
      border-left: 5px solid #3157ac;
    }

  }
  .scrollactive-item:hover{
    // border-bottom: 1px dotted #3157ac;
    color:#3157ac;
  }
}
</style>
