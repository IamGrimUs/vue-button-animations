<template>
  <section>
    <div class="content">
      <h2>giza</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut alias, blanditiis maxime
        neque perspiciatis libero, doloribus error dolor reprehenderit eius ipsum est possimus atque
        a sapiente commodi distinctio animi!
      </p>
      <a href="#">read more</a>
    </div>
  </section>
  <section>
    <div class="content">
      <h2>paris</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut alias, blanditiis maxime
        neque perspiciatis libero, doloribus error dolor reprehenderit eius ipsum est possimus atque
        a sapiente commodi distinctio animi!
      </p>
      <a href="#">read more</a>
    </div>
  </section>
  <section>
    <div class="content">
      <h2>dubai</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut alias, blanditiis maxime
        neque perspiciatis libero, doloribus error dolor reprehenderit eius ipsum est possimus atque
        a sapiente commodi distinctio animi!
      </p>
      <a href="#">read more</a>
    </div>
  </section>
  <section>
    <div class="content">
      <h2>new york</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut alias, blanditiis maxime
        neque perspiciatis libero, doloribus error dolor reprehenderit eius ipsum est possimus atque
        a sapiente commodi distinctio animi!
      </p>
      <a href="#">read more</a>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  text-align: center;
}
section h2 {
  font-size: 24vw;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1em;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-attachment: fixed;
}
section:nth-child(1) h2 {
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
}
section:nth-child(2) h2 {
  background-image: url('@/assets/shoes.png');
  background-size: cover;
}
section:nth-child(3) h2 {
  background-image: url('@/assets/headshot.jpg');
  background-size: cover;
}
section:nth-child(4) h2 {
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
}
section p {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
section .content a {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #000;
  text-decoration: none;
  color: #000;
  margin-top: 20px;
  text-transform: capitalize;
}
</style>
