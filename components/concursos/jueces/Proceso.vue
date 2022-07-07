<template>
  <section :id="scrollId" class="hero">
            <b-collapse
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide"
            :open="false"
            >
            <template #trigger>
                <div
                    class="panel-heading"
                    role="button"
                    aria-controls="contentIdForA11y2"
                    >
                  <div class="is-flex-desktop columns is-mobile hero-config is-justify-content-center is-align-content-center is-align-items-center">
                    <span class="icon is-align-self-center m-6 is-hidden-mobile"><i class="fas fa-solid fa-arrow-down has-text-white"></i></span>
                      <div class="hero-body column is-10 is-size-4 is-size-6-mobile has-text-centered">
                       ¿Cómo se seleccionan jueces y juezas?
                      </div>
                    <span class="icon is-align-self-center m-6"><i class="fas fa-solid fa-arrow-down has-text-white"></i></span>
                  </div>
                </div>
            </template>
            <div class="panel-block">
              <div class="px-0 has-text-centered">
                <div class="px-0 has-text-centered">
                    <div class="container">
                      <!-- <h3 class="is- is-700 is-spaced line-height-150">
                        ¿Cómo se seleccionan jueces y juezas en nuestro país?
                      </h3> -->
                      <h1 class="subtitle is-4 my-6 line-height-150">
                        La siguiente infografía muestra los pasos que se deben seguir para llegar a una designación:
                      </h1>
                      <img src="~/assets/img/concursos/InfografiaJuecesDesktop.svg" class="image is-centered is-hidden-mobile my-6" alt=" infografía que muestra los pasos que se deben seguir para llegar a una designación:">
                      <img src="~/assets/img/concursos/InfografiaJuecesMobile.svg" class="image is-centered is-fullwidth is-hidden-tablet my-6" alt=" infografía que muestra los pasos que se deben seguir para llegar a una designación:">
                    </div>
                  </div>
              </div>
            </div>
        </b-collapse>
  </section>
</template>
<script>
export default {
  props: {
    scrollId: {
      type: String,
      required: false,
      default: () => 'default-id'
    }
  }
}
</script>

<style  lang="scss" scoped>
.hero-config{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #FFFFFF;
    max-height: 60px;
    border-radius: 8px;

  background-color: #FF6F6F;
  border-radius: 4.00556px;
}
  .panel-heading{
    background-color: inherit !important;
  }
.container img {
  object-fit: scale-down !important;
}

.container img svg{
  width: 80% !important;
}

@include mobile{
  .hero{
    width: 100% !important;
  }
  .hero-config {
    width: auto ;
    height: 200px;
    padding: 0px 10px;
  }
}
</style>
