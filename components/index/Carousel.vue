<template>
  <b-carousel>
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <div class="bg-container" :style="{ backgroundImage: `url(${carousel.image})`}">
        <div class="columns">
          <div class="column is-half is-flex is-justify-content-center is-align-content-center">
            <div class="container-column1">
              <div class="Rectangle-5">
                <h5 class="text-observando">
                  {{ carousel.text }}
                </h5>
              </div>
              <div class="rectangle-401">
                <h4 class="text-iniciativa">
                  {{ carousel.text2 }}
                </h4>
              </div>
            </div>
          </div>
          <div class="column is-flex is-justify-content-center is-align-content-center">
            <div class="filtroMultiply-violeta">
              <div class="Qu-es-Iniciativa-jusTa">
                <span>
                  ¿Qué es
                  Iniciativa jusTa?
                </span>
              </div>
              <div class="Conoc-informacin-en-tiempo-real-sobre-los-proces">
                Conocé información en tiempo real sobre los procesos mediante los cuales se eligen los jueces y fiscales, los resultados del sistema de sanciones, la transparencia y rendición de cuentas de  instituciones judiciales.
              </div>
              <div>
                <b-button rounded type="is-light" size="is-medium">
                  Ver Mas
                  <b-icon icon="arrow-right" size="is-small" />
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
import headerImg from './../../assets/images/header_img.png'
export default {
  data () {
    return {
      carousels: [
        { text: 'Estamos observando a la justicia', text2: 'Iniciativa Justa', color: 'primary', image: headerImg }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-container{
  background-size: cover;
  height: 30em;
  object-fit: contain;

}
.columns{
  height: 100%;
  width: 80%;
  margin: auto;
}
.rectangle-401{
  background-color: #ffffff;
  width: 400px;
  height: 69px;
  margin: 0px 392px 148px 101px;
  padding: 18px 15px 10px 11px;
}

.text-iniciativa{
  width: 374px;
  height: 41px;
  font-family: Raleway;
  font-size: 45px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 3.6px;
  text-align: center;
}

.text-observando{
  width: 349px;
  height: 30px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: left;
  color: #ffffff;
}

.Rectangle-5 {
  width: 371px;
  height: 30px;
  margin: 31px 421px 0 101px;
  padding: 0 11px;
  background-color: #6f3285;
}

.container-column1{
  margin-top: 10em;
}

.filtroMultiply-violeta {
  width: 547px;
  height: 357px;
  margin: 91px 0 0 392px;
  padding: 62px 58px 35px 37px;
  background-color: #6f3285;
  background-blend-mode: multiply;
  opacity: 0.9;
}

.Qu-es-Iniciativa-jusTa {
  width: 314px;
  height: 69px;
  font-family: Chivo;
  font-size: 25px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
}

.Qu-es-Iniciativa-jusTa .text-style-1 {
  font-weight: normal;
}

.Conoc-informacin-en-tiempo-real-sobre-los-proces {
  width: 452px;
  font-family: Chivo;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
}
</style>
