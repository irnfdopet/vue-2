<template>
    <div class="container">
        <section class="section-axis">
            <div id="canvas" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AxisComponent',
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