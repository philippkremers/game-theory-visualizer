<template>
    <main>
        <router-view />
        <div class="go-back" v-if="showBack">
            <hr />
            <p>
                <RouterLink to="/">Back to the Overview</RouterLink>
            </p>
        </div>
    </main>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showBack = computed(() => route.path !== '/')

</script>
