import{z} from "zod"
import { CryptoCurrencyHeaderSchema, CryptoCurrencyRespondSchema, CryptoPriceSchema, CurrencySchema, PairSchema } from "../schema/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>

export type CryptosHeaderCurrency = z.infer<typeof CryptoCurrencyHeaderSchema>

export type CryptoCurrency = z.infer<typeof CryptoCurrencyRespondSchema>

export type Pair = z.infer<typeof PairSchema>

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
