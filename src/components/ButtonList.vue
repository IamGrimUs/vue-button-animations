<template>
  <section>
    <button v-for="n in 25" :key="n" :class="`button-${n}`">
      <template v-if="n === 12 || n === 14"><span></span>Button</template>
      <template v-else>Button</template>
    </button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
}
@media screen and (min-width: 800px) {
  section {
    align-items: flex-start;
    flex-flow: row wrap;
    gap: 3rem;
    justify-content: center;
    margin: 2rem auto;
  }
}
</style>
