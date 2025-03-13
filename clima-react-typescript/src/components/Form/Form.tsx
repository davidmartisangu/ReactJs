import { useState } from "react"
import {countries} from "./../data/data"
import styles from "./Form.module.css"
import { SearchType } from "../../types"
import Alert from "../../Alert/Alert"

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}

export default function Form({fetchWeather}: FormProps) {

    const [search, setSearch] = useState<SearchType>({
        country:"",
        city:""
    })
    const [alert, setAlert] = useState("")

    const handleChange=(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(Object.values(search).includes("")){
            setAlert("Todos los campos se tienen que rellenar")
            return
        }
        setAlert("")// Limpia el mensaje de alerta antes de hacer la búsqueda
        fetchWeather(search)
    }

  return (
    <form 
        className={styles.form}
        onSubmit={handleSubmit}
    >
        {alert && <Alert>{alert}</Alert>}
        <div className={styles.field}>
            <label htmlFor="city">Ciudad:</label>
            <input 
                id="city"
                type="text"
                name="city"
                placeholder="Ciudad"
                value={search.city}
                onChange={handleChange}
                 />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">Pais:</label>
            <select 
                id="country"
                name="country"
                value={search.country}
                onChange={handleChange}
            >
                <option value="">--Seleccione un pais--</option>
                {countries.map(country=>(
                    <option 
                        key={country.code}
                        value={country.code}>
                    {country.name}</option>
                ))}
            </select>
        </div>

        <input className={styles.submit} type="submit" value="Consultar clima" />
    </form>
  )
}
