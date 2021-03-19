const chalk = require('chalk')

const fetch = require('node-fetch')
const KEY = "<insert-key-here>"


const fetchNow = async (city) => {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${KEY}&query=${city}`)
    const data = await response.json()
    //console.log(data)

    const now = {
        location: data.location.name,
        country: data.location.country,
        longitude: data.location.lon,
        latitude: data.location.lat,
        temperature: data.current.temperature

    }
    console.log(chalk.red.inverse(now.temperature))
    // console.log(now)
}

const weatherForecast = async (city) => {
    const response = await fetch(`http://api.weatherstack.com/forecast?access_key=${KEY}&query=${city}`)
    const data = await response.json()
    console.log(chalk.blue(data.location.name))
    console.log(data.forecast)
}

module.exports = {
    fetchNow,
    weatherForecast
}