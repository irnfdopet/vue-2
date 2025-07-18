<template>
  <div id="app">
    <header>
      header
    </header>
    <main>
      <Home />
    </main>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
section {
  margin: 100px auto;
}
</style>
