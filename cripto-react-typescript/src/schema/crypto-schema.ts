import {z} from "zod"

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string(),
})

export const CryptoCurrencyHeaderSchema = z.array(
    z.object({
        DISPLAY:z.object({
            USD:z.object({
                FROMSYMBOL: z.string(),
                PRICE: z.string(),
                CHANGEPCT24HOUR: z.string()
            })
        })
    })
)

export const CryptoCurrencyRespondSchema = z.array(
    z.object({
        CoinInfo:z.object({
            FullName: z.string(),
            Name: z.string()
        })
    })
)

export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWHOUR: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})