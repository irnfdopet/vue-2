<template>
    <div class="container">
        <section class="section-alfa">
            <button @click="a++">A+</button>
            <button v-on:click="b++">B+</button>
            <div>Count with age +: {{ incrementCountWithAge }}</div>
            <div>Count with age -: {{ decrementCountWithAge }}</div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AlfaComponent',
    data() {
        return {
            a: 0,
            b: 0,
            age: 20
        }
    },
    computed: {
        incrementCountWithAge() {
            console.log("incrementCountWithAge");
            return this.a + this.age;
        },
        decrementCountWithAge() {
            console.log("decrementCountWithAge");
            return this.b - this.age;
        }
    }
}
</script>