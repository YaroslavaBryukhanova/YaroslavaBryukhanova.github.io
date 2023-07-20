<script lang="ts">
	import JokeHeader from './JokeHeader.svelte';
	import Joke from './Joke.svelte';
</script>

<head>
	<meta charset="UTF-8" />
	<meta
		name="description"
		content="This page is about Joke API. It demonstrates a random joke using a certain key."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Portfolio - Joke API</title>
</head>
<body>
	<JokeHeader />
	<Joke />
</body>

<style>
	* {
		margin: 0;
		padding: 0;
		outline: none;
		font-family: Tahoma, Verdana, sans-serif;
	}
</style>
