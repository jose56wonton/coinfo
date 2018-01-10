import axios from 'axios';
const proxy = "https://cors-anywhere.herokuapp.com/";
export function fetchCoinList(){
  return axios.get(`${proxy}https://api.coinmarketcap.com/v1/ticker/?limit=0`); 
}
export function fetchCoinPrices(coins){
  return axios.get(`${proxy}https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=USD`)
}
export function fetchCoinHistory(coin,period){
  const config = {
    headers: {
      "X-CoinAPI-Key":"48D6C349-197A-4729-AFB4-9700774D8209"
    }
  }
  return axios.get(`${proxy}https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${coin}_USD/latest?period_id=${period}`,config);
  return axios.get(`${proxy}https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${coin}_USD/latest?period_id=${period}`,config);

  /v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1MIN&time_start=2016-01-01T00:00:00"
}