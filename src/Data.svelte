<script>
	let promise
	const handleClick = () => {
 		promise = fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCEUR')
			.then(x => x.json())
  }
</script>

<button on:click={handleClick}>
	Click to Load Data
</button>

{#await promise}
  <!-- optionally show something while promise is pending -->
  <p>Loading..</p>
{:then data}
	<!-- promise was fulfilled -->
	<pre>
		{JSON.stringify(data, null, 2)}
	</pre>
{:catch error}
	<!-- optionally show something while promise was rejected -->
{/await}