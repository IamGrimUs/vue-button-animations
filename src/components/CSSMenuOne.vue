<template>
  <Section>
    <template v-for="n in 13" :key="n + 'b'">
      <template v-if="n === 3">
        <ul :class="`menu-section-${n}`">
          <li>
            <a href="#"
              >Home
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >About
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >Services
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >Portfolio
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >Contact
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </template>
      <template v-else-if="n === 6">
        <ul :class="`menu-section-${n}`">
          <li>
            <a href="#">
              <span>Home</span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Services</span>
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Portfolio</span>
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </template>
      <template v-else-if="n === 8">
        <ul :class="`menu-section-${n}`">
          <li>
            <a href="#"
              >Home
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >About
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >Services
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >Portfolio
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#"
              >Contact
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </template>
      <template v-else-if="n === 10">
        <ul :class="`menu-section-${n}`">
          <li>
            <a href="#" data-text="Home">Home </a>
          </li>
          <li>
            <a href="#" data-text="About">About</a>
          </li>
          <li>
            <a href="#" data-text="Services">Services</a>
          </li>
          <li>
            <a href="#" data-text="Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#" data-text="Contact">Contact</a>
          </li>
        </ul>
      </template>
      <template v-else-if="n === 11 || n === 13">
        <section class="menu-container">
          <ul :class="`menu-section-${n}`">
            <li>
              <a href="#" data-text="Home">Home </a>
            </li>
            <li>
              <a href="#" data-text="About">About</a>
            </li>
            <li>
              <a href="#" data-text="Services">Services</a>
            </li>
            <li>
              <a href="#" data-text="Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#" data-text="Contact">Contact</a>
            </li>
          </ul>
        </section>
      </template>
      <template v-else-if="n === 12">
        <ul :class="`menu-section-${n}`">
          <li>
            <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
          </li>
          <li>
            <a href="#" data-text="&nbsp;About">&nbsp;About&nbsp;</a>
          </li>
          <li>
            <a href="#" data-text="&nbsp;Services">&nbsp;Services&nbsp;</a>
          </li>
          <li>
            <a href="#" data-text="&nbsp;Portfolio">&nbsp;Portfolio&nbsp;</a>
          </li>
          <li>
            <a href="#" data-text="&nbsp;Contact">&nbsp;Contact&nbsp;</a>
          </li>
        </ul>
      </template>
      <template v-else>
        <ul :class="`menu-section-${n}`">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </template>
    </template>
  </Section>
</template>

<style scoped>
section {
  flex-basis: 100%;
}
.menu-container {
  margin: 2rem 0 4rem;
  position: relative;
  overflow: hidden;
}
</style>
