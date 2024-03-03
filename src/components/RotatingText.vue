<template>
  <div>
    <h1>I love CSS <span></span></h1>
  </div>
</template>
<style scoped>
div {
  height: 100vh;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 15%);
}
h1 {
  color: hsl(0, 0%, 100%);
  font-size: 4rem;
}
span:before {
  content: 'Transitions';
  text-transform: uppercase;
  color: yellow;
  animation: word-switch 5s infinite;
}
@keyframes word-switch {
  0% {
    content: 'transitions';
  }
  50% {
    content: 'animations';
  }
  100% {
    content: 'transforms';
  }
}
</style>
