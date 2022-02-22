import Asset from './Asset';
import Player from './Player';

export default interface Trade {
    id: string | null;
    player: Player;
    assets: {
        give: Asset[];
        get: Asset[];
    };
    credits: {
        give: number;
        get: number;
    };
}
