import { faCloud, faSun, faCloudRain, faCloudSun, faCloudBolt  } from '@fortawesome/free-solid-svg-icons'

export class Meteo {
    constructor(json) {
        if (json.succes == true) {
            this.name = json.data[0];
            this.temperature = json.data[2];
            this.icon = this.getIcon(json.data[1]);
        } else {
            this.error = json.error;
        }

    }


    getIcon(weather) {
        if (weather === "Sun") {
            return faSun;
        } else if (weather === "Cloud") {
            return faCloud;
        } else if (weather === "Rain") {
            return faCloudRain;
        } else if (weather === "SunCloud") {
            return faCloudSun;
        } else if (weather === "Thunder") {
            return faCloudBolt;
        }
    }
}