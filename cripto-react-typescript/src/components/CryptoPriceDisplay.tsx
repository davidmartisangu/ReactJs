import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    const result = useCryptoStore((state)=>state.result)
    const loading = useCryptoStore((state)=>state.loading)
    const hasResult = useMemo(()=>!Object.values(result).includes(""),[result])
  return (
    <div className="result-wrapper">
      {loading ? <Spinner/> : hasResult&&(
        <>
            <h2>Cotización</h2>
            <div className="result">
                <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen criptomoneda" />
                <div>
                    <p>El precio es de: <span>{result.PRICE}</span></p>
                    <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                    <p>Precio más bajo del día: <span>{result.LOWHOUR}</span></p>
                    <p>Variación en las últimas 24h: <span>{result.CHANGEPCT24HOUR}</span></p>
                    <p>Última actuazlización: <span>{result.LASTUPDATE}</span></p>
                </div>
            </div>
        </>
      )}
    </div>
  )
}
