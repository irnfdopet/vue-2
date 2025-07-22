<template>
  <MainLayout>
    <div class="container">
      <section class="section-home">
        <h1>{{ pageTitle }}</h1>
        <p v-if="isGreetingMsg">{{ greetingMsg() }}</p>
      </section>
    </div>
    <Counter />
    <Alfa />
    <Axis />
    <DataModel />
  </MainLayout>
</template>

<script>
import '@vetstoria/design-system';
import Alfa from '@/sections/Alfa.vue';
import Axis from '@/sections/Axis.vue';
import Counter from '@/sections/Counter.vue';
import DataModel from '@/sections/DataModel.vue';
import MainLayout from '@/layouts/Main.vue';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    MainLayout,
    Counter,
    Alfa,
    Axis,
    DataModel
  },
  data() {
    return {
      pageTitle: "Home Page",
      isGreetingMsg: true
    }
  },
  methods: {
    greetingMsg() {
      return `Welcome to ${this.pageTitle}`;
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>