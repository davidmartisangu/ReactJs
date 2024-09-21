import { useState } from 'react'
import './App.css'
import {Square, TurnSquare} from './components/Square'
import {WinnerModal} from './components/WinnerModal'
import{Turns} from './constants'
import {updateBoard} from './logic/updateBoard'
import {resetGame} from './logic/resetGame'


function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage === Turns.O ? Turns.O : Turns.X;
  })

  const [winner, setWinner] = useState<"x" | "o" | false | null>(null);

  const handleResetGame = () =>{
    resetGame({setBoard, setTurn, setWinner})
  }

  const handleUpdateBoard = (index:number) =>{
    updateBoard({
      index,
      board,
      turn,
      winner,
      setBoard,
      setTurn,
      setWinner,
    })
  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={handleResetGame}>Reset del juego</button>
      <section className='game'>
        {board.map((_,index:number)=>{
          return(
            <Square 
              index={index}
              key={index}
              updateBoard={handleUpdateBoard }
            >
              {board[index]}
            </Square>
          )
        })
        }
      </section>

      <section className='turn'>
        {/* isSelected es una prop que le pongo a Square para decirle si turn es de x entonces le toca a x */}
        <TurnSquare isSelected={turn === Turns.X}>
          {Turns.X}
        </TurnSquare>
        <TurnSquare isSelected={turn === Turns.O}>
          {Turns.O}
        </TurnSquare>
      </section>

      <WinnerModal winner={winner} resetGame={handleResetGame}/>

    </main>
  )
}

export default App
