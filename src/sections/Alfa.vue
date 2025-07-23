<template>
    <div class="container">
        <v-card-layout>
            <v-heading
                    :options="{ level: 4, class:['aa', 'bb'], attrs: { id: 'section-title' } }">Alfa Component</v-heading>
            <div class="mb-4 d-flex justify-content-between align-items-center">
                <v-button primary @onClick="a++">A+</v-button>
                <v-button primary @onClick="b++">B+</v-button>

            </div>
            <p>Count with age +: {{ incrementCountWithAge }}</p>
            <p>Count with age -: {{ decrementCountWithAge }}</p>
        </v-card-layout>
    </div>
</template>

<script>
import TypoHeading from '@/components/typo/heading.vue';
import { VButton, VCardlayout } from '@vetstoria/ui-components';

export default {
    name: 'AlfaComponent',
    components: {
        'v-heading': TypoHeading,
        'v-button': VButton,
        'v-card-layout': VCardlayout,
    },
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