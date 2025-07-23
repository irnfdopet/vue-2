<template>
    <div class="container">

        <v-card-layout>
            <div>
                <v-heading
                    :options="{ level: 2, class: 'section-title', attrs: { id: 'section-title' } }">Count
                    from component</v-heading>
                <span class="vs_badges primary-badge d-block mb-3">Count: {{ count }}</span>
                <div class="d-flex justify-content-between mb-3">
                    <v-button id="decrement-count" secondary
                        :class="{ 'custom-class-1': true, 'custom-class-2': false }" ariaLabel="decrement-count"
                        @onClick="decrementCount">
                        -
                    </v-button>
                    <v-button id="increment-count" secondary ariaLabel="increment-count" @onClick="incrementCount">
                        +
                    </v-button>
                </div>
            </div>
        </v-card-layout>

        <v-card-layout>
            <div>
                <v-heading
                    :options="{ level: 3, class: 'section-title', attrs: { id: 'section-title' } }">Count from
                    store</v-heading>
                <span class="vs_badges secondary-badge d-block mb-3">Count: {{ this.$store.state.count }}</span>
                <div class="d-flex justify-content-between mb-3">
                    <v-button id="decrement-store-count" tertiary ariaLabel="decrement-store-count"
                        @onClick="decrementStoreCount">
                        -
                    </v-button>
                    <v-button id="increment-store-count" tertiary ariaLabel="increment-store-count"
                        @onClick="incrementStoreCount">
                        +
                    </v-button>
                </div>
            </div>
        </v-card-layout>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import TypoHeading from '@/components/typo/heading.vue';
import { VButton, VCardlayout } from '@vetstoria/ui-components';

export default {
    name: 'CounterComponent',
    data() {
        return {
            count: 0,
        }
    },
    components: {
        'v-heading': TypoHeading,
        'v-button': VButton,
        'v-card-layout': VCardlayout,
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