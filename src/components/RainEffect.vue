<template>
  <div class="rain-frame">
    <div class="rain"></div>
  </div>
</template>
<style scoped>
.rain-frame {
  width: 100%;
  height: 500px;
  background: url('@/assets/images/rain.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.rain {
  height: 100%;
  background: url('@/assets/images/rain.png');
  animation: rain 0.4s linear infinite;
}
@keyframes rain {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 20% 100%;
  }
}
</style>
