<template>
  <Section>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </Section>
</template>

<style scoped>
section {
  flex-grow: 1;
}
ul {
  display: flex;
  padding: 0;
  margin: 0 auto;
  flex-direction: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 840px;
}
ul li {
  font-size: 1.3rem;
  list-style: none;
}
ul li a {
  text-decoration: none;
  color: hsl(0, 0%, 15%);
  display: block;
  padding: 10px 15px;
  position: relative;
}
ul li a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: hsl(0, 0%, 15%);
  transform: scaleX(0);
  transition: all 0.25s;
  transform-origin: left;
}
ul li a:hover:before,
ul li a:hover:after {
  transform: scaleX(1);
}
ul li a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: hsl(0, 0%, 15%);
  transform: scaleX(0);
  transition: all 0.25s;
  transform-origin: right;
}
</style>
