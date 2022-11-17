import Asset from './Asset';

export interface BotTransfer {
    botId: string;
    assets: number[];
    credits: number;
}

type Transfer = [BotTransfer, BotTransfer];

export default Transfer;

export interface BotTransferResult {
    botId: string;
    assets: Asset[];
    credits: number;
}

export type TransferResult = [BotTransferResult, BotTransferResult];
