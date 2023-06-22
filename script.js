const joke = document.getElementById('joke');
const comic_title = document.getElementById('comic_title');
const date = document.getElementById('date');

const joke_api = fetch('https://fwd.innopolis.university/api/hw2?email=y.bryukhanova@innopolis.university');
const joke_json = joke_api.then(response => response.json());

joke_json.then(
    data => {
        const comic = fetch(`https://fwd.innopolis.university/api/comic?id=${data}`);
        const comic_json = comic.then(response => {return response.json()});
        console.log(comic_json);
        comic_json.then(
            data => {
                console.log(comic_title.textContent);
                comic_title.textContent = data.safe_title;
                joke.src = data.img;
                joke.alt = data.alt;
                date.textContent = new Date(data.year, data.month, data.day).toLocaleDateString(); 

            }
        )
    }
)