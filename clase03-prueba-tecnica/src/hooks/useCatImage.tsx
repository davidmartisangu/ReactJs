import { useEffect, useState } from 'react'

const prefixUrl = 'https://cataas.com/cat/says/'

export function useCatImage (fact:string){
    const[catUrl, setCatUrl] = useState('')
    //Cargamos la imagen
    useEffect(()=>{
      if(!fact) return
      const firstWord = fact.split(" ")[0]
      // const dynamicUrl = `https://cataas.com/cat/says/${firstWord}`
      setCatUrl(firstWord)
    },[fact])
    
    return {catUrl: `${prefixUrl}${catUrl}`}
}
