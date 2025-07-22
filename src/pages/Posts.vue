<template>
  <MainLayout>
    <div class="container">
      <section>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Posts</li>
          </ol>
        </nav>
      </section>

      <section>
        <h1>{{ pageTitle }}</h1>
        <PostsTable />
      </section>
    </div>
  </MainLayout>
</template>

<script>
import '@vetstoria/design-system';
import MainLayout from '@/layouts/Main.vue';
import PostsTable from '@/components/PostsTable.vue';

export default {
  name: 'PostsPage',
  data() {
    return {
      pageTitle: "Posts Page",
      description: "This page provides information posts our application."
    }
  },
  methods: {
    aboutMsg() {
      return `You are viewing the ${this.pageTitle}. ${this.description}`;
    }
  },
  components: {
    MainLayout,
    PostsTable
  },
}
</script>