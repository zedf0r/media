import { saveToLocalStorage } from "./localStorage";
import { RenderPosts } from "./render";
import { validateCoords } from "./validateCoords";

export class GetCoords {
    constructor(inputValue, date) {

        this.geoForm = document.querySelector('.geolocation-form');
        this.geoInput = this.geoForm.querySelector('.geolacation-input');
        this.cancelButton = this.geoForm.querySelector('.cancel');
        this.submitButton = this.geoForm.querySelector('.submit');

        this.form = document.querySelector('.form');
        this._inputValue = inputValue;
        this._date = date;

        this.sidepage = document.querySelector('.sidepage');
        this.geoDenied = document.querySelector('.geolacation-denied');

        if (this.geoForm) {this.submitForm()}
        this.cancelForm();
    }

    submitForm() {
        this.geoForm.addEventListener('submit', (event) => {

            event.preventDefault()

            const coordsValue = this.geoInput.value;
            if (!coordsValue) {
                alert('Введите значение');
                return
            } 
            
            const validate = validateCoords(coordsValue);

            if (validate) {

                const render = new RenderPosts();
                render.init(this._inputValue, this._date, validate)
                saveToLocalStorage();
                this.form.reset();

                this.geoDenied.remove();
                this.sidepage.classList.remove('sidepage-active')

            } else {
                alert('Введите данные корректно')
            }
            
        })
    }

    cancelForm() {
        this.cancelButton.addEventListener('click', () => {
            this.geoDenied.remove();
            this.sidepage.classList.remove('sidepage-active')
        })
    }

}