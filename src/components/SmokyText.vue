<template>
  <ul>
    <li>S</li>
    <li>M</li>
    <li>O</li>
    <li>K</li>
    <li>Y</li>
  </ul>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
  color: hsl(0, 0%, 15%);
  font-size: 100px;
  font-weight: bold;
  letter-spacing: 10px;
  transition: 2s;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
ul:hover li {
  transform: rotate(45deg) translateY(-200px);
  opacity: 0;
  filter: blur(20px);
}
li:nth-child(1) {
  transition-delay: 0;
}
li:nth-child(2) {
  transition-delay: 0.4s;
}
li:nth-child(3) {
  transition-delay: 0.8s;
}
li:nth-child(4) {
  transition-delay: 1.2s;
}
li:nth-child(5) {
  transition-delay: 1.6s;
}
</style>
