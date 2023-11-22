import React from 'react'
import { useEffect, useState } from 'react'
import { url } from '../backend'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from "./CoinDetails.module.css";
import { coinDetaill } from '../backend'




const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState()
  


  useEffect(() => {
    coinDetaill(id).then(result => {
      // console.log("result : ", result.data)
      setCoin(result.data)
      console.log(coin)

    })

  

}, [id])
return (
  <>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.updates}>
          {coin.last_updated}
        </div>
        <div className={styles.img}>
          <img src={coin.image.large} alt="" />
        </div>
        <div className={styles.name}>
          {coin.name}
        </div>
        <div className={styles.price}>
          ₹ {coin.market_data.current_price.inr}
        </div>
        <div className={styles.trade}>

          {coin.market_data.market_cap_change_percentage_24h_in_currency.inr} %
        </div>
        <div className={styles.rank}>
          # {coin.market_cap_rank}
        </div>
        <div className={styles.desc}>
          {coin.description['en'].split('.')[0]}
        </div>
      </div>

      <div className={styles.right}>
        right
      </div>

    </div>
  </>
)
}

export default CoinDetails