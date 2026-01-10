import { createWebHashHistory, createRouter } from 'vue-router'

import Index from './pages/Index.vue'
import Hobbes from './pages/Hobbes.vue'
import PrisonersDilemma from './pages/PrisonersDilemma.vue'
import StagHunt from './pages/StagHunt.vue'
import TragedyOfTheCommons from './pages/TragedyOfTheCommons.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/hobbes', component: Hobbes },
    { path: '/prisoners-dilemma', component: PrisonersDilemma },
    { path: '/tragedy-of-the-commons', component: TragedyOfTheCommons },
    { path: '/stag-hunt', component: StagHunt },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router
