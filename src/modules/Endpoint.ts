type Endpoint<T extends any[], Response> = (
    ...args: [...T, (response: { res?: Response; error?: { name: string; message: string } }) => void]
) => Promise<void>;

export default Endpoint;
