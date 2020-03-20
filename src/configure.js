
import { isKeyValid } from './utils'
const Conf = require('conf');

export const nutritionApiKey = 'nutrition-api';

export async function configure(args) {
    const config = new Conf();

    let configObject = {};

    if (config.has(nutritionApiKey)) {
        configObject = config.get(nutritionApiKey);
    }

    let apiKey = args.k || args.key;

    if (!apiKey) {
        apiKey = configObject.apiKey;
    }

    // validate key. if it is invalid throw an error.
    if (!isKeyValid(apiKey)) {
        return;
    }

    config.set(nutritionApiKey, { apiKey: apiKey });
}

