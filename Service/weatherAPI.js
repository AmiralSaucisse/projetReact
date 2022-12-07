import Home from "../Components/Home";

export function getMeteoApi(city) {
    return fetch("http://localhost:3000/weather/?city=" + city)
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