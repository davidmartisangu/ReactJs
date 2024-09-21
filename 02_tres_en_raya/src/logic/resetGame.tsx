import {Turns} from "../constants"
type Board = Array<"x"|"o"|null>
type Winner = "x"|"o"|null|false

interface resetGameProps{
    setBoard: (board:Board)=>void;
    setTurn: (turn:Turns)=> void;
    setWinner:(winner:Winner)=>void;
}

export const resetGame = ({setBoard, setTurn, setWinner}: resetGameProps):void=>{
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
