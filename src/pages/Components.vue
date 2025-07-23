<template>
  <MainLayout>
    <div class="container">
      <section>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Components</li>
          </ol>
        </nav>
      </section>

      <v-heading :options="{ level: 1, attrs: { id: 'page-title' } }">Components</v-heading>

      <!-- Button -->
      <v-card-layout>
        <v-heading :options="{ level: 4, class: 'section-title', attrs: { id: 'section-title' } }">Button</v-heading>
        <v-button id="decrement-count" primary :class="{ 'custom-class-1': true, 'custom-class-2': false }"
          ariaLabel="decrement-count">
          Button Primary
        </v-button>
        <v-button id="decrement-count" secondary :class="{ 'custom-class-1': true, 'custom-class-2': false }"
          ariaLabel="decrement-count">
          Button Secondary
        </v-button>
      </v-card-layout>

      <!-- Form -->
      <v-card-layout>
        <v-heading :options="{ level: 4, class: 'section-title', attrs: { id: 'section-title' } }">Form</v-heading>
        <form>
          <v-alert type="info" :dismissable="false" :default="null" :close="null">
            This is an info alert. It can be used to provide additional information to the user.
          </v-alert>
          <v-form-group label="Label text" state="default" mandatory :input="null" :formatter="null" :name="null"
            autocomplete="off" type="text" :asciiOnly="false" :value="null" :id="null" :disabled="false"
            message="Helper text">
            <v-input state="default" />
          </v-form-group>
          <div class="form-group">
            <label for="email">Email address</label>
            <v-input type="email" name="email" id="email" placeholder="Enter email" aria-describedby="emailHelp"
              :disabled="false" :value="null" :state="null" :asciiOnly="false" autocomplete="off" :formatter="null"
              :input="null" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <v-input type="password" name="password" id="password" placeholder="Enter password"
              aria-describedby="emailHelp" :disabled="false" :value="null" :state="null" :asciiOnly="false"
              autocomplete="off" :formatter="null" :input="null" />
          </div>
          <div class="form-group form-check">
            <v-checkbox id="exampleCheck1" :disabled="false" :value="false" checklistValue="option" :state="null"
              :ariaRequired="false" :default="null" :input="null">
              Check me out
            </v-checkbox>
          </div>
          <v-loading-indicator id="v-loading-indicator" message="Saving" />
          <v-button type="submit" id="submit" :primary="false" :secondary="false" :tertiary="false" iconInlined
            icon="time-slot" :iconStacked="false" :linkButton="false" :danger="false" :textButton="false"
            :disabled="false" selected :state="null" ariaLabel="" :ariaExpanded="null" :role="null" :dashed="false"
            :default="null">
            Submit
          </v-button>
        </form>
      </v-card-layout>

      <!-- Default Carousel -->
      <v-card-layout>
        <v-heading :options="{ level: 4, class: 'section-title', attrs: { id: 'section-title' } }">Default
          Carousel</v-heading>
        <v-selection-carousel id="my-carousel" :slidesToShow="7" :slidesToScroll="7" :toggledSelections="false"
          :swipeToSlide="false"
          :itemList='[{ "value": "2021-11-01", "label": "Mon Nov 01", "ariaLabel": "Monday November 1st" }, { "value": "2021-11-02", "label": "Tue Nov 02", "ariaLabel": "Tuesday November 2nd" }, { "value": "2021-11-03", "label": "Wed Nov 03", "ariaLabel": "Wednesday November 3rd" }, { "value": "2021-11-04", "label": "Thu Nov 04", "ariaLabel": "Thursday November 4th" }, { "value": "2021-11-05", "label": "Fri Nov 05", "ariaLabel": "Friday November 5th" }, { "value": "2021-11-06", "label": "Sat Nov 06", "ariaLabel": "Saturday November 6th" }, { "value": "2021-11-07", "label": "Sun Nov 07", "ariaLabel": "Sunday November 7th" }, { "value": "2021-11-08", "label": "Mon Nov 08", "ariaLabel": "Monday November 8th" }, { "value": "2021-11-09", "label": "Tue Nov 09", "ariaLabel": "Tuesday November 9th" }, { "value": "2021-11-10", "label": "Wed Nov 10", "ariaLabel": "Wednesday November 10th" }, { "value": "2021-11-11", "label": "Thu Nov 11", "ariaLabel": "Thursday November 11th" }, { "value": "2021-11-12", "label": "Fri Nov 12", "ariaLabel": "Friday November 12th" }, { "value": "2021-11-13", "label": "Sat Nov 13", "ariaLabel": "Saturday November 13th" }, { "value": "2021-11-14", "label": "Sun Nov 14", "ariaLabel": "Sunday November 14th" }, { "value": "2021-11-15", "label": "Mon Nov 15", "ariaLabel": "Monday November 15th" }, { "value": "2021-11-16", "label": "Tue Nov 16", "ariaLabel": "Tuesday November 16th" }, { "value": "2021-11-17", "label": "Wed Nov 17", "ariaLabel": "Wednesday November 17th" }, { "value": "2021-11-18", "label": "Thu Nov 18", "ariaLabel": "Thursday November 18th" }, { "value": "2021-11-19", "label": "Fri Nov 19", "ariaLabel": "Friday November 19th" }, { "value": "2021-11-20", "label": "Sat Nov 20", "ariaLabel": "Saturday November 20th" }]'
          :disabled="false" carouselAriaLabel="My Carousel" previousButtonAriaLabel="Previous"
          nextButtonAriaLabel="Next" :responsiveSettingsSm='{ "slidesToShow": 1, "slidesToScroll": 5 }'
          :responsiveSettingsMd='{ "slidesToShow": 3, "slidesToScroll": 1 }'
          :responsiveSettingsLg='{ "slidesToShow": 5, "slidesToScroll": 1 }'
          :responsiveSettingsXlg='{ "slidesToShow": 6, "slidesToScroll": 1 }' value="2021-11-01" :startingValue="null"
          :itemRole="null" textForSelected="" :beforeChange="null" :input="null" />
      </v-card-layout>

      <!-- Post Carousel -->
      <v-card-layout>
        <v-heading :options="{ level: 4, class: 'section-title', attrs: { id: 'section-title' } }">Post
          Carousel</v-heading>
        <v-selection-carousel id="post-carousel" :slidesToShow="3" :slidesToScroll="3" :toggledSelections="false"
          :swipeToSlide="false" :itemList='posts' :disabled="false" carouselAriaLabel="My Carousel"
          previousButtonAriaLabel="Previous" nextButtonAriaLabel="Next"
          :responsiveSettingsSm='{ "slidesToShow": 1, "slidesToScroll": 5 }'
          :responsiveSettingsMd='{ "slidesToShow": 3, "slidesToScroll": 1 }'
          :responsiveSettingsLg='{ "slidesToShow": 5, "slidesToScroll": 1 }'
          :responsiveSettingsXlg='{ "slidesToShow": 6, "slidesToScroll": 1 }' value="1" :startingValue="null"
          itemRole="null" textForSelected="" :beforeChange="null" :input="null" />
      </v-card-layout>

    </div>
  </MainLayout>
