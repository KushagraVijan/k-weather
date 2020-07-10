const geocode = require('./Data/geocode');
const forecast = require('./Data/forecast');

var express = require('express');
var app = express();
var port = process.env.PORT

var data = {};

//setting up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

app.get("/weather", (req, res) => {
    const address = req.query.address;

    if (address == null) {
        res.render('error', { err: "" });
        return console.log('not available till');
    }

    geocode(address, (err, data) => {
        if (err) {
            res.render('error', { err });
            return console.log("Error: ", err);
        }

        forecast(data.latitude, data.longitude, (err, forecastData) => {
            if (err) {
                res.render('error', { err });
                return console.log("Error: ", err);
            }

            data.location = data.location;
            data.map = 'https://google.com/maps?q=' + data.latitude + ',' + data.longitude;
            data.icon = forecastData.currently.icon;
            data.summary = forecastData.currently.summary;
            data.temp = forecastData.currently.temperature;
            data.min = forecastData.daily.data[0].temperatureLow;
            data.max = forecastData.daily.data[0].temperatureHigh;
            data.sunrise = forecastData.daily.data[0].sunriseTime;
            data.sunset = forecastData.daily.data[0].sunsetTime;
            data.moonPhase = forecastData.daily.data[0].moonPhase;
            data.humidity = forecastData.currently.humidity;
            data.pressure = forecastData.currently.pressure;
            data.cloud = forecastData.currently.cloudCover;
            data.precprob = forecastData.currently.precipProbability;
            data.precint = forecastData.currently.precipIntensity;
            data.prectype = forecastData.currently.precipType;
            data.wind = forecastData.currently.windSpeed;

            data.icon2 = forecastData.daily.data[1].icon;
            data.summary2 = forecastData.daily.data[1].summary;
            data.temp2 = forecastData.daily.data[1].temperature;
            data.min2 = forecastData.daily.data[1].temperatureLow;
            data.max2 = forecastData.daily.data[1].temperatureHigh;
            data.sunrise2 = forecastData.daily.data[1].sunriseTime;
            data.sunset2 = forecastData.daily.data[1].sunsetTime;
            data.moonPhase2 = forecastData.daily.data[1].moonPhase;
            data.humidity2 = forecastData.daily.data[1].humidity;
            data.pressure2 = forecastData.daily.data[1].pressure;
            data.cloud2 = forecastData.daily.data[1].cloudCover;
            data.precprob2 = forecastData.daily.data[1].precipProbability;
            data.precint2 = forecastData.daily.data[1].precipIntensity;
            data.prectype2 = forecastData.daily.data[1].precipType;
            data.wind2 = forecastData.daily.data[1].windSpeed;

            data.icon3 = forecastData.daily.data[2].icon;
            data.summary3 = forecastData.daily.data[2].summary;
            data.temp3 = forecastData.daily.data[2].temperature;
            data.min3 = forecastData.daily.data[2].temperatureLow;
            data.max3 = forecastData.daily.data[2].temperatureHigh;
            data.sunrise3 = forecastData.daily.data[2].sunriseTime;
            data.sunset3 = forecastData.daily.data[2].sunsetTime;
            data.moonPhase3 = forecastData.daily.data[2].moonPhase;
            data.humidity3 = forecastData.daily.data[2].humidity;
            data.pressure3 = forecastData.daily.data[2].pressure;
            data.cloud3 = forecastData.daily.data[2].cloudCover;
            data.precprob3 = forecastData.daily.data[2].precipProbability;
            data.precint3 = forecastData.daily.data[2].precipIntensity;
            data.prectype3 = forecastData.daily.data[2].precipType;
            data.wind3 = forecastData.daily.data[2].windSpeed;


            res.render('weather', data);
        });
    });

})

app.listen(port, () => {
    console.log('Server listening to: ' + port);
})