import { type Load, error } from '@sveltejs/kit';
import type { SpotDataResponse } from '../lib/types';

const SPOT_API_URL = 'https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2023-03-16T00:00&end=2023-03-17T00:00&filter=%7B%22PriceArea%22:[%22DK1%22]%7D&sort=HourUTC%20DESC&timezone=dk';

export const load: Load = async ({ params, fetch }) => {
    const sportPriceRequest = fetch(SPOT_API_URL);
    try {
        const [ sportPriceResponse ] = await Promise.all([sportPriceRequest]);
        const spotData = await sportPriceResponse.json() as SpotDataResponse; //TODO: Validate response data
        console.log(spotData.records);
        return {
            prices: spotData.records
        }
    } catch {
        throw error(500, 'Failed to get electricity spot price 😭');
    }
};
