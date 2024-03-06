<template>
  <div class="cradle">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style scoped>
.cradle {
  display: flex;
  border-top: 10px solid black;
  max-width: 290px;
}
.cradle span {
  display: block;
  width: 3px;
  height: 300px;
  background-color: black;
  margin: 0 28px;
  position: relative;
  transform-origin: top;
}
.cradle span:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: black;
  transform: translateX(-50%);
}
.cradle span:first-child {
  animation: left-arm 2s ease-in infinite;
}
.cradle span:last-child {
  animation: right-arm 2s ease-in infinite 1s;
}
@keyframes left-arm {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(60deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes right-arm {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-60deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
