<template>
  <div class="container-box">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="text">background animation</div>
  </div>
</template>
<style scoped>
.container-box {
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  border: 1px solid red;
  padding: 0;
  margin: 0;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  text-transform: uppercase;
  font-size: 2rem;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 55%;
}
.square {
  position: absolute;
  bottom: -100px;
  background-color: #2f2f2f;
  animation: boxes 10s ease-in-out infinite;
}
.square:nth-child(1) {
  width: 75px;
  height: 75px;
  left: 7%;
}
.square:nth-child(2) {
  width: 65px;
  height: 65px;
  left: 15%;
  animation-delay: 4s;
}
.square:nth-child(3) {
  width: 80px;
  height: 80px;
  left: 45%;
  animation-delay: 8s;
}
.square:nth-child(4) {
  width: 70px;
  height: 70px;
  left: 55%;
  animation-delay: 2s;
}
.square:nth-child(5) {
  width: 60px;
  height: 60px;
  left: 27%;
  animation-delay: 6s;
}
.square:nth-child(6) {
  width: 55px;
  height: 55px;
  left: 60%;
  animation-delay: 4s;
}
.square:nth-child(7) {
  width: 25px;
  height: 25px;
  left: 85%;
  animation-delay: 9s;
}
.square:nth-child(8) {
  width: 30px;
  height: 30px;
  left: 75%;
  animation-delay: 4s;
}
.square:nth-child(9) {
  width: 40px;
  height: 40px;
  left: 15%;
  animation-delay: 7s;
}
@keyframes boxes {
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 100%;
    transform: rotate(180deg);
    opacity: 0;
  }
}
</style>
