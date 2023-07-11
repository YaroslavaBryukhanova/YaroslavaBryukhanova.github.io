<script lang="ts">
	import imageGitHub from '$lib/images/github.png';
	import imageInstagram from '$lib/images/Instagram.png';
	import imageTelegram from '$lib/images/telegram.png';
	import imageGmail from '$lib/images/gmail.png';
	import imageCat from '$lib/images/cat.gif'; 
</script>

<div id="Contacts">
	<h2 class="contact">Contact me</h2>
	<div class="messenger">
		<div class="gif">
			<img id="catgif" src={imageCat} alt="A cat-programmer" />
		</div>
		<div class="socialmedia">
			<a class="mess_button" id="gh-link" href="https://github.com/YaroslavaBryukhanova"
				><img class="mess_img1" src={imageGitHub} alt="My Git Hub" /></a
			>
			<a
				class="mess_button"
				id="inst-link"
				href="https://instagram.com/yaroslava_bryukhanova_?igshid=MzNlNGNkZWQ4Mg=="
				><img class="mess_img2" src={imageInstagram} alt="My Instagram" /></a
			>
			<a class="mess_button" id="tg-link" href="https://t.me/YaroslavaYara159"
				><img class="mess_img3" src={imageTelegram} alt="My telegram" /></a
			>
			<a
				class="mess_button"
				id="email"
				href="mailto:yara.br03@gmail.com?body=Hello! Text me&subject=Message to Yaroslava Bryukhanova"
				><img class="mess_img4" src={imageGmail} alt="My email" /></a
			>
		</div>
	</div>
</div>

<style>
	#Contacts {
		display: grid;
		height: 80vh;
		background-color: antiquewhite;
	}
	.contact {
		text-align: center;
		font-size: 2.5em;
		height: 30%;
		margin-top: 10%;
	}

	.messenger {
		display: flex;
		height: 50%;
	}
	.gif {
		width: 40%;
		float: left;
		margin-top: 8%;
		margin-left: 10%;
	}
	#catgif {
		width: 60%;
		border-radius: 5%;
		object-fit: scale-down;
	}
	.socialmedia {
		background-color: rgb(114, 141, 94);
		width: 60%;
		margin-top: 7%;
		border-radius: 5%;
		margin-right: 3rem;
		font-size: 1.7em;
		height: 100%;
		display: flex;
		justify-content: space-around;
		box-shadow: 10px 5px 5px black;
	}
	.mess_img1 {
		width: 80%;
	}
	.mess_img2 {
		width: 50%;
		margin-top: 15%;
	}
	.mess_img3 {
		width: 55%;
		margin-top: 10%;
	}
	.mess_img4 {
		width: 60%;
		margin-top: 10%;
	}
	.mess_button {
		margin: 25px 15px;
	}
	.mess_button:hover {
		transform: scale(1.3);
	}
</style>
