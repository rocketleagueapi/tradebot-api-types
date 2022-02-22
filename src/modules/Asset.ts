export enum AssetType {
    GIVE = 'GIVE',
    GET = 'GET'
}

export default interface Asset {
    id: number;
    item: number;
    blueprint: number;
    special: number;
    paint: number;
    cert: number;
    quality: number;
    series: number;
    type: AssetType;
}
