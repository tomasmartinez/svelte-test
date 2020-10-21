<script>
  import App from "./App.svelte";

  let promise;
  let symbol = "BTCEUR";
  let resultSymbol;
  let price;

  const handleClick = () => {
    promise = fetch(
      "https://api.binance.com/api/v3/ticker/price?" +
        new URLSearchParams({ symbol })
    )
      .then((x) => x.json())
      .then((data) => {
        resultSymbol = data.symbol;
        price = data.price;
      });
  };
</script>

<button on:click={handleClick}> Click to Load Data </button>

{#await promise}
  <!-- optionally show something while promise is pending -->
  <p>Loading..</p>
{:then data}
  <!-- promise was fulfilled -->
  <p>{resultSymbol} = {price}</p>
{:catch error}
  <!-- optionally show something while promise was rejected -->
{/await}
