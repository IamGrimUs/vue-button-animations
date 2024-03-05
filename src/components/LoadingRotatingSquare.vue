<template>
  <div class="container">
    <div class="loader"></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 15%);
  padding: 4rem 0;
  perspective: 200px;
}
.loader {
  width: 100px;
  height: 100px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 12px;
  animation: loading 4s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotateX(0) rotateY(0);
  }

  50% {
    transform: rotateX(0) rotateY(180deg);
  }

  100% {
    transform: rotateX(180deg) rotateY(180deg);
  }
}
</style>
