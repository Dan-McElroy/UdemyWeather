const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    request({ 
        url: 'http://api.weatherstack.com/current',
        qs: {
            access_key: '43102757838af7ddfab80fb1c51eaacc',
            query: `${latitude},${longitude}`
        },
        json: true 
    }, (error, {body}) => {
        if (error) {
            return callback('Unable to connect to weather service!')
        }
    
        if (body.success === false) {
            return callback('Unable to find location')
        }
    
        const { weather_descriptions, temperature, feelslike, humidity } = body.current
        callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees. It feels like ${feelslike} degrees out. The humidity is ${humidity}%.`)
    })
}

module.exports = forecast