<template>
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<style scoped>
div {
  margin-top: 4rem;
}
ul {
  justify-content: center;
  border-bottom: 10px solid black;
  width: 50%;
  max-width: 250px;
}
li {
  width: 30px;
  height: 30px;
  background-color: black;
  margin: 0 10px;
  border-radius: 50%;
  animation: jumping 0.7s linear infinite;
}
ul li:nth-child(1) {
  animation-delay: 0.45s;
}
ul li:nth-child(2) {
  animation-delay: 0.6s;
}
li:nth-child(3) {
  animation-delay: 0.3s;
}
li:nth-child(4) {
  animation-delay: 0;
}
li:nth-child(5) {
  animation-delay: 0.15s;
}
@keyframes jumping {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-80px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
