<template>
  <section class="section">
    <div class="image desktop is-hidden-mobile">
      <a href="https://causasdecorrupcion.org/" target="_blank" rel="Link a Causas de Corrupcion" style="display:block"></a>
    </div>
    <div class="image mobile is-hidden-tablet">
      <a href="https://causasdecorrupcion.org/" target="_blank" rel="Link a Causas de Corrupcion" style="display:block"></a>
    </div>
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

.desktop a, .mobile a {
  height: 100%;
  width: 100%;
}
</style>
