<template>
  <div class="square-container">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style scoped>
.square-container {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  animation: animate 1s linear infinite;
  transform: rotate(45deg);
}
span {
  position: absolute;
  width: 50px;
  height: 50px;
  animation: rotate 0.5s linear infinite;
  border: 1px solid white;
}
span:nth-child(1) {
  top: 0;
  left: 0;
  background-color: hsl(0, 0%, 15%);
}
span:nth-child(2) {
  top: 0;
  right: 0;
  background-color: hsl(0, 0%, 15%);
}
span:nth-child(3) {
  bottom: 0;
  left: 0;
  background-color: hsl(0, 0%, 15%);
}
span:nth-child(4) {
  bottom: 0;
  right: 0;
  background-color: hsl(0, 0%, 15%);
}
@keyframes animate {
  0% {
    width: 100px;
    height: 100px;
  }
  10% {
    width: 100px;
    height: 100px;
  }
  50% {
    width: 120px;
    height: 120px;
  }
  90% {
    width: 100px;
    height: 100px;
  }
  100% {
    width: 100px;
    height: 100px;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
</style>
