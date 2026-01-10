<template>
    <h1>Game Theory Visualizer</h1>
    <p>This is an incomplete list of strategic interactions that are relevant for social and political philosophy. The relevant payoff matrices are illustrated by means of an interactive Vue 3 component that is meant to be useful for classroom purposes. I used them in my own classes on social and political philosophy at Georgetown University and I hope that they can be helpful to you too!</p>
    <ul>
        <li><RouterLink to="/hobbes">Hobbes&#8217;s Social Philosophy</RouterLink></li>
        <li><RouterLink to="/prisoners-dilemma">Prisoner&#8217;s Dilemma</RouterLink></li>
        <li><RouterLink to="/stag-hunt">Stag Hunt</RouterLink></li>
        <li><RouterLink to="/tragedy-of-the-commons">Tragedy of the Commons</RouterLink></li>
    </ul>

    <hr />

    <p>This project is publicly available on <a href="https://github.com/philippkremers/game-theory-visualizer">GitHub</a>.</p>

</template>

<script>

export default {
    name: 'Index',
}

</script>
