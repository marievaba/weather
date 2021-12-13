function weatherDataFetch(city) {
    var key = '4dab47bfdb0a5a6f6662d5b28b34796d';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
        });
}
function cityWeather(e) {
    weatherDataFetch('Tallinn');
}