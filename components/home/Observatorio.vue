<template>
  <section class="section">
    <div class="image desktop is-hidden-mobile" />
    <div class="image mobile is-hidden-tablet" />
  </section>
</template>

<style lang="scss" scoped>
section{
  padding: 0;
}
.image{
  background-size: cover;
}
.desktop{
  height: 400px;
  background-image: url("~/assets/img/obscorrupcion.svg");
}
.mobile{
  height: 250px;
  background-image: url("~/assets/img/obscorrupcion-mobile.svg");
}
</style>
