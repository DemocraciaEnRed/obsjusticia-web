<template>
  <div>
    <TheNavbar class="is-hidden-desktop" />
    <TheNavbarIndex class="is-hidden-touch" :logoDark="false"/>
    <nuxt />
    <TheFooter :dark='true'/>
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheNavbarIndex from '~/components/TheNavbarIndex.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheNavbar,
    TheNavbarIndex,
    TheFooter
  }
}
</script>
