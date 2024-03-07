<template>
  <div class="loader">
    <div class="outer"></div>
    <div class="middle"></div>
    <div class="inner"></div>
    <div class="dot"></div>
  </div>
</template>
<style scoped>
.loader {
  width: 200px;
  height: 200px;
  position: relative;
}
.outer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-left: 5px solid #eb4d4b;
  border-right: 5px solid #eb4d4b;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}

.middle {
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  bottom: 30px;
  border-left: 5px solid #218c74;
  border-right: 5px solid #218c74;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 50%;
  animation: rotate 1s linear infinite reverse;
}
.inner {
  position: absolute;
  top: 60px;
  left: 60px;
  right: 60px;
  bottom: 60px;
  border-left: 5px solid #ccae62;
  border-right: 5px solid #ccae62;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}
.dot {
  background-color: black;
  border-radius: 50%;
  top: 90px;
  left: 90px;
  right: 90px;
  bottom: 90px;
  position: absolute;
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
