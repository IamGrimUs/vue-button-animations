<template>
  <div>
    <h1 class="floating-headline">floating text</h1>
  </div>
</template>

<style>
h1.floating-headline {
  text-align: center;
  color: hsl(0, 0%, 15%);
  font-family: arial;
  font-size: 90px;
  line-height: 1;
  letter-spacing: 15px;
  animation: float 3s linear infinite;
  animation-direction: alternate;
  text-shadow:
    0 1px 0 #efefef,
    0 2px 0 #efefef,
    0 3px 0 #efefef,
    0 4px 0 #efefef,
    0 30px 5px rgba(0, 0, 0, 0.1);
}
@keyframes float {
  from {
    transform: rotate(5deg);
  }
  to {
    transform: rotate(-5deg);
  }
}
</style>
