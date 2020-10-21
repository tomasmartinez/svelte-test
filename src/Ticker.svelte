<script>
  import { onMount } from "svelte";
  import { getPokemonList, getPriceBySymbol } from "./services/Binance";

  let pokemonDetail = {};
  let pokemonList = [];

  // method to handle the event to get the detail of the pokemon.
  const handleOnClick = (event) => {
    const name = event.target.name;
    getPokemonByName(name).then((res) => {
      pokemonDetail = {
        name,
        types: res.types,
        image: res.sprites.front_default,
      };
    });
  };

  const getPokemonTypes = () => {
    return pokemonDetail.types.map((e) => e.type.name).join(",");
  };
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
