<template>
  <div id="b-jueces">
    <Seleccion scroll-id="seleccion" />
    <Puntajes scroll-id="puntajes" />
    <Proceso scroll-id="proceso" />
    <!-- <Conclusiones scroll-id="conclusiones" /> -->
    <Lexico scroll-id="lexico" />
  </div>
</template>

<script>
import Seleccion from './Seleccion'
import Puntajes from './Puntajes'
import Proceso from './Proceso'
// import Conclusiones from './Conclusiones'
import Lexico from './Lexico'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Seleccion,
    Puntajes,
    Proceso,
    // Conclusiones,
    Lexico
  }
}
</script>
<style lang="sass" scoped>
</style>
