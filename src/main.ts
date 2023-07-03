import {formatDistanceToNow} from 'date-fns';

const joke = document.getElementById('joke') as HTMLImageElement;
const comic_title = document.getElementById('comic_title') as HTMLElement;
const date = document.getElementById('date') as HTMLDivElement;

interface API {
    id: number;
}

interface Comic {
    safe_title: string;
    img: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}

fetch('https://fwd.innopolis.university/api/hw2?email=y.bryukhanova@innopolis.university').then((response: Response) =>response.json()).then(
    (data: API) => {
        fetch(`https://fwd.innopolis.university/api/comic?id=${data}`).then(
            (response: Response) => response.json().then(
                (data: Comic)=>{
                    console.log(comic_title.textContent);
                    comic_title.textContent = data.safe_title;
                    joke.src = data.img;
                    joke.alt = data.alt;
                    date.textContent = formatDistanceToNow(new Date(data.year, data.month, data.day)); 
    
                }
            )
        )
    }
)