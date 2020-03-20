
import Conf from 'conf';
import Table from 'cli-table3';
import chalk from 'chalk'

import { nutritionApiKey } from './configure'
import { isKeyValid } from './utils'

const ora = require('ora');
import axios from 'axios'

async function searchProducts(options, key) {

    const spinner = ora("Searching Products...").start();

    const baseUrl = 'https://api.vay.studio/nutrition/search';
    const apiOptions = { ...options, key: key };

    const response = await axios.get(baseUrl, {
        params: apiOptions
    });

    spinner.stop();

    return response
}

export async function search(args) {

    // get our saved key if it exists
    const config = new Conf();
    const hasKey = config.has(nutritionApiKey);
    let apiKey = undefined;

    if (hasKey) {
        const configObj = config.get(nutritionApiKey)
        apiKey = args.key || args.k || configObj.apiKey;
    } else {
        apiKey = args.key || args.k;
    }

    if (!isKeyValid(apiKey)) {
        return;
    }

    const options = {};

    const nameOption = args.name || args.n;
    if (nameOption) {
        options.name = nameOption
    }

    const ownerOption = args.owner || args.o;
    if (ownerOption) {
        options.owner = ownerOption
    }

    const upcOption = args.upc || args.u;
    if (upcOption) {
        options.upc = upcOption
    }

    try {
        const { data } = await searchProducts(options, apiKey);

        const table = new Table({
            head: ['Id', 'Owner', 'UPC', 'Name'],
            colWidths: [10, 40, 17, 66],
            style: {
                head: ['cyan']
            },
            wordWrap: true
        });

        data.result.forEach(product => {
            table.push([
                product.id,
                product.owner,
                product.upc,
                product.name
            ]);
        });

        console.log(table.toString());
    } catch (error) {

        if (error.response.data.error) {

            console.error(
                `
        ${chalk.redBright('ERROR: ' + error.response.data.error + ' CODE:' + error.response.data.errorCode)}
        `
            );

            return;
        }
    }
}