import React from 'react'
import { useEffect, useState  } from 'react'
import axios from 'axios'
import styles from "./CoinChart.module.css";
import { url } from '../backend';
import { useParams } from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const CoinChart = () => {
const [chartData, setChartData] = useState([])
const [days, setDays] = useState(1)
    const { id } = useParams()
    const CoinChartData=async()=>{
        const{data} = await axios.get(`${url}/coins/${id}/market_chart?vs_currency=inr&days=${days}`)
        console.log(data.prices)
        setChartData(data.prices)
    }

    useEffect(()=>{
        CoinChartData()
    },[])


const myData={
    labels: chartData.map((value)=>{
        const date = new Date(value[0])
        
        const time = date.getHours() > 12 ?
        `${date.getHours()-12} : ${date.getMinutes()}PM`:
        `${date.getHours()} : ${date.getMinutes()}AM`
        return days===1 ? time: date.toLocaleDateString()
    }),
    datasets:[{
        labels: `Price in the past days ${days}`,
        data: chartData.map((value)=>value[1]),
        borderColor:'blue',
        borderWidth:'3'
    }]
    
    
}
  return (
    <div>
        <Line style={{
            width:"800px",
            height:"400px",
            marginTop:"40px",
            marginRight:"30px"

            
        }} data={myData} options={{
            elements:{
                point:{
                    radius:0
                }
            }
        }} />
    </div>
  )
}

export default CoinChart