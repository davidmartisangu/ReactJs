import{WINNER_COMBOS} from '../constants'

type Board = Array<"x"|"o"|null>

export const checkWinnerFrom = (boardToCheck: Board): "x"|"o"|null =>{
  for (const combo of WINNER_COMBOS){
    const [a,b,c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ){
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard: Board):boolean =>{
  return newBoard.every((square)=> square !== null)
}