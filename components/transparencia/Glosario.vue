<template>
  <section :id="scrollId" class="hero is-medium">
    <div class="hero-body px-0 has-text-centered">
      <div class="container">
        <h1 class="title is-2 is-700 is-spaced">
          Glosario
        </h1>
        </br>
        </br>
        <div class="content has-text-left">
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Transparencia Pasiva (TP)
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Obligación de las instituciones de entregar la información pública solicitada por las personas en forma completa, oportuna y en formatos electrónicos abiertos.
            </p>
          </div>
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Nivel de Respuesta (TP)
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Indicador que mide si los pedidos ingresados tuvieron una respuesta por parte del sujeto obligado.
            </p>
          </div>
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Cumplimiento de plazos (TP)
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Indicador que mide si las respuestas fueron realizadas dentro del plazo de 15 días establecido por la ley.
            </p>
          </div>
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Uso de prorroga (TP)
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Indicador que mide si los sujetos obligados hicieron uso del plazo de prórroga que prevé la ley para responder los pedidos de información.
            </p>
          </div>
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Notificacion de prorroga (TP)
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Indicador que mide si los sujetos obligados notificaron a las personas de que harían uso de la prórroga.
            </p>
          </div>
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Reclamos por incumplimiento (TP)
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Indicador que mide si los órganos garantes recibieron reclamos porque los sujetos obligados denegaron la entrega de información, entregaron información incompleta o no respondieron un pedido de información
            </p>
          </div>
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Transparencia Activa (TA):
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Obligación de las institucionese de publicar proactivamente la información establecida en la ley y cualquier otra de carácter relevante que se encuentre en su poder, en forma completa, actualizada y en formatos abiertos.
            </p>
          </div>
          <div class="definicion px-6 py-4 mb-5 columns">
            <p class="is-size-4 line-height-150 column is-one-quarter">
              Órganos Garantes:
            </p>
            <p class="is-size-5 line-height-150 has-text-weight-light mt-3">
              Organismos con autonomía funcional y con competencias y funciones idénticas a las de la Agencia de Acceso a la Información Pública que funciona en el ámbito del Poder Ejecutivo, para controlar el cumplimiento de la ley y resolver los reclamos ante la denegatoria de brindar información.
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

<style lang="scss" scoped>
.definicion{
  background-color: #f3efef !important;
}
</style>
