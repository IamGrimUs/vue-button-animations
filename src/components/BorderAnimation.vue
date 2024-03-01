<template>
  <div class="box">
    <span class="rotated"></span>
    <h1>
      CSS<br />
      <span>border</span><br />
      hover<br />
      effect
    </h1>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  transition: 0.25s;
  margin: 0 auto;
}
h1 {
  margin: 0;
  padding: 0;
  color: #272727;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  z-index: 2;
}
h1 span {
  color: #58c747;
  font-size: 30px;
  z-index: 2;
}

.box:before,
.rotated:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 4px solid #48c747;
  border-bottom: 4px solid #48c747;
  transition: 0.25s;
  transform: scaleX(0);
}
.box:hover {
  background-color: #48c747;
  transition-delay: 0.5s;
}
.box:hover:before,
.box:hover .rotated:before {
  transform: scaleX(1);
}
.box:hover .rotated:before {
  transition-delay: 0.5s;
}
.box:after,
.rotated:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-left: 4px solid #48c747;
  border-right: 4px solid #48c747;
  transition: 0.25s;
  transform: scaleY(0);
  transition-delay: 0.25s;
}
.box:hover:after,
.box:hover .rotated:after {
  transform: scaleY(1);
}

.box:hover .rotated:after {
  transition-delay: 0.75s;
}
.rotated {
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(255, 255, 255, 1);
  transform: rotate(45deg);
  z-index: 1;
}
</style>
