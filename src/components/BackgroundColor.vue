<template>
  <div class="color-change">
    <h1>changing<br />background color</h1>
  </div>
</template>
<style scoped>
.color-change {
  animation: color-change 13s infinite;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 4rem;
  color: white;
}
@keyframes color-change {
  0% {
    background-color: #272727;
  }
  20% {
    background-color: blue;
  }
  40% {
    background-color: tomato;
  }
  60% {
    background-color: lightblue;
  }
  80% {
    background-color: darkgreen;
  }
  100% {
    background-color: #272727;
  }
}
</style>
