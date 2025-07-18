<template>
    <section class="section-data-model">
        <input v-model="message" placeholder="edit me">
        <input v-model.lazy="message" placeholder="edit me (lazy)">
        <p>Message is: {{ message }}</p>
    </section>
</template>

<script>
export default {
    name: 'DataModelComponent',
    data() {
        return {
            message: ''
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