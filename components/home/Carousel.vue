<template>
  <div class="bg-container">
    <!-- <img
        :key="activeBg"
        :src="activeBg"
        data-toggle="tooltip"
        data-placement="bottom"
        title="goTop"
        class="imgBg"
        alt=""
      > -->
    <!-- <transition name="fade">
      <div v-for="(block, index) in blocks" :key="`img-${index}`" class="imgBg-container">
        <div class="imgBg" v-if="index == activeBlock" :style="{backgroundImage: url(block.background)}"></div>
      </div>
    </transition> -->
    <transition name="fade">
      <!-- // eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <div :key="activeBlock" class="imgBg" :style="{backgroundImage: `url(${blocks[activeBlock].background})`}" />>
    </transition>
    <div class="container">
      <div class="columns is-vcentered block-item">
        <div class="column">
          <!-- <figure class="image is-96x96 mb-4">
            <img class="is-rounded" src="~/assets/images/ojos.gif">
          </figure> -->
          <img src="~/assets/img/logo-white.svg" class="iamge" width="480">
          <!-- <div class="upper-logo-container is-inline-block">
            <span class="is-raleway is-500 has-text-white is-size-5">Estamos observando a la justicia</span>
          </div>
          <br>
          <div class="lower-logo-container is-inline-block">
            <h2 class="subtitle is-3 has-text-white my-2">
              <span class="is-600">JusTA</span><br>Plataforma por una justicia<br>transparente y abierta
            </h2>
          </div> -->
        </div>
        <div class="column is-5 is-align-self-flex-end pb-0">
          <!-- <div class="block-text-container content has-text-right">
            <h1 class="subtitle is-3 has-text-white">
              ¿Qué es<br><b class="is-800">Iniciativa jusTa?</b>
            </h1>
            <p class="has-text-white">
              Conocé información en tiempo real sobre los procesos mediante los cuales se eligen los jueces y fiscales, los resultados del sistema de sanciones, la transparencia y rendición de cuentas de  instituciones judiciales.
            </p>
            <div class="buttons is-right">
              <router-link to="/quienes-somos" class="button is-light is-rounded ">
                Ver más&nbsp;<i class="fas fa-arrow-right" />
              </router-link>
            </div>
          </div> -->
          <b-carousel
            v-model="activeBlock"
            :indicator="true"
            :indicator-inside="true"
            indicator-position="is-bottom"
            :indicator-background="false"
            indicator-style="is-dots"
            :interval="8000"
          >
            <b-carousel-item v-for="(block, index) in blocks" :key="`block-${index}`">
              <Block :block="block" />
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Block from './carousel/Block.vue'
export default {
  components: {
    Block
  },
  data () {
    return {
      activeBlock: 0,
      blocks: [
        {
          title: '¿Qué es Iniciativa justa?',
          content: 'Conocé información en tiempo real sobre los procesos mediante los cuales se eligen los jueces y fiscales, los resultados del sistema de sanciones, la transparencia y rendición de cuentas de  instituciones judiciales.',
          urlMore: 'https://google.com',
          background: '/bloques/bloque01.png',
          isArticle: false
        },
        {
          title: 'Articulo destacado',
          content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          urlMore: 'https://google.com',
          background: '/bloques/bloque02.png',
          isArticle: true
        }

      ]
    }
  },
  computed: {
    activeBg () {
      return this.blocks[this.activeBlock].background
    },
    theBlocks () {
      return this.blocks
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-container{
//   background-size: cover;
//   background-position: center center;
//   -webkit-transition: background 1s linear;
// transition: background 1s linear;
position: relative;
// overflow: hidden;
}
.imgBg{
  background-size: cover;
  background-position: center center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.block-item{
  padding: 30px;
  // padding-bottom: 200px;

  @media screen and (min-width: $tablet){
  padding-top: 140px;
  min-height: 700px;
  padding: 0;
  padding-bottom: 150px;
  }
}
.block-text-container{
  padding: 30px 40px;
  background-color: #400755b0;
  background-blend-mode: multiply;
}
.upper-logo-container{
  padding: 2px 8px;
  // letter-spacing: 1px;
  background-color: #000;
}
// .lower-logo-container{
//   padding: 4px 12px;
//   font-size: 3.2rem;
//   background-color: #FFF;
// }
// .imgBg{
//   position:absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   max-width:100%;
//   max-height:100%;
//   height: auto;
//   width: auto;
//   z-index: 0;
// }
.container{
  z-index: 10;
}
</style>
