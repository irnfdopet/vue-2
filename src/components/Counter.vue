<template>
    <section class="section-counter">
        <div>
            <h2>Count from component</h2>
            <span class="vs_badges primary-badge">Count: {{ count }}</span>
            <button type="button" class="vt-btn vt-btn-secondary" @click="decrementCount">-</button>
            <button type="button" class="vt-btn vt-btn-secondary" v-on:click="incrementCount">+</button>
        </div>

        <div>
            <h2>Count from store</h2>
            <span class="vs_badges secondary-badge">Count: {{ this.$store.state.count }}</span>
            <button type="button" class="vt-btn vt-btn-tertiary" v-on:click="decrementStoreCount">-</button>
            <button type="button" class="vt-btn vt-btn-tertiary" v-on:click="incrementStoreCount">+</button>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CounterComponent',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        ...mapActions([
            'incrementCount',
            'decrementCount'
        ]),
        incrementCount() {
            console.log("incrementCount");
            this.count++;
        },
        decrementCount() {
            console.log("decrementCount");
            this.count--;
        },
        incrementStoreCount() {
            this.$store.commit('incrementCount')
        },
        decrementStoreCount() {
            this.$store.commit('decrementCount');
        },
    }
}
</script>