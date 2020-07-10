const request = require('request');

//units=si -> celsius  
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY_KEY + '/' + latitude + ',' + longitude + '?units=si';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (response.body.error) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, response.body);
        }
    })
}

module.exports = forecast;