<script setup>

import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="main-container">
    <NavBar/>
    <router-view/>
  </div>
</template>

<style scoped>

header {
  line-height: 1.5;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 94vw;
  overflow-x: hidden;
}
.content {
  max-width: 100%;
  background-color: blue;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
