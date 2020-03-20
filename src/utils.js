
import chalk from 'chalk'

export function isKeyValid(apiKey) {

    let result = false;

    if (!apiKey) {
        console.error(
            `
    ${chalk.redBright('ERROR: api key is not configured.')}

    Either set an api key with command ${chalk.greenBright('nutrition config --key')} or add the key as an argument to the current command.
    `
        );
    } else {
        // check if its valid....
        result = true;
    }

    return result;
}