<template>
  <section>
    <template v-for="n in 6" :key="n + 'c'">
      <div :class="'card-' + n">
        <div class="imgbox" v-if="n === 2">
          <img src="@/assets/1.jpg" />
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
        <div v-else :class="'content-' + n">
          <h2>design</h2>
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
  gap: 15rem;
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
