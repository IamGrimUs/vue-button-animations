<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <ul>
      <li><RouterLink to="/menus">Menu animations</RouterLink></li>
      <li><RouterLink to="/buttons">Button animations</RouterLink></li>
      <li><RouterLink to="/images">Image animations</RouterLink></li>
      <li><RouterLink to="/cards">Card animations</RouterLink></li>
    </ul>
  </nav>
  <img src="@/assets/acorn.svg" />
  <span>buit by r_dbl_l</span>
</template>

<style scoped>
nav {
  max-width: 445px;
  margin: 0 auto;
}
ul {
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 6rem;
}
ul li {
  width: 100%;
  text-align: left;
}
ul li a {
  text-transform: none;
  font-size: 1.5rem;
  text-decoration: underline;
}

img {
  width: 60px;
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
  /* border: 1px solid red; */
}
</style>
