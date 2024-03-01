<template>
  <div>
    <h2>
      <span><i>F</i></span>
      <span><i>O</i></span>
      <span><i>C</i></span>
      <span><i>U</i></span>
      <span><i>S</i></span>
    </h2>
  </div>
</template>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background: linear-gradient(45deg, #0082ce, #ffd000);
}
h2 {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: #fff;
  font-size: 3em;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 1.2;
}
h2 span {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  filter: blur(5px);
  transition: 0.25s;
}
h2 span:hover {
  filter: blur(0);
  transition: 0;
}
h2 span i:before {
  content: '';
  position: absolute;
  width: 2px;
  height: 8px;
  background: #fff;
  top: 0;
  left: -5px;
  box-shadow:
    0 53px #fff,
    37px 53px #fff,
    36px 0 #fff;
  opacity: 0;
}
h2 span i:after {
  content: '';
  position: absolute;
  width: 8px;
  height: 2px;
  background-color: #fff;
  top: 0;
  left: -5px;
  box-shadow:
    0 60px #fff,
    30px 60px #fff,
    30px 0 #fff;
  opacity: 0;
}
h2 span:hover i:before,
h2 span:hover i:after {
  opacity: 1;
}
</style>
