import axios from 'axios';
const proxy = "https://cors-anywhere.herokuapp.com/";
export function fetchCoinList(){
  return axios.get(`${proxy}https://api.coinmarketcap.com/v1/ticker/?limit=0`); 
}
export function fetchCoinPrices(coins){
  return axios.get(`${proxy}https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=USD`)
}
export function fetchCoinHistory(coin,start,inc){
  const config = {
    headers: {
      //"X-CoinAPI-Key":"48D6C349-197A-4729-AFB4-9700774D8209"
      "X-CoinAPI-Key": "9AEA024C-45A6-45CF-9E5E-66BC8C8641F6"
    }
  }
  console.log(`${proxy}https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${coin}_USD/latest?period_id=${inc}&time_start=${start}`);
  return axios.get(`${proxy}https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${coin}_USD/latest?period_id=${inc}&time_start=${start}`,config);  
}