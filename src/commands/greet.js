const { Command } = require("commander");

function greet() {

    const program = new Command()

    return program
        .command('greet [name]')
        .description('returns a greeting')
        .action((name, options) => {
            console.log(`Hi ${name}`)
        })

    
}

module.exports = greet