<script setup>
import PageNavigation from '../components/PageNavigation.vue'
import SmokyText from '../components/SmokyText.vue'
import TextFill from '../components/TextFill.vue'
import BorderAnimation from '../components/BorderAnimation.vue'
import OpenTextAnimation from '../components/OpenTextAnimation.vue'
import FloatingText from '../components/FloatingText.vue'
import RotatingText from '../components/RotatingText.vue'
import LightingText from '@/components/LightingText.vue'
import BeatingHeart from '@/components/BeatingHeart.vue'
import TextMask from '@/components/TextMask.vue'
</script>

<template>
  <PageNavigation pageName="text animations" />
  <section>
    <SmokyText />
    <TextFill />
    <TextMask />
    <LightingText />
    <FloatingText />
    <BorderAnimation />
    <BeatingHeart />
    <OpenTextAnimation />
    <RotatingText />
  </section>
</template>
