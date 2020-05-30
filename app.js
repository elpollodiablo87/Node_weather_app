const geoCode = require('./utils/geocode')  
const forecast = require('./utils/forecast') 


geoCode(process.argv[2], (error, data) => {
    if (process.argv.length < 3) {
        return console.log('Please provide a location!');
    }
    if (error) {
        return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.location)
        console.log(`${forecastData.summary}, it's currently ${forecastData.temp}, with a ${forecastData.rain} chance of rain.`)
        
        
    })
})






