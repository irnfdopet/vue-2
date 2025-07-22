<template>
  <div>
    <table class="vs-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in paginatedPosts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
    <nav class="mt-4">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <v-button :id="null" primary :secondary="false" :tertiary="false" :iconInlined="false" :icon="null"
            :iconStacked="false" :linkButton="false" :danger="false" :textButton="false" :disabled="false"
            :selected="false" :state="null" ariaLabel="" :ariaExpanded="null" :role="null" :dashed="false"
            :default="null" @onClick="prevPage">
            Previous
          </v-button>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
          <v-button :id="null" :primary="false" secondary :tertiary="false" :iconInlined="false" :icon="null"
            :iconStacked="false" :linkButton="false" :danger="false" :textButton="false" :disabled="false"
            :selected="false" :state="null" ariaLabel="" :ariaExpanded="null" :role="null" :dashed="false"
            :default="null" @onClick="goToPage(page)">
            {{ page }}
          </v-button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <v-button :id="null" primary :secondary="false" :tertiary="false" :iconInlined="false" :icon="null"
            :iconStacked="false" :linkButton="false" :danger="false" :textButton="false" :disabled="false"
            :selected="false" :state="null" ariaLabel="" :ariaExpanded="null" :role="null" :dashed="false"
            :default="null" @onClick="nextPage">
            Next
          </v-button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { VButton } from '@vetstoria/ui-components';

export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      postsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      return this.posts.slice(start, start + this.postsPerPage);
    },
  },
  methods: {
    fetchPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        });
    },
    goToPage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  components: {
    'v-button': VButton,
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  border-radius: .25rem;
  gap: 1rem;
}
</style>