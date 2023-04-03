<script>
	import Equation from "./Equation.svelte";
	import moleculesData from "./molecules.js";

	let molecules = moleculesData;
	let selectedModel = "gpt-4";
	let selectedType = "mutate";
	let models = new Set(molecules.map((m) => m.model));
	// sort models based on string length
	models = [...models].sort((a, b) => a.length - b.length);

	const prompts = {
		mutate: "Generate 5 diverse molecules that are similar to {mol}",
		add: "Add {left} and {right} into a single molecule",
		sub: "Subtract {left} from {right}",
	};
</script>

<main>
	<h1 class="hero">mol_algebra</h1>

	<select bind:value={selectedModel}>
		{#each [...models] as model}
			<option value={model}>{model}</option>
		{/each}
	</select>
	<div>
		<button on:click={() => (selectedType = "mutate")}>mutate</button>
		<button on:click={() => (selectedType = "add")}>add</button>
		<button on:click={() => (selectedType = "sub")}>sub</button>
	</div>
	<!--display prompt-->
	{#if selectedModel && selectedType}
		<div class="prompt">
			Prompt: [omitted prefix] {prompts[selectedType]}
		</div>
	{/if}
	<div>author: andrew</div>
	{#each molecules.filter((m) => m.type === selectedType && (!selectedModel || m.model === selectedModel)) as { left, right, result, type }}
		<Equation {left} {right} {result} {type} />
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero {
		font-size: 40px;
		margin: 20px;
	}

	.prompt {
		font-size: 20px;
		color: #fff;
		margin: 20px;
	}
</style>
