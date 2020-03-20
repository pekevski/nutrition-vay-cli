import chalk from 'chalk';

const menu = {

    main: `
    ${chalk.greenBright('nutrition [command] <options>')}
    
    ${chalk.blueBright('search')} .............. search for a product
    ${chalk.blueBright('config')} .............. set API key, configure api
    ${chalk.blueBright('version, v')} .......... show package version
    ${chalk.blueBright('help')} ................ show help menu for a command

    ${chalk.yellowBright('eg. nutrition help search')}
    `,

    config: `
    ${chalk.greenBright('nutrition config <options>')}

    ${chalk.blueBright('--key, -k \'<YOUR API KEY HERE>\'')} .............. set API key, configure api

    ${chalk.yellowBright('eg. nutrition config -k \'YOUR API KEY HERE\'')}
    `,

    search: `
    ${chalk.greenBright('nutrition search <options>')}

    ${chalk.blueBright('--name, -n')} ............... search by PRODUCT NAME (optional)
    ${chalk.blueBright('--owner, -o')} .............. search by PRODUCT OWNER (optional)
    ${chalk.blueBright('--upc, -u')} ................ search by UNIVERSAL PRODUCT SCREEN (optional)
    ${chalk.blueBright('--key, -k')} ................ api key (required if not configured)

    ${chalk.yellowBright('Examples:')}
    ${chalk.yellowBright('nutrition search --name \'snickers\'')}
    ${chalk.yellowBright('nutrition search --name \'snickers\' -k \'YOUR API KEY HERE\'')}
    `
}


export async function help(args) {
    const subCommand = (args._[0] === 'help') ? args._[1] : args._[0];
    console.log(menu[subCommand] || menu.main);
}