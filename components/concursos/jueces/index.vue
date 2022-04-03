<template>
  <div>
    <Seleccion scroll-id="seleccion" />
    <Vacantes scroll-id="vacantes" />
    <Proceso scroll-id="proceso" />
    <Puntajes scroll-id="puntajes" />
    <Influencias scroll-id="influencias" />
    <Conclusiones scroll-id="conclusiones" />
    <Lexico scroll-id="lexico" />
  </div>
</template>

<script>
import Seleccion from '~/components/concursos/jueces/Seleccion'
import Vacantes from '~/components/concursos/jueces/Vacantes'
import Proceso from '~/components/concursos/jueces/Proceso'
import Puntajes from '~/components/concursos/jueces/Puntajes'
import Influencias from '~/components/concursos/jueces/Influencias'
import Conclusiones from '~/components/concursos/jueces/Conclusiones'
import Lexico from '~/components/concursos/jueces/Lexico'

export default {
  name: 'QuienesSomos',
  layout: 'default-darknav',
  components: {
    Seleccion,
    Vacantes,
    Proceso,
    Puntajes,
    Influencias,
    Conclusiones,
    Lexico
  }
}
</script>
