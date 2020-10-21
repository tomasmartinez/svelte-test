<script>
  import App from "./App.svelte";

  let promise;
  let symbol = "BTCEUR";
  let price;
  const handleClick = () => {
    promise = fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    ).then((x) => x.json());
  };
  const handleClick2 = () => {
    promise = fetch(
      "https://api.binance.com/api/v3/ticker/price?" +
        new URLSearchParams({ symbol: "BTCEUR" })
    )
      .then((x) => x.json())
      .then((data) => {
        price = data.price;
      });
  };
</script>

<button on:click={handleClick2}> Click to Load Data </button>

{#await promise}
  <!-- optionally show something while promise is pending -->
  <p>Loading..</p>
{:then data}
  <!-- promise was fulfilled -->
  <p>{symbol} = {price}</p>
{:catch error}
  <!-- optionally show something while promise was rejected -->
{/await}
