<template>
  <div class="circle">
    <a href="#"><i class="fab fa-android"></i></a>
  </div>
</template>
<style scoped>
.circle {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: #58ea00;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  font-size: 48px;
  position: relative;
  transition: all 0.25s;
  cursor: pointer;
}
.circle:before,
.circle:after {
  content: '';
  position: absolute;
  left: -20px;
  top: -20px;
  right: -20px;
  bottom: -20px;
  border: 1px solid #58ea00;
  border-radius: 50%;
  animation: pulsing 1.5s linear infinite;
}
.circle:after {
  animation-delay: 0.5s;
}
.circle:hover {
  background-color: black;
}
.circle:hover:after,
.circle:hover:before {
  border-color: black;
}

i {
  font-size: 4rem;
}
a {
  color: white;
}

@keyframes pulsing {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
