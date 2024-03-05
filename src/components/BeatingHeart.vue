<template>
  <div class="heart">
    <p>Love</p>
  </div>
</template>
<style scoped>
.heart {
  margin: 4rem auto 4rem;
  background-color: #ff3838;
  position: relative;
  width: 100px;
  height: 100px;
  transform: rotate(45deg);
  animation: heartbeat 1.4s linear infinite;
}
.heart:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ff3838;
  transform: translateY(-50%);
  border-radius: 50%;
  z-index: -1;
}
.heart:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ff3838;
  transform: translateX(-50%);
  border-radius: 50%;
  z-index: -1;
}
p {
  color: hsl(0, 0%, 100%);
  font-size: 1.4em;
  margin: -20px -10px 0 0;
  z-index: 1;
  transform: rotate(-45deg);
}
@keyframes heartbeat {
  0% {
    transform: rotate(45deg) scale(1);
  }
  25% {
    transform: rotate(45deg) scale(1);
  }
  30% {
    transform: rotate(45deg) scale(1.4);
  }
  50% {
    transform: rotate(45deg) scale(1.2);
  }
  70% {
    transform: rotate(45deg) scale(1.4);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
}
</style>
