const { Command } = require("commander");

function time () {

    const program = new Command()

    return program
        .command('time')
        .description('returns the time')
        .option('-ts, --timestamp', 'get full timestamp')
        .action((options) => {
            console.log(handleReturnedValue(options))
        })

    
}

function handleReturnedValue (options) {
    const date = new Date()

    if (options.timestamp) return date.toString()

    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

module.exports = time