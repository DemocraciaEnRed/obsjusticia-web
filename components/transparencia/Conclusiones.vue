<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h4 class="title h4-imp is-uppercase is-2 is-700 is-spaced">
          Conclusiones
        </h4>
        <br>
        <h1 class="title sub-chivo  is-3  is-spaced">
          Sobre transparencia pasiva
        </h1>
        <br>
        <div class="columns is-centered is-multiline px-6 mx-6">
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-wifi has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              La Corte Suprema de Justicia de la Nación es el único sujeto obligado que no cuenta con medios electrónicos para realizar solicitudes de acceso a la información pública.
            </p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-history has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              El CMN y la CSJN respondieron más de un 50% de las solicitudes dentro del plazo de 15 días hábiles establecido por la ley. A su vez, contestaron más de un 15% de los pedidos recibidos en un plazo mayor a 30 días hábiles.
            </p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-reply-all has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              El PJ y MP cuentan con un nivel de respuesta de los pedidos de acceso a la información pública que supera el 90% de los casos.
            </p>
          </div>
          <div class="column is-6">
            <h1 class="title is-4 is-700">
              <i class="fas fa-poll has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              El tipo de información más solicitada al CMN y a la CSJN son estadísticas judiciales e información sobre sus autoridades y personal.
            </p>
          </div>
          <div class="column is-6">
            <h1 class="title is-4 is-700">
              <i class="fas fa-hourglass-end has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              El MPF y MPD respondieron el 100% de las solicitudes recibidas dentro del plazo de 15 días hábiles establecido por la ley.
            </p>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 class="title es-chivo fs-24 is-uppercase  is-3  is-spaced">
          Sobre transparencia activa
        </h1>
        <br>
        <div class="columns is-centered is-multiline">
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-exclamation-triangle has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              Ninguno de los sujetos obligados publica las declaraciones juradas patrimoniales de sus integrantes para su descarga directa.
            </p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-file-excel has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              La CSJN no publica información sobre permisos, concesiones y autorizaciones otorgados, informes de auditorías y la información sobre cómo y dónde se realiza una solicitud de información pública.
            </p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-random has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              El CMN no publica información sobre transferencias,  permisos, concesiones y autorizaciones otorgados y los trámites y procedimientos que se realicen ante el organismo.
            </p>
          </div>
          <div class="column is-6">
            <h1 class="title is-4 is-700">
              <i class="fas fa-poll has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              Ninguno de los sujetos obligados publica de forma completa la información sobre su presupuesto y contrataciones.
            </p>
          </div>
          <div class="column is-6">
            <h1 class="title is-4 is-700">
              <i class="fas fa-copy has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              Ni el MPD ni el MPF publican informes de auditoría.
            </p>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 class="title is-uppercase is-3 es-chivo is-spaced">
          Sobre órganos garantes
        </h1>
        <br>
        <div class="columns is-centered">
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-balance-scale has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              La Corte Suprema de Justicia de la Nación no creó una Agencia de Acceso a la Información Pública, incumpliendo con lo establecido en la ley 27.275.
            </p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-search has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              Únicamente las reglamentaciones de los órganos garantes del MPD y CMN prevén convocatorias abiertas para la designación de su autoridad.
            </p>
          </div>
          <div class="column is-4">
            <h1 class="title is-4 is-700">
              <i class="fas fa-exclamation-triangle has-text-orange fa-2x" />
            </h1>
            <p class="fs-18 es-raleway">
              La reglamentación del MPF es la única que contiene garantías contra la remoción arbitraria de su titular.
            </p>
          </div>
        </div>
      </div>
    </div>
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
<style scoped>
  i{
    color: #3157AC !important;
  }
</style>
