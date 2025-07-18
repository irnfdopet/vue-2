<template>
  <div>
    <section class="section-home">
      <h1>{{ pageTitle }}</h1>
      <p v-if="isGreetingMsg">{{ greetingMsg() }}</p>
    </section>
    <Counter />
    <Alfa />
    <Axis />
    <DataModel />
  </div>
</template>

<script>
import '@vetstoria/design-system';
import Alfa from '@/components/Alfa.vue';
import Axis from '@/components/Axis.vue';
import Counter from '@/components/Counter.vue';
import DataModel from '@/components/DataModel.vue';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
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