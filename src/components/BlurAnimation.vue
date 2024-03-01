<template>
  <div>
    <h2>Focus</h2>
    <img src="@/assets/bg.jpg" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 400px;
}
img {
  position: absolute;
  width: 140%;
  height: 140%;
  top: -20px;
  left: -20px;
  filter: blur(10px);
  transition: 2s;
  object-fit: cover;
}
h2 {
  position: relative;
  color: #fff;
  font-size: 10em;
  text-transform: uppercase;
  text-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  font-weight: 800;
  z-index: 2;
  transition: 0.25s;
}
h2:hover {
  filter: blur(10px);
  transform: scale(1.2);
}
h2:hover ~ img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(0);
}
</style>
