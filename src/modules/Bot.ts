import Platform from './Platform';
import TradeBotState from './TradeBotState';

export default interface Bot {
    id: string;
    name: string;
    platform: Platform;
    botId: string;
    state: TradeBotState;
}
