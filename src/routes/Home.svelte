<script lang="ts">
	import imageMyPhoto from '$lib/images/with_leaves.png';
</script>

<div class="main-div" id="Home">
	<img class="myPhoto" src={imageMyPhoto} alt="Yaroslava Bryukhanova" />
	<p class="firstLook">
		Hello! I am Yaroslava Bryukhanova<br />
		This is my portfolio
	</p>
</div>

<style>
	.firstLook {
		margin-left: 0rem;
		margin-top: 25%;
		font-size: 2.5em;
		color: antiquewhite;
	}
	.myPhoto {
		width: 65%;
		border-radius: 5%;
		margin-top: 10%;
		object-fit: scale-down;
	}
	.main-div {
		background-color: rgb(114, 141, 94);
		display: flex;
		height: 100vh;
	}
</style>
