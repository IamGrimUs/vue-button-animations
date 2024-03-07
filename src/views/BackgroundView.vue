<script setup>
import PageNavigation from '../components/PageNavigation.vue'
import BlurAnimation from '../components/BlurAnimation.vue'
import FocusedText from '@/components/FocusedText.vue'
import CityStreetAnimation from '@/components/CityStreetAnimation.vue'
import BackgroundScroll from '@/components/BackgroundScroll.vue'
import RainEffect from '@/components/RainEffect.vue'
import ImageSlides from '@/components/ImageSlides.vue'
import BackgroundColor from '@/components/BackgroundColor.vue'
import BackgroundBoxes from '@/components/BackgroundBoxes.vue'
</script>

<template>
  <PageNavigation pageName="background animations" />
  <section>
    <BackgroundBoxes />
    <BackgroundColor />
    <ImageSlides />
    <FocusedText />
    <BlurAnimation />
    <CityStreetAnimation />
    <BackgroundScroll />
    <RainEffect />
  </section>
</template>
