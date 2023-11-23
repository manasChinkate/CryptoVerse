import { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import { getData } from '../backend'
import styles from "./Exchanges.module.css";
import Loader from '../Loader';


const Exchanges = () => {
  const [exchanges, setExchanges] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    getData().then(result => {
      const final = result
      setExchanges(final.data)
      setLoading(false)
      console.log(exchanges)
    });

  }, [])






  return (
    <>
      <Nav />

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
            Loading ?

              <Loader /> :
              <>

                {exchanges.map((data => {
                  return (
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
                        {data.trade_volume_24h_btc.toFixed(0)}
                      </div>
                      <div className={styles.rank}>
                        {data.trust_score_rank}
                      </div>

                    </div>

                  )
                }))}
              </>
          }
        </div>
      </>

    </>
  )
}

export default Exchanges