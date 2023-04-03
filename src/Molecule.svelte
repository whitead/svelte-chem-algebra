<script>
    import { afterUpdate } from "svelte";
    import SmilesDrawer from "smiles-drawer";

    export let smiles = "CCCCCCC";
    export let small = false;

    const SETTINGS = {
        width: small ? 200 : 400,
        height: 300,
    };
    let drawer = new SmilesDrawer.SvgDrawer(SETTINGS);
    let svgElement;

    afterUpdate(() => {
        // clear
        svgElement.innerHTML = "";
        SmilesDrawer.parse(smiles, function (tree) {
            drawer.draw(tree, svgElement, "dark");
        });
    });
</script>

<div>
    <svg bind:this={svgElement} data-smiles={smiles} class:small />
</div>

<style>
    svg {
        width: 400px;
        height: 300px;
    }

    svg.small {
        width: 200px;
    }
</style>
