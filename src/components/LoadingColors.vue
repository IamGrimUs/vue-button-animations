<template>
  <div class="loading-colors">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style scoped>
.loading-colors {
  width: 70px;
  display: flex;
}
span {
  width: 10px;
  height: 60px;
  margin: 0 1px;
  background-color: black;
  animation: loading 0.8s ease-in-out infinite;
}
span:nth-child(1) {
  background-color: #2eeca8;
  animation-delay: 0.2s;
}
span:nth-child(2) {
  background-color: #eade3d;
  animation-delay: 0.3s;
}
span:nth-child(3) {
  background-color: #55acee;
  animation-delay: 0.4s;
}
span:nth-child(4) {
  background-color: #ec902e;
  animation-delay: 0.5s;
}
span:nth-child(5) {
  background-color: #09b7bf;
  animation-delay: 0.6s;
}
span:nth-child(6) {
  background-color: #ea3d8c;
  animation-delay: 0.7s;
}
@keyframes loading {
  0% {
    transform: scaleY(0.1);
  }
  35% {
    transform: scaleY(1);
  }
  60%,
  100% {
    transform: scaleY(0.1);
  }
}
</style>
