<template>
  <div>
    <h1 class="loading-text">loading...</h1>
  </div>
</template>
<style scoped>
div {
  max-width: 340px;
}
.loading-text {
  font-size: 4rem;
  position: relative;
  color: transparent;
}
.loading-text:before {
  content: 'loading...';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  color: hsl(0, 0%, 15%);
  border-right: 4px solid black;
  animation: fill-text 5s linear infinite;
}
@keyframes fill-text {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
