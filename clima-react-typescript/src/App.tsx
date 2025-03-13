import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"
import Spinners from "./components/spinners/spinners"
import Alert from "./Alert/Alert"

function App() {

  const {weather, fetchWeather, notFound, hasWeatherData, loading} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.box}>
        <div className={styles.container}>

          <Form fetchWeather = {fetchWeather}/>
          {loading && <Spinners/>}
          {hasWeatherData && <WeatherDetail weather={weather}/>}
          {notFound && <Alert>Ciudad no encontrada</Alert>}
          
        </div>
      </div>
    </>
  )
}

export default App