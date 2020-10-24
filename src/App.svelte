<script>
  import * as S from "svelte-materialify";
  import { MaterialApp } from "svelte-materialify";
  import Ticker from "./Ticker.svelte";

  let theme = "light";

  let pairs = ["BTCEUR", "ETHEUR", "BNBEUR"];
</script>

<style>
</style>

<MaterialApp {theme}>
  <h1>Current Crypto Prices</h1>

  <table>
    <thead>
      <tr>
        <th>Base</th>
        <th>Quote</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {#each pairs as pair}
        <tr>
          <Ticker symbol={pair} />
        </tr>
      {/each}
    </tbody>
  </table>
</MaterialApp>
