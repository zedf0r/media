import { RenderPosts } from "./render";
import { Post } from "./textPost";
import { getGeolocation } from "./api/geolocationAPI";
import { loadFromLocalStorage } from "./localStorage";

export function app() {
    const render = new RenderPosts('container__news');
    const textPost = new Post('form')
    getGeolocation();
    loadFromLocalStorage();
}