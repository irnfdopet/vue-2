<template>
    <div class="container">
        <v-card-layout>
            <v-heading :options="{ level: 6, attrs: { id: 'section-title' } }">Input Model</v-heading>

            <form>
                <v-heading :options="{ level: 6, attrs: { id: 'section-title' } }">Vetstoria Input</v-heading>
                <div class="form-group">
                    <v-input type="text" name="model_default" id="model_default" placeholder="Edit me"
                        v-model="message" />
                </div>
                <div class="form-group">
                    <v-input type="text" name="model_lazy" id="model_lazy" placeholder="Edit me (lazy)"
                        v-model.lazy="message" />
                    <small id="emailHelp" class="form-text text-muted">Message is: {{ message }}</small>
                </div>
            </form>

            <form class="mt-4">
                <v-heading :options="{ level: 6, attrs: { id: 'section-title' } }">Default Input</v-heading>
                <div class="form-group">
                    <input class="form-control" v-model="message" placeholder="edit me">
                </div>
                <div class="form-group">
                    <input class="form-control" v-model.lazy="message" placeholder="edit me (lazy)">
                </div>
            </form>

            <small id="emailHelp" class="form-text text-muted">Message is: {{ message }}</small>
        </v-card-layout>
    </div>
</template>

<script>
import TypoHeading from '@/components/typo/heading.vue';
import { VCardlayout, VInput } from '@vetstoria/ui-components';

export default {
    name: 'DataModelComponent',
    components: {
        'v-heading': TypoHeading,
        'v-card-layout': VCardlayout,
        'v-input': VInput
    },
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