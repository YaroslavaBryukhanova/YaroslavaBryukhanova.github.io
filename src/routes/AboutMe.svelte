<script>
	import imageDima from '$lib/images/Dima.jpg';
	import imageSnowboarding from '$lib/images/snowboarding.jpg';
	import imageDeer from '$lib/images/deer.jpg';
	import imageGirls from '$lib/images/girls.jpg';
</script>

<div id="AboutMe" class="biography">
	<div class="fullStory">
		<h2>I'm Yaroslava Bryukhanova</h2>
		<p class="story">
			I'm a first year bachelor student in Innopolis University and also an ambassador. I'm really
			into programming. I am also keen on snowboarding, playing video games, reading books, and
			travelling.
			<br /><br />A funny fact about me: I really love cats, in my hometown I have three white-black
			cats.
		</p>
	</div>
	<div class="gallery">
		<div class="firstrow">
			<img id="hobby1" src={imageDima} alt="Me with my boyfriend" />
			<img id="hobby2" src={imageSnowboarding} alt="Snowboarding" />
		</div>
		<div class="secondrow">
			<img id="hobby3" src={imageDeer} alt="Me in Japan" />
			<img id="hobby4" src={imageGirls} alt="Me with my friends" />
		</div>
	</div>
</div>

<style>
	.biography {
		background-color: antiquewhite;
		height: 100vh;
		display: flex;
	}
	.fullStory {
		margin-left: 3rem;
		width: 30%;
		margin-top: 20%;
		float: left;
		width: 30%;
	}
	.story {
		font-size: 1.5em;
		margin-top: 3%;
	}
	.gallery {
		display: grid;
		float: right;
		width: 70%;
		background-color: wheat;
	}
	.firstrow {
		display: flex;
		justify-content: space-around;
	}
	.secondrow {
		display: flex;
		justify-content: space-around;
	}
	#hobby1 {
		width: 35%;
		object-fit: scale-down;
		margin-top: 10%;
	}
	#hobby2 {
		width: 35%;
		object-fit: scale-down;
		margin-top: 10%;
		margin-right: 0%;
	}
	#hobby3 {
		width: 35%;
		object-fit: scale-down;
	}
	#hobby4 {
		width: 35%;
		object-fit: scale-down;
		margin-right: 0%;
	}
	#hobby1,
	#hobby2,
	#hobby3,
	#hobby4 {
		background-color: antiquewhite;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
</style>
