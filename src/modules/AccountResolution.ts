import Platform from './Platform';

export default interface AccountResolution {
    id: string;
    name: string;
    accounts: LinkedAccount[];
    canTrade: boolean;
    maxCredits: number;
}

export interface LinkedAccount {
    id: string;
    name: string;
    platform: Platform;
    canTrade: boolean;
    maxCredits: number;
}
