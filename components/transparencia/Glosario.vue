<template>
  <section class="section is-medium px-0 has-text-centered">
    <h1 :id="scrollId" class="title is-4 is-700 is-spaced">
      Glosario
    </h1>
    <div class="content">
      <p><b>Nivel de Respuesta (TP):</b> Es un componente de Transparencia pasiva y mide si los pedidos ingresados tuvieron una respuesta por parte del sujeto obligado.</p>
      <p><b>Cumplimiento de plazos (TP):</b> Es un componente de Transparencia pasiva y  mide si las respuestas fueron realizadas dentro del plazo de 15 días establecido por la ley.</p>
      <p><b>Uso de prórroga (TP):</b> Es un componente de Transparencia pasiva y  mide si los sujetos obligados hicieron uso de la prórroga de plazo que la ley prevé.</p>
      <p><b>Notificación de prórroga (TP):</b> Es un componente de Transparencia pasiva y mide si los sujetos obligados notificaron a las personas de que harían uso de la prórroga, como les ordena la ley.</p>
      <p><b>Reclamos por incumplimiento (TP):</b> Es un componente de Transparencia pasiva y  mide si los órganos garantes recibieron reclamos ante la denegatoria de brindar información o el silencio por parte de los sujetos obligados. </p>
      <p><b>Cantidad de pedidos:</b> contabiliza la cantidad cantidad de pedidos recibidos durante el período analizado </p>
      <p><b>Reclamos recibidos:</b> contabiliza la cantidad de reclamos interpuestos ante la denegatoria de brindar información por parte de los sujetos obligados. </p>
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
