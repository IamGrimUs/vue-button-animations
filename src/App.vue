<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <RouterLink to="/"><img src="@/assets/Artboard.svg" /></RouterLink>
    </div>
    <div>
      <h1>Animations built&nbsp;with <span>Vue.js, CSS & ❤️</span></h1>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
img {
  max-width: 280px;
  margin-bottom: 0.75rem;
  margin-left: 3rem;
}
h1 span {
  font-size: 0.75em;
  font-weight: 400;
  display: block;
  margin-top: 2.5px;
}
header {
  margin: 1.5rem auto 0;
  max-width: 580px;
}
main {
  margin-bottom: 6rem;
}
</style>
