import AccountResolution from './modules/AccountResolution';
import Asset from './modules/Asset';
import Bot from './modules/Bot';
import DeviceAuth from './modules/DeviceAuth';
import Endpoint from './modules/Endpoint';
import Item from './modules/Item';
import LobbyDestroyedReason from './modules/LobbyDestroyedReason';
import LobbyOptions from './modules/LobbyOptions';
import LobbyState from './modules/LobbyState';
import Platform from './modules/Platform';
import Player from './modules/Player';
import Trade from './modules/Trade';
import Transfer, { TransferResult } from './modules/Transfer';
import User from './modules/User';

export interface EmitEvents {
    updateBot: Endpoint<[deviceAuth: DeviceAuth], true>;
    getBots: Endpoint<[], Bot[]>;
    restartBot: Endpoint<[botId: string], true>;
    stopBot: Endpoint<[botId: string], true>;
    getInventory: Endpoint<
        [botId: string],
        {
            assets: Asset[];
            credits: number;
        }
    >;
    createLobby: Endpoint<[botId: string, playerId: Player, options?: LobbyOptions], AccountResolution>;
    destroyLobby: Endpoint<[botId: string], true>;
    inviteToLobby: Endpoint<[botId: string], true>;
    sendChatMessage: Endpoint<[botId: string, message: string], true>;
    confirmTrade: Endpoint<
        [
            botId: string,
            trade: {
                assets: {
                    give: number[];
                    get: number[];
                };
                credits: {
                    give: number;
                    get: number;
                };
            }
        ],
        boolean
    >;
    updateCredits: Endpoint<[botId: string, amount: number], true>;
    updateAsset: Endpoint<[botId: string, assetId: number, add?: boolean], true>;
    getLobbyState: Endpoint<
        [botId: string],
        {
            state: LobbyState | null;
            trade: Trade | null;
        }
    >;
    resolveUser: Endpoint<[botId: string, resolvable: string, platform: Platform], AccountResolution>;
    getItems: Endpoint<[], Record<string, Item>>;
    createUser: Endpoint<[username: string], User>;
    transfer: Endpoint<[transfer: Transfer], TransferResult>;
}

export interface ListenEvents {
    ready: (botId: string) => void;
    lobbyDestroyed: (botId: string, reason: LobbyDestroyedReason) => void;
    joinedLobby: (botId: string, player: Player) => void;
    tradeStarted: (botId: string) => void;
    tradeCancelled: (botId: string) => void;
    tradeAssetUpdate: (botId: string, asset: Asset, added: boolean) => void;
    tradeCreditsUpdate: (botId: string, amount: number) => void;
    tradeCompleted: (botId: string, trade: Trade) => void;
    chatMessage: (botId: string, message: string) => void;
}
