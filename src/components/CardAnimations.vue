<template>
  <section>
    <template v-for="n in 9" :key="n + 'c'">
      <div :class="'card-' + n">
        <div class="imgbox" v-if="n === 2 || n === 7 || n === 8">
          <img v-if="n === 8" src="@/assets/headphone1.png" />
          <img v-else src="@/assets/1.jpg" />
        </div>
        <template v-if="n === 4 || n === 5">
          <div class="face face1">
            <template v-if="n === 5">
              <div class="imgbox">
                <img src="@/assets/1.png" />
                <h3>design</h3>
              </div>
            </template>
            <div v-else :class="'content-' + n">
              <h2>design</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur mollitia odio,
                dolorum itaque unde quisquam, in placeat commodi eius error explicabo! Voluptate
                adipisci, doloremque repellat consequatur dolorum impedit saepe iste!
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div class="face face2">
            <template v-if="n === 5">
              <div :class="'content-' + n">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur mollitia
                  odio, dolorum itaque unde quisquam, in placeat commodi eius error explicabo!
                  Voluptate adipisci, doloremque repellat consequatur dolorum impedit saepe iste!
                </p>
                <a href="#">read more</a>
              </div>
            </template>
            <h2 v-else>88</h2>
          </div>
        </template>
        <template v-else-if="n === 6">
          <div class="imgbox">
            <img src="@/assets/headshot.jpg" />
          </div>
          <div class="details">
            <h2>
              john doe
              <span>founder</span>
            </h2>
          </div>
        </template>
        <template v-else-if="n === 8">
          <div :class="'content-' + n">
            <h3>wireless headphones</h3>
            <h2 class="price">$60.<small>99</small></h2>
            <a href="#" class="buy">Buy Now</a>
          </div>
        </template>
        <template v-else-if="n === 9">
          <div :class="'card-' + n">
            <div class="imgbox">
              <img src="@/assets/shoes.png" />
            </div>
            <div :class="'content-' + n">
              <h2>Nike Shoes</h2>
              <div class="size">
                <h3>size:</h3>
                <span>7</span><span>8</span><span>9</span><span>10</span>
              </div>
              <div class="color">
                <h3>color:</h3>
                <span></span><span></span><span></span>
              </div>
              <a href="#" class="buy">Buy Now</a>
            </div>
          </div>
        </template>
        <div v-else :class="'content-' + n">
          <h2>headline</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur mollitia odio,
            dolorum itaque unde quisquam, in placeat commodi eius error explicabo! Voluptate
            adipisci, doloremque repellat consequatur dolorum impedit saepe iste!
          </p>
          <a href="#" v-if="n !== 2">read more</a>
        </div>
        <img v-if="n === 3" src="@/assets/chad.svg" />
      </div>
    </template>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 5;
  align-items: center;
}
@media (min-width: 780px) {
  section {
    flex-flow: row wrap;
    align-items: flex-start;
  }
}
h2 {
  margin-bottom: 10px;
  text-transform: capitalize;
  font-size: 2.25rem;
}
p {
  font-size: 1rem;
  text-align: left;
  margin-bottom: 20px;
}
</style>
