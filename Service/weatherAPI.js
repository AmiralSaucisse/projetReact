import Home from "../Components/Home";
import { Meteo } from "./Meteo";

export function getMeteoApi(city) {
    return fetch("http://localhost:3000/api/weather/" + city)
        .then(result => result.json())
        .then(data => {
            if (data.error) {
                return data
            } else {
                return new Meteo(data)
            }
        })
        .catch(error => console.log("Une erreur s'est produite : " + error));
}