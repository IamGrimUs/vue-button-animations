<template>
  <div>
    <ul>
      <li>
        <i class="fab fa-facebook-f"></i>
      </li>
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-google"></i></li>
      <li><i class="fab fa-youtube"></i></li>
      <li><i class="fab fa-instagram"></i></li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  justify-content: center;
}
li {
  width: 90px;
  height: 90px;
  margin: 0 10px;
  border: 2px solid black;
  border-radius: 50%;
  transition: all 0.25s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
i {
  font-size: 1.5rem;
  color: black;
  transition: all 0.25s;
}
li:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 50%;
  z-index: -1;
  transition: all 0.25s;
  opacity: 0;
}
li:hover:before {
  opacity: 1;
  transform: scale(0.8);
}
li:hover i {
  color: white;
}
li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  z-index: -1;
  transition: all 0.25s;
  opacity: 0;
  border: 2px dashed black;
}
li:hover:after {
  opacity: 1;
  animation: rotation 10s linear infinite;
}
@keyframes rotation {
  0% {
    transform: scale(0.92) rotate(0);
  }
  100% {
    transform: scale(0.92) rotate(360deg);
  }
}
</style>
