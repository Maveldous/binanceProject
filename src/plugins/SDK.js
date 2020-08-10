const axios = require('axios');

export const SDK = {
  get : async (symbol)=> {
      let glass = await axios.get(`/depth?symbol=${symbol}`);   // делаем снепшот стакана по символу ${symbol}
      return glass.data;
      },
  subscribe : function(symbol)  {
      let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
      return ws     // возвращаем сокет
  }
};