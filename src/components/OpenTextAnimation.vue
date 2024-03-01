<template>
  <div>
    <ul>
      <li>clo</li>
      <li><span>s</span><span>e</span></li>
    </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap');
div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Just Another Hand', cursive;
  overflow: hidden;
  background-color: hsl(0, 0%, 15%);
  padding: 3rem 0;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  color: white;
  cursor: pointer;
  width: auto;
}
ul li {
  font-size: 10em;
  transition: 0.5s;
}
ul:hover li {
  transform: rotate(180deg);
}
ul:hover li:last-child {
  transition-delay: 0.5s;
}
li span {
  display: inline-block;
  transition: 0.25s;
}
ul:hover li:last-child span:nth-child(2) {
  transform: rotate(180deg) translateY(-5px);
  transition-delay: 1s;
}
ul:hover li:last-child span:nth-child(1) {
  transform: rotate(90deg) translate(-10px, 20px);
  transition-delay: 1.5s;
}
</style>
