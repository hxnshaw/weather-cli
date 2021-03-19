const program = require('commander')
const { fetchNow, weatherForecast } = require('./commands')

program
    .version('7.1.0')
    .description('Weather Application via Command Line Interface')

program
    .command("now <city>")
    .alias("n")
    .description("Current Weather For Specified City")
    .action(city => fetchNow(city))

program
    .command("forecast <city>")
    .alias("f")
    .description("Weather Forecast For Desired City")
    .action(city => weatherForecast(city))

program.parse(process.argv)