import axios from 'axios';
const proxy = "https://cors-anywhere.herokuapp.com/";

export function getList(){
  return axios.get(`${proxy}https://www.cryptocompare.com/api/data/coinlist/`);
  
}