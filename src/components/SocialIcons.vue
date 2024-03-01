<template>
  <div class="icon-container">
    <a href="#" class="icon">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="#" class="icon">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="icon">
      <i class="fab fa-google"></i>
    </a>
    <a href="#" class="icon">
      <i class="fab fa-youtube"></i>
    </a>
    <a href="#" class="icon">
      <i class="fab fa-instagram"></i>
    </a>
  </div>
</template>

<style scoped>
.icon-container {
  display: flex;
  text-align: center;
  margin: 0 auto;
}
.icon {
  width: 90px;
  height: 90px;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 30%;
  color: #10ac84;
  box-shadow: 0 5px 15px -5px #00000070;
  position: relative;
  overflow: hidden;
}
.icon i {
  line-height: 90px;
  font-size: 25px;
  transition: all 0.2s;
}
.icon:hover i {
  transform: scale(1.3);
  color: #f1f1f1;
}
.icon:before {
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  background-color: #10ac84;
  left: -110%;
  top: 90%;
  transform: rotate(45deg);
}
.icon:hover:before {
  animation: animations 0.7s 1 forwards;
}
@keyframes animations {
  0% {
    left: -110%;
    top: 90%;
  }
  50% {
    left: 15%;
    top: -35%;
  }
  100% {
    left: -10%;
    top: -10%;
  }
}
</style>
