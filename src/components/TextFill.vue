<template>
  <div>
    <h1>text</h1>
  </div>
</template>

<style scoped>
div {
  margin: 0 auto;
}
h1 {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 120px;
  text-transform: uppercase;
  position: relative;
  color: #ccc;
  text-align: left;
}
h1:before {
  content: 'text';
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translateX(-50%); */
  color: #262626;
  width: 0;
  overflow: hidden;
  transition: all 0.25s;
}
h1:hover:before {
  width: 100%;
}
</style>
