<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Vue 2</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <v-link href="/">Home</v-link>
                            <v-link href="/about">About</v-link>
                            <v-link href="/components">Components</v-link>
                            <v-link href="/posts">Posts</v-link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer class="text-center bg-dark text-white py-3">
            Copyright &copy; 2025 Vue 2 Playground
        </footer>
    </div>
</template>

<script>
import VLink from '@/components/VLink.vue';

export default {
    name: 'MainLayout',
    components: { VLink },
};
</script>

<style>
main {
    margin: 50px 0;
}

.default-card {
    margin: 50px 0;
}
</style>