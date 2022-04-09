<template>
  <div class="picker-container">
    <div v-if="isPicking || this.value == 'judges'" v-on:click="updateContestType('judges')" class="columns type-container" v-bind:class="!isPicking ? 'icon-container' : 'icon-with-text judges-with-text'">
      <div class="column" v-bind:class="isPicking ? 'is-one-third' : ''">
        <img src="~/assets/img/concursos/jueces-logo.svg" class="image is-centered" width="40" alt="logo-jueces">
      </div>
      <span v-if="isPicking" class="column">Jueces y Juezas</span>
    </div>
    <div v-if="isPicking || this.value == 'attorneys'" v-on:click="updateContestType('attorneys')" class="columns type-container" v-bind:class="!isPicking ? 'icon-container' : 'icon-with-text attorneys-with-text'">
      <div class="column" v-bind:class="isPicking ? 'is-one-third' : ''">
        <img src="~/assets/img/concursos/fiscales-logo.svg" class="image is-centered" width="40" alt="logo-fiscales">
      </div>
      <span v-if="isPicking" class="column">Fiscales y Fiscalas</span>
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
.type-container{
  cursor: pointer;
  background: #C4C4C4;
  margin-bottom: 25px;
}
.icon-container{
  border-radius: 100%;
  width: 100%;
  height: 85px;
}
.image{
  height: 100%;
}
.icon-with-text{
  border-radius: 45px;
  width: 300px;
  height: 85px;
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
}
.judges-with-text{
  color: #467CF6;
}
.attorneys-with-text{
  color:#3157AC;
}
</style>
