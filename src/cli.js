import minimist from 'minimist';
import { help } from './help';
import { version } from './version';
import { configure } from './configure';
import { search } from './search';

export async function cli(argsArray) {
    const args = minimist(argsArray.slice(2));

    // default no commands to help
    let command = args._[0] || 'help';

    if (args.version || args.v) {
        command = 'version';
    }

    if (args.config || args.c) {
        command = 'config'
    }

    // invoke a method based on the cli arguments
    switch (command) {

        case 'help':
            help(args);
            break;

        case 'version':
            version();
            break;

        case 'config':
            configure(args);
            break;

        case 'search':
            search(args);
            break;

        default:
            help(args);
            break;
    }
}