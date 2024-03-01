<script setup>
import PageNavigation from '../components/PageNavigation.vue'
import BlurAnimation from '../components/BlurAnimation.vue'
import FocusedText from '@/components/FocusedText.vue'
</script>

<template>
  <PageNavigation pageName="background animations" />
  <section>
    <FocusedText />
    <BlurAnimation />
  </section>
</template>
