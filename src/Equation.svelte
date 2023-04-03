<script>
    import Molecule from "./Molecule.svelte";
    export let left;
    export let right;
    export let result;
    export let type;

    const type2op = {
        add: "+",
        sub: "-",
    };

    $: isResultArray = Array.isArray(result);
</script>

<div class="equation">
    <Molecule smiles={left} />
    {#if right}
        <div class="plus">{type2op[type]}</div>
        <Molecule smiles={right} />
    {/if}
    <div class="arrow">
        <span class="text" />
    </div>
    {#if isResultArray}
        {#each result as res}
            <Molecule smiles={res} small />
        {/each}
    {:else}
        <Molecule smiles={result} />
    {/if}
</div>

<style>
    .equation {
        display: flex;
        align-items: center;
        margin: 20px;
        background-color: #000000bb;
    }

    .plus {
        font-size: 40px;
        margin: 0 10px;
    }

    .arrow {
        width: 100px;
        height: 40px;
        position: relative;
        margin: 0 10px;
    }

    .arrow::before {
        content: "";
        position: absolute;
        left: 0;
        top: calc(50% - 5px);
        width: calc(100% - 20px);
        height: 10px;
        background-color: #00ccff;
    }

    .arrow::after {
        content: "";
        position: absolute;
        right: -5px;
        top: calc(50% - 15px);
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-left: 30px solid #00ccff;
        border-bottom: 15px solid transparent;
    }

    .text {
        position: absolute;
        left: calc(50% - 20px);
        bottom: -20px;
        font-size: 20px;
    }
</style>
