import axios from 'axios';
const proxy = "https://cors-anywhere.herokuapp.com/";

export function fetchCoinList(){
  return axios.get(`${proxy}https://api.coinmarketcap.com/v1/ticker/?limit=0`); 
}
export function fetchCoinPrices(coins){
  return axios.get(`${proxy}https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=USD`)
}