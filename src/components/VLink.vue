<template>
  <li v-bind:class="['nav-item', { active: isActive }]">
    <a v-bind:href="href" v-bind:class="['nav-link']" v-on:click="go">
      <slot></slot>
    </a>
  </li>
</template>

<script>
import routes from '../routes'

export default {
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute
    }
  },
  methods: {
    go(event) {
      event.preventDefault()
      this.$root.currentRoute = this.href
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      )
    }
  }
}
</script>

<style scoped>
.active {
  color: cornflowerblue;
}
</style>
