<template>
  <div>
    <h1>css animation</h1>
  </div>
</template>
<style scoped>
h1 {
  font-size: 8rem;
  background: url('@/assets/images/stripes.jpg');
  -webkit-background-clip: text;
  color: transparent;
  animation: textbackground 50s linear infinite;
}
@keyframes textbackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}
</style>
