<template>
  <section :id="scrollId" class="hero is-fullheight">
    <div class="hero-body px-0">
      <div class="container">
        <h1 class="title is-2 has-text-centered">
          Glosario
        </h1>
        <div class="my-4 has-background-white px-6 my-5 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                🏛️
                <span class="is-size-5">Procuración General de la Nación</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                Cargo ocupado por quien ejerce la titularidad del Ministerio Público Fiscal, y por ende es responsable de su funcionamiento.
              </p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 my-5 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                👩
                <span class="is-size-5">Tribunal Evaluador</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                Conjunto de personas encargadas de examinar a las y los candidatos que se presentan al concurso.
              </p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 my-5 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                ✏️
                <span class="is-size-5">Prueba de oposición</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>Examen escrito</p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 my-5 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                📖️️
                <span class="is-size-5">Evaluación de Antecedentes</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>Evaluación del CV de los y las postulantes</p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 my-5 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                💼
                <span class="is-size-5">Impugnación</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                Apelación por la nota del examen o la evaluación de los antecedentes
              </p>
            </div>
          </div>
        </div>
        <div class="my-4 has-background-white px-6 my-5 py-5">
          <div class="columns">
            <div class="column is-4">
              <h5 class="title is-4">
                ⚖️
                <span class="is-size-5">Dictamen vinculante</span>
              </h5>
              <!-- <h5 class="subtitle is-5">
              </h5> -->
            </div>
            <div class="column is-8">
              <p>
                La decisión del Tribunal Evaluador presentada una vez finalizado el concurso es obligatoria para la Procuración General de la Nación
              </p>
            </div>
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
