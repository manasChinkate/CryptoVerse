const url = `https://api.coingecko.com/api/v3`
import axios from 'axios';

export  async function getData(){
   
     return await axios.get(`${url}/exchanges` ,{
      
     });
}
export  async function getCoinData(){
   
     return await axios.get(`${url}/coins/markets?vs_currency=${currency}` ,{
      
     });
}