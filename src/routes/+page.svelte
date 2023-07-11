<script lang="ts">
	import AboutMe from './AboutMe.svelte';
	import Contacts from './Contacts.svelte';
	import Home from './Home.svelte';
	import MyProjects from './MyProjects.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>
<body>
	<header>
		<a class="menu" href="/Comic">Joke API</a>
		<a class="menu" href="#Contacts">Contacts</a>
		<a class="menu" href="#MyProjects">My projects</a>
		<a class="menu" href="#AboutMe">About me</a>
		<a class="menu" href="#Home">Home</a>
	</header>
	<main>
		<Home />
		<AboutMe />
		<MyProjects />
        <Contacts />
	</main>
</body>

<style>
	header {
		width: 100%;
		height: 13.5%;
		border-bottom: 2px solid rgb(94, 116, 77);
		position: fixed;
		background-color: rgb(114, 141, 94);
	}
	.menu {
		padding: 15px 25px;
		margin: 25px 15px;
		float: right;
		text-align: center;
		text-decoration: none;
	}
	.menu:link,
	.menu:visited {
		color: antiquewhite;
	}
	.menu:hover,
	.menu:active {
		border: 2px solid antiquewhite;
	}
</style>
