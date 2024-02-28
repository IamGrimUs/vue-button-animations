<script setup>
import ImageSection from './ImageSection.vue'
</script>
<template>
  <section>
    <template v-for="n in 10" :key="n + 'a'">
      <ImageSection v-if="n > 5" :class="`image-section-${n}`">
        <h1>Really good headline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos et ratione tempore est
          temporibus. Accusantium voluptatem dignissimos incidunt quo quas nemo alias dolorum, cum
          porro error deleniti quam animi!
        </p>
        <a href="#">read more</a>
      </ImageSection>
      <ImageSection v-else :class="`image-section-${n}`">
        <h1>Really good headline</h1>
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
  justify-content: center;
  align-items: center;
}
</style>
