<script setup>
import { RouterLink } from 'vue-router'
</script>
<script>
export default {
  data() {
    return {
      animationSections: [
        'menus',
        'buttons',
        'images',
        'cards',
        'texts',
        'socials',
        'backgrounds',
        'clip-masks'
      ]
    }
  }
}
</script>
<template>
  <nav>
    <ul>
      <li v-for="section in animationSections" :key="section">
        <RouterLink :to="`/${section}`">{{ section }}</RouterLink>
      </li>
    </ul>
  </nav>
  <img src="@/assets/acorn.svg" />
  <span>code by r_dbl_l</span>
</template>

<style scoped>
nav {
  max-width: 90%;
  margin: 0 auto;
}
ul {
  align-items: center;
  margin-bottom: 6rem;
  flex-wrap: wrap;
}
ul li {
  text-align: left;
}
ul li a {
  text-transform: none;
  font-size: 1.5rem;
}
img {
  width: 30px;
  position: absolute;
  bottom: 1%;
  right: 2%;
  z-index: -1;
  opacity: 0.8;
}
span {
  position: absolute;
  bottom: 1%;
  left: 50%;
  color: hsl(0, 0%, 40%);
  transform: translateX(-50%);
}
a:before {
  content: '';
  bottom: 0;
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-bottom: 2px solid hsl(0, 0%, 30%);
  transform-origin: center;
  transition: all 0.25s;
  transform: scaleX(0);
}
a:hover:before {
  border-color: hsl(194, 100%, 44%);
  transform: scaleX(1);
}
a:hover {
  color: hsl(194, 100%, 44%);
}
</style>
