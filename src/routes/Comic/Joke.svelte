<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	import type { Comic } from './Comic';
	import type { API } from './API';
	import { onMount } from 'svelte';

	onMount(() => {
		const joke = document.querySelector('#joke') as HTMLImageElement;
		const comic_title = document.querySelector('#comic_title') as HTMLElement;
		const date = document.querySelector('date') as HTMLDivElement;
		fetch('https://fwd.innopolis.university/api/hw2?email=y.bryukhanova@innopolis.university')
			.then((response: Response) => response.json())
			.then((data: API) => {
				fetch(`https://fwd.innopolis.university/api/comic?id=${data}`).then((response: Response) =>
					response.json().then((data: Comic) => {
						console.log(comic_title.textContent);
						comic_title.textContent = data.safe_title;
						joke.src = data.img;
						joke.alt = data.alt;
						date.textContent = formatDistanceToNow(new Date(data.year, data.month, data.day));
					})
				);
			});
	});
</script>

<main id="JokeAPI">
	<div class="joke">
		<h2 id="comic_title">Sorry, something went wrong!</h2>
		<img id="joke" src="https://vgif.ru/gifs/156/vgif-ru-27253.gif" alt="Joke" />
		<div id="date" />
	</div>
</main>

<style>
	#JokeAPI {
		height: auto;
		background-color: rgb(114, 141, 94);
		color: antiquewhite;
		padding-top: 10%;
		padding-bottom: 5%;
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}
	.joke {
		width: 50%;
	}
</style>
