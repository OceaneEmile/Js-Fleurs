
const moduleSearch = 'module Search'

export { moduleSearch }; // export the moduleSearch variable
import { Wind } from './Wind.js'; // j'importe la classe

class Search {

    constructor() {
        // console.log('Je suis dans le constructor de Search');
        /**Le constructeur sert à définir les variables, les propriétés
         * et les méthodes de la classe.
         */
        // j'appelle ma class input , plus pas const mais this
        this.input = document.querySelector('.js-search-input');
        this.form = document.querySelector('.js-search-form');
        // console.log(this.input);// affiche l'input
        this.cities = []; // Initialiser la liste des villes

        // lancer la methode init
        this.init();// appelle la methode init 
    }
    init() {

        // console.log(this.input);// affiche my input
        this.watchUserInput();
        this.getCities();
        
    }
    watchUserInput() {
        this.form.addEventListener('submit', (event) => {
                event.preventDefault();
                const searchValue = this.input.value;
                // console.log('FORM submit', searchValue);
                this.getLatLong();// cette méthode est ici et non le form car declenche recherche lorsque soumet le formulaire 
                // si appelle dans le init, elle s'executerait au chargement de la page

        });
    }
    getCities() {
        fetch('../data/cities.json')
        .then(response => response.json())
        .then((data) => {
            this.cities = data;
        })
    }
    getLatLong() {
        const name = this.input.value;
        const cityData = this.getCityData(name);

        if (cityData) {
            const lat = cityData.lat;
            const lng = cityData.lng;
            console.log(lat);
            console.log(lng);
            new Wind(lat, lng);
        } else {
            alert('La ville n\'existe pas');
        }
        console.log("Nom de la ville", name);
        console.log(this.cities.length);
    }
    getCityData(cityName) {
        const cityNameLower = cityName.toLowerCase();
        return this.cities.find(cityObject => cityObject.city.toLowerCase() === cityNameLower);
    }
    }
// Exporter la classe Search
export { Search };