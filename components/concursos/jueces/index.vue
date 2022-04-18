<template>
  <div>
    <Seleccion scroll-id="seleccion" />
    <Puntajes scroll-id="puntajes" />
    <Proceso scroll-id="proceso" />
    <Conclusiones scroll-id="conclusiones" />
    <Lexico scroll-id="lexico" />
  </div>
</template>

<script>
import Seleccion from '~/components/concursos/jueces/Seleccion'
import Puntajes from '~/components/concursos/jueces/Puntajes'
import Proceso from '~/components/concursos/jueces/Proceso'
import Conclusiones from '~/components/concursos/jueces/Conclusiones'
import Lexico from '~/components/concursos/jueces/Lexico'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Seleccion,
    Puntajes,
    Proceso,
    Conclusiones,
    Lexico
  }
}
</script>
