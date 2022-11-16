export interface BotTransfer {
    botId: string;
    assets: number[];
    credits: number;
}

type Transfer = [BotTransfer, BotTransfer];

export default Transfer;
