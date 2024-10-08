import React from 'react'
import {Square} from '../components/Square'

interface WinnerModalProps {
    winner: "x" | "o" | false | null;
    resetGame: ()=>void;
}

export function WinnerModal ({winner, resetGame}:WinnerModalProps) {
    if (winner===null) return null
    const winnerText = winner === false ? "Empate" : "Gano"

    return(
          <section className='winner'>
            <div className='text'>
              <h2>{winnerText}</h2>
    
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
    )
}