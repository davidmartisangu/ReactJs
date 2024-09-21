import {Turns} from "../constants"
import {checkWinnerFrom, checkEndGame} from './board'
import {saveGameToStorage} from './storage/index'
type Board = Array<"x"|"o"|null>

interface updateBoardProps {
    index:number;
    board: Board;
    turn: Turns;
    winner: "x" | "o" | false | null;
    setBoard: (board:Board)=>void;
    setTurn: (turn:Turns)=>void;
    setWinner:(winner:"x"|"o"|null|false)=>void;
}

export const updateBoard = ({index, board,turn, winner, setBoard,setTurn,setWinner}: updateBoardProps):void=>{
    //1º compruebo si la celda ya esta ocupada para reescribirla
    if (board[index] || winner) return
    //Actualiza el estado
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambia el turno
    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
    //Guardamos la partida
    saveGameToStorage({
      newBoard: newBoard,
      newTurn: newTurn
    })
    // Comprueba si hay un ganador o si el juego ha terminado en empate
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }