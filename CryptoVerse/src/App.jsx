import React from 'react'
import Nav from './components/Nav/Nav'
import {Routes,Route} from "react-router-dom";
import Exchanges from './components/Exchanges/Exchanges';
import Coin from './components/Coin/Coin';
import CoinDetails from './components/CoinDetails/CoinDetails';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Exchanges />} />
      <Route path='/coins' element={<Coin />} />
      <Route path='/coins/:id' element={<CoinDetails />} />
    </Routes>
   
    
    </>
  )
}

export default App