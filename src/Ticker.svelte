<script>
  import * as S from "svelte-materialify";
  export let symbol;
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

  function getBase(symbol) {
    return symbol.slice(0, 3);
  }

  function getQuote(symbol) {
    return symbol.slice(3, 6);
  }

  function formatNumber(n) {
    return parseFloat(n).toLocaleString(
      undefined,
      { minimumFractionDigits: 2,
        maximumFractionDigits: 2 }
    );
  }
</script>

{#await currentPrice}
  <p>...waiting</p>
{:then price}
  <td>{getBase(price.symbol)}</td>
  <td>{getQuote(price.symbol)}</td>
  <td>{formatNumber(price.price)}</td>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
