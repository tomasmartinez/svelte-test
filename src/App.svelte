<script>
	import Ticker from './Ticker.svelte';

	let pairs = ["BTCEUR", "ETHEUR", "BNBEUR"];
</script>

<main>
	<h1>Current Crypto Prices</h1>

	<table class="table is-fullwidth">
		<thead>
			<tr>
				<th>Base</th>
				<th>Quote</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			{#each pairs as pair}
			<tr><Ticker symbol={pair}/></tr>
			{/each}
		</tbody>
</table>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>