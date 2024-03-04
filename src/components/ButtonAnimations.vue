<script>
export default {
  data() {
    return {
      buttonsWithEmptySpans: [12, 14, 18, 19, 20]
    }
  }
}
</script>

<template>
  <section>
    <template v-for="n in 27" :key="n">
      <template v-if="n === 25">
        <div class="background-color">
          <div class="button-container">
            <button :class="`button-${n}`">Button</button>
          </div>
        </div>
      </template>
      <button v-else :class="`button-${n}`">
        <template v-if="buttonsWithEmptySpans.includes(n)"><span></span>Button</template>
        <template v-else-if="n === 17"><span>B</span>utton</template>
        <template v-else-if="n === 24">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Button
        </template>
        <template v-else>Button</template>
      </button>
    </template>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  gap: 5;
}
@media (min-width: 780px) {
  section {
    flex-flow: row wrap;
  }
}
</style>
