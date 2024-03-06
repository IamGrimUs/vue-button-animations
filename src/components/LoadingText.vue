<template>
  <div>
    <ul>
      <li>L</li>
      <li>o</li>
      <li>a</li>
      <li>d</li>
      <li>i</li>
      <li>n</li>
      <li>g</li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  justify-content: center;
}
li {
  text-transform: uppercase;
  font-size: 4rem;
  animation: loading 3s linear infinite;
}
li:nth-child(1) {
  animation-delay: 0;
}
li:nth-child(2) {
  animation-delay: 0.2s;
}
li:nth-child(3) {
  animation-delay: 0.4s;
}
li:nth-child(4) {
  animation-delay: 0.6s;
}
li:nth-child(5) {
  animation-delay: 0.8s;
}
li:nth-child(6) {
  animation-delay: 1s;
}
li:nth-child(7) {
  animation-delay: 1.2s;
}
@keyframes loading {
  0% {
    color: red;
    transform: translateX(-50px);
    letter-spacing: 20px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    letter-spacing: -20px;
    opacity: 1;
  }
  100% {
    color: blue;
    transform: translateX(50px);
    letter-spacing: 20px;
    opacity: 0;
  }
}
</style>
