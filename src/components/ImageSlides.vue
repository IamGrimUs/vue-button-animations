<template>
  <div class="slider"></div>
</template>
<style scoped>
.slider {
  width: 100%;
  max-width: 800px;
  height: 400px;
  background: url('@/assets/images/img-1.jpg');
  margin: 0 auto;
  animation: change-bg 10s linear infinite;
}
@keyframes change-bg {
  0% {
    background: url('@/assets/images/img-1.jpg');
  }
  20% {
    background: url('@/assets/images/img-1.jpg');
  }
  25% {
    background: url('@/assets/images/img-2.jpg');
  }
  45% {
    background: url('@/assets/images/img-2.jpg');
  }
  50% {
    background: url('@/assets/images/img-3.jpg');
  }
  70% {
    background: url('@/assets/images/img-3.jpg');
  }
  75% {
    background: url('@/assets/images/img-4.jpg');
  }
  100% {
    background: url('@/assets/images/img-4.jpg');
  }
}
</style>
