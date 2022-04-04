<template>
  <div class="picker-container">
    <div v-if="isPicking || this.value == 'judges'" v-on:click="updateContestType('judges')" class="icon-container">
      <img src="~/assets/img/concursos/jueces-logo.svg" class="image is-centered" width="50" alt="logo-jueces">
    </div>
    <div v-if="isPicking || this.value == 'attorneys'" v-on:click="updateContestType('attorneys')" class="icon-container">
      <img src="~/assets/img/concursos/fiscales-logo.svg" class="image is-centered" width="50" alt="logo-fiscales">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      isPicking: false,
      contestType: ''
    }
  },
  methods: {
    updateContestType (newContestType) {
      this.toggleIsPicking()
      this.$emit('input', newContestType)
    },
    toggleIsPicking () {
      this.isPicking = !this.isPicking
    }
  }
}
</script>

<style lang="scss" scoped>
.picker-container{
  position: sticky;
  top: 50%;
  left: 20%;
}
.icon-container{
  background: #C4C4C4;
  border-radius: 100%;
  height: 80px;
  width: 80px;
  margin-bottom: 15px;
}
.image{
  height: 100%;
}
</style>
