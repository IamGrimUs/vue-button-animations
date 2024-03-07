<template>
  <div class="loading-circle">
    <div class="text">loading</div>
    <div class="circle"></div>
  </div>
</template>
<style scoped>
.loading-circle {
  position: relative;
  width: 200px;
  height: 200px;
}
.circle {
  width: 100%;
  height: 100%;
  border-left: 4px solid #262626;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}
.text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 200px;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
