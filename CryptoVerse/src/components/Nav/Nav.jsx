import React, { Component } from 'react'
import styles from "./Nav.module.css";
import {Link} from "react-router-dom";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Nav = () => {
    return (
        <>
      
            <div className={styles.main}>
                <div className={styles.first}>
                    <h1>CryptoVerse</h1>
                    <BsCurrencyBitcoin color='orange' size={30} />
                </div>
                <div className={styles.second}>
                    
                    <Link className={styles.btn}  to={'/'} >Home</Link>
                    <Link className={styles.btn} to={'/coins'}>Coins</Link>
                   
                </div>
            </div>
        
        </>
    )
}

export default Nav