export interface SpotDataResponse {
    total: number;
    dataset: string;
    records: SpotData[];
}

export interface SpotData {
    HourUTC: string;
    HourDK: string;
    PriceArea: "DK1";
    SpotPriceDKK: number;
    SpotPriceEUR: number;
}