<template>
  <div class="loading-line"></div>
</template>
<style scoped>
.loading-line {
  width: 300px;
  height: 3px;
  background-color: black;
  animation: line 1s linear infinite alternate;
}
@keyframes line {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  45% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
