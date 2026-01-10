<template>
    <h1>Tragedy of the Commons <span class="normal-weight">(according to Hardin 1968)</span></h1>
    <PayoffMatrix
        :payoffs="[
            [3, 3, 1, 4],
            [4, 1, 2, 2],
        ]"
        :player1Strategies="['keep my cattle herd constant', 'add cattle to my herd']"
        :player2Strategies="['keep my cattle herd constant', 'add cattle to my herd']"
        :showResultsAsText="false"
    />
    <p>The payoff matrix models the choices of two herders who can either <strong>keep their cattle herd constant</strong> or <strong>add cattle to their herd</strong>. Each cell shows the outcomes based on the combined choices. Payoffs are calculated by assigning higher values to herders who add cattle when the other does not, and lower values when both add cattle becuase this leads to overgrazing. Mutual restraint yields moderate, sustainable benefits, while mutual expansion leads to diminished outcomes for both.</p>
    <p>This page automatically highlights player 1&apos;s weakly dominant strategies in <span style="background-color: #DDF;">light blue</span>, player 1&apos;s strictly dominant strategy in <span style="background-color: #BBF;">dark blue</span>, player 2&apos;s weakly dominant strategies in <span style="background-color: #FDD;">light red</span>, and player 2&apos;s strictly dominant strategy in <span style="background-color: #FBB;">dark red</span>. Furthermore, weak pure strategy Nash equilibria are <span style="text-decoration: underline;">underlined</span> while strict pure strategy Nash equlibria are displayed in <span style="text-decoration: underline; font-weight: bold;">bold as well</span>.</p>
</template>

<script>
import PayoffMatrix from '@/components/PayoffMatrix.vue'

export default {
    name: 'TragedyOfTheCommons',
    components: {
        PayoffMatrix,
    },
    methods: {
    },
    data() {
        return {
        }
    },
    mounted() {
        document.title = 'Tragedy of the Commons'
    }
}
</script>
