import { RenderPosts } from "./render";
import { validateCoords } from "./validateCoords";

export function saveToLocalStorage() {
    const posts = document.querySelectorAll('.box');
    const postsData = [];

    posts.forEach(post => {
        const boxText = post.querySelector('.box-text')

        if (boxText) {
            const text = boxText.querySelector('p');
            const date = boxText.querySelector('span');
            const geolocation = post.querySelector('.geolacation')

            postsData.unshift({
                text: text.innerText,
                date: date.innerText,
                geolocation: geolocation.innerText
            })
        }
    })
    console.log(postsData)
    localStorage.setItem('Posts', JSON.stringify(postsData));
}

export function loadFromLocalStorage() {
    const postsInJSON = JSON.parse(localStorage.getItem('Posts'))
    console.log(postsInJSON)
    const render = new RenderPosts();

    postsInJSON.forEach(post => {
        const validCoords = validateCoords(post.geolocation)

        render.init(post.text, post.date, validCoords);
    })
}