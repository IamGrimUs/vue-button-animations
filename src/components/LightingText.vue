<template>
  <div>
    <ul>
      <li>L</li>
      <li>I</li>
      <li>G</li>
      <li>H</li>
      <li>T</li>
      <li>I</li>
      <li>N</li>
      <li>G</li>
    </ul>
  </div>
</template>

<style scoped>
li {
  animation: lighting 2s linear infinite;
}
li:nth-child(1) {
  animation-delay: 0;
}
li:nth-child(2) {
  animation-delay: 0.1s;
}
li:nth-child(3) {
  animation-delay: 0.2s;
}
li:nth-child(4) {
  animation-delay: 0.3s;
}
li:nth-child(5) {
  animation-delay: 0.4s;
}
li:nth-child(6) {
  animation-delay: 0.5s;
}
li:nth-child(7) {
  animation-delay: 0.6s;
}
li:nth-child(8) {
  animation-delay: 0.7s;
}
@keyframes lighting {
  0% {
    color: #484848;
    text-shadow: none;
  }
  90% {
    color: #484848;
    text-shadow: none;
  }
  100% {
    color: #fff900;
    text-shadow:
      0 0 7px #fff900,
      0 0 50px #ff6c00;
  }
}
</style>
