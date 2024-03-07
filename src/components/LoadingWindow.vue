<template>
  <div class="loading-window">
    <span class="s1"></span>
    <span class="s2"></span>
    <span class="s3"></span>
    <span class="s4"></span>
    <span class="s5"></span>
    <span class="s6"></span>
    <span class="s7"></span>
    <span class="s8"></span>
    <span class="s9"></span>
  </div>
</template>
<style scoped>
.loading-window {
  position: relative;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
span {
  width: 30px;
  height: 30px;
  position: relative;
}
span:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 20%;
  animation: loading 0.8s linear infinite;
}
.s4:before,
.s5:before,
.s6:before {
  animation-delay: 0.1s;
}
.s7:before,
.s8:before,
.s9:before {
  animation-delay: 0.2s;
}

@keyframes loading {
  0% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 0;
    height: 0;
  }
}
</style>
