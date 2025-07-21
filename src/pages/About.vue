<template>
  <MainLayout>
    <div class="container">
      <section>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </section>

      <section>
        <h1>{{ pageTitle }}</h1>
        <p>{{ aboutMsg() }}</p>
      </section>
    </div>
  </MainLayout>
</template>

<script>
import '@vetstoria/design-system';
import MainLayout from '@/layouts/Main.vue';

export default {
  name: 'AboutPage',
  data() {
    return {
      pageTitle: "About Page",
      description: "This page provides information about our application."
    }
  },
  methods: {
    aboutMsg() {
      return `You are viewing the ${this.pageTitle}. ${this.description}`;
    }
  },
  components: {
    MainLayout
  },
}
</script>