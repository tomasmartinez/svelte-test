<script>
  let symbol = "BTCEUR";
  let currentPrice = getCurrentPrice();

  async function getCurrentPrice() {
    const response = await fetch(
      "https://api.binance.com/api/v3/ticker/price?" +
        new URLSearchParams({ symbol })
    );
    const price = await response.json();

    if (response.ok) {
      return price;
    } else {
      throw new Error(price);
    }
  }
</script>

{#await currentPrice}
  <p>...waiting</p>
{:then price}
  <p>{price.symbol} = {price.price}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
