const endPointRandomFact = 'https://catfact.ninja/fact'

export const getRandomFact = ()=>{
    return fetch(endPointRandomFact)
        .then(res => res.json())
        .then(data => {
        const {fact} = data
        return fact
    })
  }