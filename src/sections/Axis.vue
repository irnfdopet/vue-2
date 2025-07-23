<template>
    <div class="container">
        <v-card-layout>
            <v-heading
                    :options="{ level: 5, attrs: { id: 'section-title' } }">Axis Component</v-heading>
            <div id="canvas" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div>
        </v-card-layout>
    </div>
</template>

<script>
import TypoHeading from '@/components/typo/heading.vue';
import { VCardlayout } from '@vetstoria/ui-components';

export default {
    name: 'AxisComponent',
    components: {
        'v-heading': TypoHeading,
        'v-card-layout': VCardlayout,
    },
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    methods: {
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
}
</script>

<style scoped>
#canvas {
    height: 400px;
    width: 400px;
    margin: auto;
    border: 1px solid gray;
}
</style>