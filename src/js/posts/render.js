export class RenderPosts {
    constructor() {
        this._sidepage = document.querySelector('.sidepage')
    }

    static renderText(text, time, geolacation) {
        const { latitude, longitude } = geolacation;
        
        return `
        <div class="box">
            <div class="box-text">
            <p>${text}</p>
            <span>${time}</span>
            </div>
            <p class="geolacation">[${latitude}, ${longitude}]</p>
        </div>
        `
    }

    static renderDenied() {
        return `
        <div class="geolacation-denied">
          <p>Что-то пошло не так</p>
          <p>К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте разрешение на использование геолокации, либо введите координаты вручную.</p>
          <p>Широта и долгота через запятую</p>
          <form class="geolocation-form">
            <input type="text" class="geolacation-input" />
            <div class="buttons">
              <button type="button" class="button cancel">Отмена</button>
              <button type="submit" class="button submit">ОК</button>
            </div>
          </form>
        </div>
        `
    }

    init(text, time, geolacation) {
        const container = document.querySelector('.container__news')
        container.insertAdjacentHTML('afterbegin', RenderPosts.renderText(text, time, geolacation));
    }

    geolocationDenied() {
        const container = document.querySelector('.container')
        container.insertAdjacentHTML('beforeend', RenderPosts.renderDenied());
        this._sidepage.classList.add('sidepage-active')
    }
}