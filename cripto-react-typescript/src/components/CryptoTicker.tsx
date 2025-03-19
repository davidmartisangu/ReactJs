import "../cryptoticker.css"
import { useCryptoStore } from "../store"

export default function CryptoTicker() {
    const result = useCryptoStore((state)=>state.cryptosHeader)
  return (
    <div className="ticker-container">
        <ul>
            {result.concat(result).map(coin=>(
              <li className="ticker" key={coin.DISPLAY.USD.FROMSYMBOL}>
                <p className="bold-text">
                  <span>{coin.DISPLAY.USD.FROMSYMBOL}</span>
                  <span>{coin.DISPLAY.USD.PRICE}</span>
                  <span className={`change ${parseFloat(coin.DISPLAY.USD.CHANGEPCT24HOUR) < 0 ? "negative" : "positive"}`}>
                    ({coin.DISPLAY.USD.CHANGEPCT24HOUR}%)
                  </span>
                </p>
              </li>
            ))}
        </ul>
      
    </div>
  )
}
