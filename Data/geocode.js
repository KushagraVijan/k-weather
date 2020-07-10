var request = require('request');
//mapbox_key
const geocode = (address, callback) => {
    const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + process.env.MAPBOX_KEY;
    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback("Unable to find Location Services! Check your internet connection.", undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to find Location! Try another search.", undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
}
module.exports = geocode;