<template>
<div class="">
    <scrollactive active-class="active" class="my-nav" :offset="0" :duration="1000" bezier-easing-value=".5,0,.35,1">
      <a href="#ley" class="scrollactive-item">Vacantes</a>
      <a href="#seleccion" class="scrollactive-item">Selección</a>
      <a href="#puntajes" class="scrollactive-item">Concursos</a>
      <a href="#proceso" class="scrollactive-item">Proceso</a>
      <!-- <a href="#conclusiones" class="scrollactive-item">Conclusiones</a> -->
      <a href="#lexico" class="scrollactive-item">Glosario</a>
      <a href="#articulos-relacionados" class="scrollactive-item">Artículos relacionados</a>
      <a href="#fuentes" class="scrollactive-item">Fuentes</a>
  </scrollactive>
</div>
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
    border-top: 1px #EC6961 solid;
    .scrollactive-item{
      display:inline-block;
      padding: 0px 10px 0px 0px;
      text-transform: uppercase;
      text-align: right;
      color: #6b6b6b;
      margin: 5px 0px;
      &.active{
      padding: 5px 5px 0px 5px;
        color: #EC6961;
        font-weight: 800;
        border-left: 5px solid #EC6961;
      }

    }
    .scrollactive-item:hover{
      // border-bottom: 1px dotted #3157ac;
      color:#3157ac;
    }
  }
  // @include mobile{
  //   .my-nav{
  //     width: 75%;
  //   }
  // }
</style>
