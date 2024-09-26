import './App.css'
import {useCatImage} from './hooks/useCatImage'
import {useCatFact} from './hooks/useCatFact'

function App() {
  const {fact, refreshFact} = useCatFact()
  const {catUrl} = useCatImage(fact)

  const handleClick =()=>{
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {catUrl && <img src={catUrl} alt={`Image extracted from the first word for ${fact}`} />}
      
    </main>
  )
}

export default App

