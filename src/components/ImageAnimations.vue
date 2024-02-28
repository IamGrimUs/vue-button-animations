<script setup>
import ImageSection from './ImageSection.vue'
</script>
<template>
  <section>
    <template v-for="n in 10" :key="n + 'a'">
      <ImageSection v-if="n > 5" :class="`image-section-${n}`">
        <h2>Really good headline</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos et ratione tempore est
          temporibus. Accusantium voluptatem dignissimos incidunt!
        </p>
        <a href="#">read more</a>
      </ImageSection>
      <ImageSection v-else :class="`image-section-${n}`">
        <h2>Really good headline</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, dolores, consequuntur
          recusandae maiores?
        </p>
      </ImageSection>
    </template>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-flow: row wrap;
}
</style>
