import CriptoSearchForm from "./components/CriptoSearchForm"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import CryptoTicker from "./components/CryptoTicker"
import {useCryptoStore} from "./store"
import { useEffect } from "react"

function App() {

  const fetchHeader = useCryptoStore ((state)=>state.fetchCryptosHeader)
  const fetchCrypto = useCryptoStore ((state)=> state.fetchCrypto)

  useEffect(()=> {fetchHeader()},[])
  useEffect(()=> {fetchCrypto()},[])

  return (
    <>
      <header><CryptoTicker/></header>
      <div className="container">
        <h1 className="app-title">Cotizador de <span className="app-title-span">Criptomonedas</span></h1>
        <div className="content">
          <CriptoSearchForm/>
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
