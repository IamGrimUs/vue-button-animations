<script setup>
import PageNavigation from '@/components/PageNavigation.vue'
import LoadingRotatingSquare from '../components/LoadingRotatingSquare.vue'
import LoadingBouncingBalls from '@/components/LoadingBouncingBalls.vue'
import LoadingText from '@/components/LoadingText.vue'
import LoadingCradle from '@/components/LoadingCradle.vue'
import LoadingSquares from '@/components/LoadingSquares.vue'
import LoadingChase from '@/components/LoadingChase.vue'
import LoadingTextFill from '@/components/LoadingTextFill.vue'
import LoadingCircle from '@/components/LoadingCircle.vue'
import LoadingUnderline from '@/components/LoadingUnderline.vue'
import LoadingWave from '@/components/LoadingWave.vue'
import LoadingPinWheel from '@/components/LoadingPinWheel.vue'
import LoadingWindow from '@/components/LoadingWindow.vue'
import LoadingColors from '@/components/LoadingColors.vue'
</script>

<template>
  <PageNavigation pageName="loading animations" />
  <section>
    <LoadingColors />
    <LoadingWindow />
    <LoadingPinWheel />
    <LoadingWave />
    <LoadingUnderline />
    <LoadingCircle />
    <LoadingTextFill />
    <LoadingChase />
    <LoadingCradle />
    <LoadingText />
    <LoadingBouncingBalls />
    <LoadingRotatingSquare />
    <LoadingSquares />
  </section>
</template>
