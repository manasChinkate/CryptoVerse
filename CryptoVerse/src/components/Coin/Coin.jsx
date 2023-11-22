import React from 'react'
import { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import styles from "./Coin.module.css";
import axios from 'axios';
import { Link } from 'react-router-dom';



const Coin = () => {

  const [coins, setCoins] = useState([])
  const [currency, setCurrency] = useState('usd')

  const currencySymbol = currency==='inr'? '₹':'$'

  useEffect(() => {
      const getCoinData1=async()=>{
        const final = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
        setCoins(final.data)
        console.log(coins)
        
      }
    getCoinData1()

  }, [currency])

  return (
    <>
      <Nav />
      <div className={styles.btns}>
        <button onClick={()=>setCurrency('inr')} className={styles.btn}>INR</button>
        <button onClick={()=>setCurrency('usd')} className={styles.btn}>USD</button>
      </div>
      <>
        <div>
          <div className={styles.card1}>
            <div className={styles.img1}>
              Coin
            </div>
            <div className={styles.name1}>
              Name
            </div>
            <div className={styles.price}>
              Price
            </div>
            <div className={styles.rank1}>
              Rank
            </div>

          </div>
        </div>
        <div>
          {
            coins.map((data => {

             const profit = data?.price_change_24h>0
              return (
                <Link to={`/coins/${data.id}`}  style={{color:'white',textDecoration:'none'}}>
                <div className={styles.card}>
                  <div className={styles.img}>
                    <img style={{
                      height: "60px"
                    }}
                      src={data.image} alt="" />
                  </div>
                  <div className={styles.name}>
                    {data.name}
                  </div>
                  <div className={styles.price}>
                    {currencySymbol}  {data.current_price}
                  </div>
                  <div className={styles.rank} style={profit?{color:"green"}:{color:"red"}}>
                    { profit ? '+ ' + data.price_change_24h.toFixed(0) : data.price_change_24h.toFixed(2)}
                  </div>

                </div>

                </Link>
              )
            }))
          }
        </div>
      </>

    </>
  )
}

export default Coin