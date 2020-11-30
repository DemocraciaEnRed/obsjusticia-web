<template>
  <div>
    <TheNavbar />
    <div class="section">
      <div class="container">
        <div class="columns is-centered mb-6">
          <div class="column is-8">
            <div class="content">
              <nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>