</template>

<script>
import '@vetstoria/design-system';
import MainLayout from '@/layouts/Main.vue';
import TypoHeading from '@/components/typo/heading.vue';
import { VCardlayout, VButton, VInput, VFormGroup, VAlert, VCheckbox, VLoadingIndicator, VSelectionCarousel } from '@vetstoria/ui-components';

export default {
  name: 'ComponentsPage',
  data() {
    return {
      pageTitle: "Components Page",
      description: "This page provides information components our application.",
      posts: [{}]
    }
  },
  methods: {
    aboutMsg() {
      return `You are viewing the ${this.pageTitle}. ${this.description}`;
    },
    fetchPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then(response => response.json())
        .then(data => {
          this.posts = data.map((post,index) => ({
            value: post.id,
            label: post.title,
            ariaLabel: `Post ${post.id}: ${post.title}`,
            image: {
              url: 'https://placehold.co/600',
              alt: `Post ${post.title}`,
            },
            displayOrder: index,
            available: true,
          }));
        })
        .catch(error => console.error('Error fetching posts:', error));
    },
  },
  components: {
    MainLayout,
    'v-heading': TypoHeading,
    'v-card-layout': VCardlayout,
    'v-button': VButton,
    'v-input': VInput,
    'v-form-group': VFormGroup,
    'v-alert': VAlert,
    'v-checkbox': VCheckbox,
    'v-loading-indicator': VLoadingIndicator,
    'v-selection-carousel': VSelectionCarousel
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>