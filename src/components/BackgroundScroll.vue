<template>
  <div></div>
</template>
<style scoped>
div {
  width: 100%;
  height: 100vh;
  max-height: 400px;
  border: 1px solid red;
  background-image: url('@/assets/images/goofyBg.png');
  background-position: 0, 0;
  animation: animated-pattern 30s linear infinite;
}
@keyframes animated-pattern {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 600px;
  }
}
</style>
