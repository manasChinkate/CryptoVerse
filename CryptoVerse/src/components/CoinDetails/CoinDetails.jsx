import React from 'react'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import styles from "./CoinDetails.module.css";
import { coinDetaill } from '../backend'
import { IoPulseOutline } from "react-icons/io5";
import CoinChart from '../CoinChart/CoinChart';

import { Loader3 } from '../Loader';





const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({})
  const [Loading, setLoading] = useState(true)







  useEffect(() => {
    coinDetaill(id).then(result => {
      // console.log("result : ", result.data)
      setCoin(result.data)
      // console.log(result.data)
      setLoading(false)
      // console.log(coin.name)

    })



  }, [])
  return (
    <>
      {Loading ?

        <Loader3 /> :

        <>
          {<div className={styles.wrapper}>
            <div className={styles.left}>
            <div className={styles.updates}>
                  Last Updated : {coin.last_updated}
                </div >
              <div className={styles.top}>
                
                <div className={styles.img}>
                  <img style={{
                    height: "180px"
                  }} src={coin.image?.large} alt="" />
                </div>

                <div className={styles.primary}>
                  <div className={styles.name}>
                    {coin.name}
                  </div>
                  <div className={styles.price}>
                    ₹ {coin.market_data?.current_price.inr}
                  </div>
                  <div className={styles.trade}>


                    {coin.market_data?.market_cap_change_percentage_24h_in_currency.inr} %
                  </div>
                  <div className={styles.rank}>
                    <IoPulseOutline style={{
                      fontSize: "30px",
                      color: "red"
                    }} />  # {coin.market_cap_rank}
                  </div>
                </div>
              </div>
            
            <div className={styles.desc}>
              {coin.description?.en.split('.')[0]}
            </div>
            </div>

            <div className={styles.right}>

              <CoinChart  />
            </div>

          </div>
          }
        </>
      }
    </>
  )
}

export default CoinDetails