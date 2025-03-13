import axios from "axios"
import { z } from "zod"
import { SearchType } from "../types"
import { useMemo, useState } from "react"
// import { string, number, object, parse, InferOutput} from "valibot"

// ZOD
// 1º creo el esquema
const Weather = z.object({
    name: z.string(),
    main:z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    })
})

// 2º creo el type
export type Weather = z.infer<typeof Weather>

//VALIBOT
// 1º creo el esquema
// const WeatherSchema = object({
//     name: string(),
//     main: object({
//         temp: number(),
//         temp_max: number(),
//         temp_min: number(),
//     })
// })
// 2º creo el type
// type Weather = InferOutput<typeof WeatherSchema>

const initialState = {
    name:"",
    main:{
        temp:0,
        temp_max:0,
        temp_min:0
    }
}

export default function useWeather() {

    const [weather, setWeather] = useState<Weather>(initialState)
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const fetchWeather = async(search: SearchType)=>{

        const appId = import.meta.env.VITE_API_KEY
        setLoading(true)
        setWeather(initialState)
        try {
            //url para obtener las coordendas del sitio donde queremos obtener los datos del tiempo
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            const {data} = await axios(geoUrl)

            //Conmprobar si existe el lugar
            if(!data[0]){
                setNotFound(true)
                return
            }

            const lat = data[0].lat
            const lon = data[0].lon

            //url para obtener la información del tiempo
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            
            //CASTEANDO EL TYPE
                // const {data: weatherResult} = await axios<WeatherType>(weatherUrl)
                // console.log(weatherResult.name)
                // console.log(weatherResult.main.temp_max)

            // ZOD
            const {data: weatherResult} = await axios(weatherUrl)
            const result = Weather.safeParse(weatherResult)
            if(result.success){
                setWeather(result.data)
            }
            
            //VALIBOT
                // const {data: weatherResult} = await axios(weatherUrl)
                // const result = parse(WeatherSchema, weatherResult)
                // if(result){
                //     console.log(result.name)
                //     console.log(result.main.temp)
                // } else {
                //     console.log("Respueta mal formada")
                // }

        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const hasWeatherData = useMemo(()=> weather.name, [weather])

  return {
        weather,
        fetchWeather,
        notFound,
        hasWeatherData,
        loading
  }
}
