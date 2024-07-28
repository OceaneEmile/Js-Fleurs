// const moduleWind = 'module Wind';
// export { moduleWind }; // export the moduleSearch variable
//Recuperer :
/** les données de vents en temps réel
 * vitesse du vent
 * actualise données toutes les 15 minutes
 * https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3522&current=wind_speed_10m,wind_direction_10m&timezone=Europe%2FLondon
 */


class Wind {
    constructor(latitude, longitude) {
       this.lng=latitude;
        this.lat=longitude;
       this.init();

    }
    init() {
        this.buildUrl();
        this.getWindData();
        console.log('Je suis dans le constructor de Wind');
    }
    buildUrl() {
        this.url = `https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lng}&current=wind_speed_10m,wind_direction_10m&timezone=Europe%2FLondon`;
    }

    getWindData() {
        fetch(this.url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
    }
}
export { Wind }; // export the Wind class
