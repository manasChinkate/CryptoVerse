export const url = `https://api.coingecko.com/api/v3`
import axios from 'axios';

export  async function getData(){
   
     return await axios.get(`${url}/exchanges` ,{
      
     });
}
export  async function getCoinData(){
   
     return await axios.get(`${url}/coins/markets?vs_currency=${currency}` ,{
      
     });
}
export  async function coinDetaill(id){
   
     return await axios.get(`https://api.coingecko.com/api/v3/coins/${id}` ,{
      
     });
}