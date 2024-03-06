<script setup>
import PageNavigation from '@/components/PageNavigation.vue'
import LoadingRotatingSquare from '../components/LoadingRotatingSquare.vue'
import LoadingBouncingBalls from '@/components/LoadingBouncingBalls.vue'
import LoadingText from '@/components/LoadingText.vue'
import LoadingCradle from '@/components/LoadingCradle.vue'
</script>

<template>
  <PageNavigation pageName="loading animations" />
  <section>
    <LoadingCradle />
    <LoadingText />
    <LoadingBouncingBalls />
    <LoadingRotatingSquare />
  </section>
</template>
../components/LoadingRotatingSquare.vue
