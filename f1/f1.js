
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';

function atlagSzamitas(tomb){
    let osszeg = 0;
    for(let i = 0; i < tomb.length; i++){
        osszeg += tomb[i];
    }
    return Math.floor(osszeg / tomb.length);
}

async function f1 (lat, long, timeStr) {
    const response = await fetch(APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m&timezone=auto`).then(response => response.json());
    return atlagSzamitas(response.hourly.temperature_2m);
}

module.exports = f1;
