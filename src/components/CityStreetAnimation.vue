<template>
  <div class="frame">
    <img class="car" src="@/assets/images/car.png" />
    <img class="motobike" src="@/assets/images/motobike.png" />
  </div>
</template>

<style scoped>
.frame {
  height: 100vh;
  position: relative;
  background-image: url('@/assets/images/bg.jpg');
  background-position: bottom left;
  animation: driving 30s linear infinite;
}
.car {
  max-width: 200px;
  position: absolute;
  bottom: 0;
  left: 10%;
}
.motobike {
  max-width: 140px;
  position: absolute;
  bottom: 0;
  left: 60%;
}
@keyframes driving {
  from {
    background-position: bottom left;
  }
  to {
    background-position: bottom right;
  }
}
</style>
