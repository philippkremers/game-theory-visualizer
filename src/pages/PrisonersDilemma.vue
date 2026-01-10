<template>
    <h1>2 &times; 2 Prisoner&apos;s Dilemma</h1>
    <PayoffMatrix
        :payoffs="[
            [2, 2, 0, 3],
            [3, 0, 1, 1],
        ]"
        :player1Strategies="['Cooperate', 'Defect']"
        :player2Strategies="['Cooperate', 'Defect']"
        :showResultsAsText="false"
    />
    <p>This page automatically highlights player 1&apos;s weakly dominant strategies in <span style="background-color: #DDF;">light blue</span>, player 1&apos;s strictly dominant strategy in <span style="background-color: #BBF;">dark blue</span>, player 2&apos;s weakly dominant strategies in <span style="background-color: #FDD;">light red</span>, and player 2&apos;s strictly dominant strategy in <span style="background-color: #FBB;">dark red</span>. Furthermore, weak pure strategy Nash equilibria are <span style="text-decoration: underline;">underlined</span> while strict pure strategy Nash equlibria are displayed in <span style="text-decoration: underline; font-weight: bold;">bold as well</span>.</p>
</template>

<script>
import PayoffMatrix from '@/components/PayoffMatrix.vue'

export default {
    name: 'PrisonersDilemma',
    components: {
        PayoffMatrix
    }
}
</script>
