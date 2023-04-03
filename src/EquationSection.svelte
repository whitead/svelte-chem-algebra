<script>
    export let title = "";
    export let equations = [];
    export let op = "";

    import Equation from "./Equation.svelte";
</script>

<section>
    <h2>{title}</h2>
    {#each equations as { left, right, result }}
        <Equation {left} {right} {result} {op} />
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
