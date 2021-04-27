<template>
  <section class="section is-medium px-0 has-text-centered">
    <h1 class="title is-2 is-700 is-spaced">
      Conclusiones
    </h1>
    <h1 :id="scrollId" class="title is-4 is-700 is-spaced">
      Sobre transparencia pasiva
    </h1>
    <br>
    <div class="columns is-centered is-multiline">
      <div class="column is-4">
        <h1 class="title is-4 is-700">
          <i class="fas fa-wifi has-text-orange fa-2x" />
        </h1>
        <p>La Corte Suprema de Justicia de la Nación es el único sujeto obligado que no cuenta con medios electrónicos para realizar solicitudes de acceso a la información pública.</p>
      </div>
      <div class="column is-4">
        <h1 class="title is-4 is-700">
          <i class="fas fa-history has-text-orange fa-2x" />
        </h1>
        <p>El CMN y la CSJN respondieron más de un 50% de las solicitudes dentro del plazo de 15 días hábiles establecido por la ley. A su vez, contestaron más de un 15% de los pedidos recibidos en un plazo mayor a 30 días hábiles.</p>
      </div>
      <div class="column is-4">
        <h1 class="title is-4 is-700">
          <i class="fas fa-reply-all has-text-orange fa-2x" />
        </h1>
        <p>El PJ y MP cuentan con un nivel de respuesta de los pedidos de acceso a la información pública que supera el 90% de los casos.</p>
      </div>
      <div class="column is-6">
        <h1 class="title is-4 is-700">
          <i class="fas fa-poll has-text-orange fa-2x" />
        </h1>
        <p>El tipo de información más solicitada al CMN y a la CSJN son estadísticas judiciales e información sobre sus autoridades y personal.</p>
      </div>
      <div class="column is-6">
        <h1 class="title is-4 is-700">
          <i class="fas fa-hourglass-end has-text-orange fa-2x" />
        </h1>
        <p>El MPF y MPD respondieron más del  90% de las solicitudes recibidas dentro del plazo de 15 días hábiles establecido por la ley. Los pedidos restantes fueron contestados dentro de los 30 días hábiles que plantea como máximo la ley.</p>
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
