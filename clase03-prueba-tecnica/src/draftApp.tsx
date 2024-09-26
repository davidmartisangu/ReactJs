import { useEffect, useState } from 'react'
import './App.css'

const endPointRandomFact = 'https://catfact.ninja/fact'
// const endPointImg = 'https://cataas.com/cat/says/hello'

function App() {
  const[fact, setFact] = useState('')
  const[catUrl, setCatUrl] = useState('')

  //Cargamos el texto
  useEffect(()=>{
    fetch(endPointRandomFact)
      .then(res => res.json())
      .then(data => {
        const {fact} = data
        setFact(fact)
    })
  },[])

   //Cargamos la imagen
  useEffect(()=>{
    if(!fact) return
    const firstWord = fact.split(" ")[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
    .then(res => res.json())
    .then(response =>{
      const {_id} = response
      const imgUrl = `https://cataas.com/cat/${_id}`
      setCatUrl(imgUrl)
    })
  },[fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {catUrl && <img src={catUrl} alt={`Image extracted from the first word for ${fact}`} />}
      
    </main>
  )
}

export default App
