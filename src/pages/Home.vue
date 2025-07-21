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
import Alfa from '@/components/Alfa.vue';
import Axis from '@/components/Axis.vue';
import Counter from '@/components/Counter.vue';
import DataModel from '@/components/DataModel.vue';
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