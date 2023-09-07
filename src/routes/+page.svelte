<script>
	export let data;
</script>

<ul>
	{#each data.Game as game}
		<li>{game.name}</li>
	{/each}
</ul>
