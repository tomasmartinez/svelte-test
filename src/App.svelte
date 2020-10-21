<script>
	import Api from "./services/Api.js";
	import Data from './Data.svelte';
	export let name;

	// const axios = require('axios');

// axios.request({
//   url: 'https://api.apitalks.store/czso.cz/lide-domy-byty/000190de-41b0-46d4-8ac7-90d0573555c6',
//   method: 'GET',
//   headers: {
//     'x-api-key': 'Ww1jOtU2pK3Qp5VM39GmSKggBEDgYXC14bp1xupf'
//   }
// })
// .then(response => {
//   console.log(response.data);
// })
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<button on:click=></button>

	<Data />
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