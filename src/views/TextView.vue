<script setup>
import PageNavigation from '../components/PageNavigation.vue'
import SmokyText from '../components/SmokyText.vue'
import TextFill from '../components/TextFill.vue'
import BorderAnimation from '../components/BorderAnimation.vue'
import OpenTextAnimation from '../components/OpenTextAnimation.vue'
import FloatingText from '../components/FloatingText.vue'
import RotatingText from '../components/RotatingText.vue'
import LightingText from '@/components/LightingText.vue'
</script>
<template>
  <PageNavigation pageName="text animations" />
  <section>
    <LightingText />
    <SmokyText />
    <TextFill />
    <OpenTextAnimation />
    <BorderAnimation />
    <FloatingText />
    <RotatingText />
  </section>
</template>
