<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  pageName: String
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/"><span>⬅</span> go back</RouterLink>
      </li>
      <li>{{ pageName }}</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  max-width: 860px;
  margin: 0 auto 6rem;
  border-bottom: 1px solid rgb(77, 77, 77, 0.4);
}
ul {
  justify-content: flex-start;
}
li {
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 700;
  color: hsl(0, 0%, 30%);
}
li:nth-child(1) {
  margin-right: 1rem;
}
li a span {
  font-size: 1.5rem;
}
a {
  text-transform: none;
  color: hsl(0, 0%, 30%);
  padding: 0;
  line-height: 1;
  position: relative;
}
a:before {
  content: '';
  bottom: -8px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 12px;
  border-bottom: 2px solid hsl(0, 0%, 30%);
  transform-origin: right;
  transition: all 0.25s;
  transform: scaleX(0);
  transition-delay: 0.25s;
}
a:hover:before {
  border-color: hsl(194, 100%, 44%);
  transform: scaleX(1);
  transition-delay: 0;
}
a:hover {
  color: hsl(194, 100%, 44%);
}
</style>
