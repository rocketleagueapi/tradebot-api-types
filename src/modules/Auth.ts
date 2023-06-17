export interface EpicAuth {
    device_id: string;
    account_id: string;
    secret: string;
}

export interface PlaystationAuth {
    npsso: string;
}

type Auth = EpicAuth | PlaystationAuth;

export default Auth;
