import { getGeolocation } from "./api/geolocationAPI"
import { GetCoords } from "./coords"
import { saveToLocalStorage } from "./localStorage"
import { RenderPosts } from "./render"

export class Post {
    constructor(form) {
        this._form = document.querySelector(`.${form}`)

        if (this._form) {this.init()}
    }

    async init() {
        const input = document.querySelector('.input')

        this._form.addEventListener('submit', async (event) => {
            event.preventDefault()
            
            const date = new Date();
            const formattedDate = date.toLocaleString();
            const inputValue = input.value;
           
            let coords = null;
            
            try {
                coords = await getGeolocation();
                const render = new RenderPosts();
                render.init(inputValue, formattedDate, coords);
                this._form.reset();
                saveToLocalStorage();
            } 
            catch (error) {
                const render = new RenderPosts();
                render.geolocationDenied();

                const getCoords = new GetCoords(inputValue, formattedDate);
                console.log('Error:', error)
            }
            
        })
    }
}