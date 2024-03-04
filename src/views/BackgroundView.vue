<script setup>
import PageNavigation from '../components/PageNavigation.vue'
import BlurAnimation from '../components/BlurAnimation.vue'
import FocusedText from '@/components/FocusedText.vue'
import CityStreetAnimation from '@/components/CityStreetAnimation.vue'
import BackgroundScroll from '@/components/BackgroundScroll.vue'
</script>

<template>
  <PageNavigation pageName="background animations" />
  <section>
    <FocusedText />
    <BlurAnimation />
    <CityStreetAnimation />
    <BackgroundScroll />
  </section>
</template>
