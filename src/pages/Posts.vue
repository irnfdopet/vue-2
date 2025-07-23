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

      <v-heading :options="{ level: 1, attrs: { id: 'page-title' } }">{{ pageTitle }}</v-heading>

      <!-- Form -->
      <v-card-layout>
        <v-heading :options="{ level: 4, class: 'section-title', attrs: { id: 'section-title' } }">Add New
          post</v-heading>
        <hr>
        <form @submit.prevent="handleSubmit">
          <v-alert v-if="showSuccess" type="success" :dismissable="false" :default="null" :close="null">
            Post created successfully!
          </v-alert>
          <div class="form-group">
            <label for="email">Title</label>
            <v-input type="text" name="post_title" id="post_title" placeholder="Enter post title"
              :disabled="isSubmitting" :value="null" :state="validation.title" :asciiOnly="false" autocomplete="off"
              :formatter="null" :input="null" v-model="form.title" />
            <small v-if="validation.title === false" class="text-danger">Title is required.</small>
          </div>
          <div class="form-group">
            <label for="password">Body</label>
            <v-textarea id="post_body" :state="validation.body" :disabled="isSubmitting" :value="null"
              :asciiOnly="false" name="post_body" autocomplete="off" :input="null" placeholder="Enter post body"
              v-model="form.body">
            </v-textarea>
            <small v-if="validation.body === false" class="text-danger">Body is required.</small>
          </div>
          <v-loading-indicator v-if="isSubmitting" id="v-loading-indicator" message="" />
          <v-button type="submit" id="add-new-post" primary :secondary="false" :tertiary="false" :iconInlined="false"
            :icon="null" :iconStacked="false" :linkButton="false" :danger="false" :textButton="false"
            :disabled="isSubmitting" :selected="false" state="" ariaLabel="Add new post button" :ariaExpanded="null"
            :role="null" :dashed="false" :default="null">
            Submit
          </v-button>
        </form>
      </v-card-layout>

      <section>
        <v-heading :options="{ level: 4, attrs: { id: 'section-title' } }">Posts</v-heading>
        <PostsTable />
      </section>
    </div>
  </MainLayout>
</template>

<script>
import '@vetstoria/design-system';
import MainLayout from '@/layouts/Main.vue';
import PostsTable from '@/components/PostsTable.vue';
import TypoHeading from '@/components/typo/heading.vue';
import { VCardlayout, VButton, VInput, VAlert, VLoadingIndicator, VTextarea } from '@vetstoria/ui-components';

export default {
  name: 'PostsPage',
  data() {
    return {
      pageTitle: "Posts Page",
      form: {
        title: '',
        body: ''
      },
      validation: {
        title: null,
        body: null
      },
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    validateForm() {
      this.validation.title = !!this.form.title.trim();
      this.validation.body = !!this.form.body.trim();
      return this.validation.title && this.validation.body;
    },
    handleSubmit() {
      if (!this.validateForm()) return;
      this.isSubmitting = true;
      this.showSuccess = false;
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.form.title = '';
        this.form.body = '';
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }, 1500);
    }
  },
  components: {
    MainLayout,
    PostsTable,
    'v-heading': TypoHeading,
    'v-card-layout': VCardlayout,
    'v-input': VInput,
    'v-button': VButton,
    'v-alert': VAlert,
    'v-loading-indicator': VLoadingIndicator,
    'v-textarea': VTextarea
  },
}
</script>