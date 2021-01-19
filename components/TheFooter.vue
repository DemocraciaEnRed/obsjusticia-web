<template>
  <div>
    <div class="footer-top">
      <div class="section pt-2 pb-6">
        <div class="container">
          <img src="~/assets/images/acij-logo.png" class="image mb-4">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-top{
  background-color: $dark;
  color: #FFF;
  padding-top: 60px;
  padding-bottom: 60px;
  .image{
    // max-width: 120px;
    margin: 0 auto;
    @media screen and (min-width: $tablet){
      margin: 0 auto 0 0;
    }
  }
 }
 .footer-bot{
   background-color: #20424f;
   color: white;
   height: 5em;
 }
</style>
