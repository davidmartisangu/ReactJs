import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPrice, CryptosHeaderCurrency, Pair } from "./types";
import { fetchCurrenCripotPrice, getCrypto, getCryptoHeader } from "./services/CryptoService";

type CryptoStore = {
    cryptosHeader: CryptosHeaderCurrency
    cryptocurrencies: CryptoCurrency
    result: CryptoPrice
    loading: boolean
    fetchCrypto: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
    fetchCryptosHeader : ()=> Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools(((set)=>({
    cryptosHeader: [],
    cryptocurrencies : [],
    result: {
            IMAGEURL: "",
            PRICE: "",
            HIGHDAY: "",
            LOWHOUR: "",
            CHANGEPCT24HOUR: "",
            LASTUPDATE: ""
        },
    loading: false,
    
    fetchCryptosHeader: async()=>{
        const cryptosHeaderCall = await getCryptoHeader()
        set(()=>({
            cryptosHeader : cryptosHeaderCall
        }))
    },
    fetchCrypto: async()=>{
        const criptoCurrencies = await getCrypto()
        set(()=>({
            cryptocurrencies : criptoCurrencies
        }))
    },
    fetchData: async(pair)=>{
        set(()=>({loading: true}))
        const callResult = await fetchCurrenCripotPrice(pair)
        set(()=>({
            result : callResult,
            loading: false
        }))
    }
}))))
