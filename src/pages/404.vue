<template>
  <MainLayout>
    <div class="container">
      <section>
        <h1>{{ pageTitle }}</h1>
        <p>{{ pageNotFoundMsg() }}</p>
      </section>
    </div>
  </MainLayout>
</template>

<script>
import '@vetstoria/design-system';
import MainLayout from '@/layouts/Main.vue';

export default {
  name: 'PageNotFound',
  data() {
    return {
      pageTitle: "Page Not Found",
      description: "This page provides information about our application."
    }
  },
  methods: {
    pageNotFoundMsg() {
      return `You are viewing the ${this.pageTitle}. ${this.description}`;
    }
  },
  components: {
    MainLayout
  },
}
</script>