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

      <v-heading :options="{ level: 1, class: 'my-5', attrs: { id: 'page-title' } }">Components</v-heading>

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
          <div class="form-group">
            <label for="exampleFormControlSelect1">Upload file</label>
            <v-file-uploader id="fileUploader" buttonText="Browse Files"
              :config='{ "url": "", "headers": { "test": "testvalue" }, "response": { "idField": "fileId" } }'
              :fileList="[]">
              <p class="col">
                PDF,JPEG and PNG
                <span class="svg-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width=" 4" height="9" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#7D7E8F" />
                  </svg>
                </span>
                Total file size 15MB, up to 5 files
              </p>
            </v-file-uploader>
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
    </div>
  </MainLayout>
</template>

<script>
import '@vetstoria/design-system';
import MainLayout from '@/layouts/Main.vue';
import TypoHeading from '@/components/typo/heading.vue';
import { VCardlayout, VButton, VInput, VFormGroup, VAlert, VCheckbox, VFileUploader, VLoadingIndicator } from '@vetstoria/ui-components';

export default {
  name: 'ComponentsPage',
  data() {
    return {
      pageTitle: "Components Page",
      description: "This page provides information components our application."
    }
  },
  methods: {
    aboutMsg() {
      return `You are viewing the ${this.pageTitle}. ${this.description}`;
    }
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
    'v-file-uploader': VFileUploader,
    'v-loading-indicator': VLoadingIndicator
  },
}
</script>