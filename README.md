<h1 align="center">Rocket League Tradebot API Types</h1>
<p align="center">
    <a href="https://github.com/rocketleagueapi/tradebot-api-types/packages/1108141" target="_blank">
  <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/rocketleagueapi/tradebot-api-types?label=Version">
  </a>
  <a href="https://github.com/rocketleagueapi/tradebot-api-types/blob/master/LICENSE" target="_blank">
    <img alt="License: LGPL--3.0--or--later" src="https://img.shields.io/github/license/rocketleagueapi/tradebot-api-types?color=green" />
  </a>
</p>
An up to date type library for the Tradebot API, to be used with Socket.IO.

### 🏠 [Homepage](https://github.com/rocketleagueapi/tradebot-api-types)

## Install

Install this package using your package manager of choice.
```sh
 npm i @rocketleagueapi/tradebot-api-types
```
or
```sh
 yarn add @rocketleagueapi/tradebot-api-types
```

## Example Usage
```ts
import { ListenEvents, EmitEvents } from '@rocketleagueapi/tradebot-api-types'
import io, { Socket } from 'socket.io-client';

const socket: Socket<ListenEvents, EmitEvents> = io('https://tradebot.anga.blue', {
    auth: {
        key: process.env.TRADEBOT_API_KEY
    }
});

socket.on('connect', () => {
    console.log('Connected to Tradebot API');

    socket.emit('getItems', console.log);
});
```

## 📝 License

Copyright © 2021 [Rocket League API](https://github.com/rocketleagueapi).<br />
This project is [LGPL--3.0--or--later](https://github.com/rocketleagueapi/tradebot-api-types/blob/master/LICENSE) licensed.
