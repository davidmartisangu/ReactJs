import { ReactNode } from "react"

interface SquareProps {
    children: ReactNode;
    updateBoard: (index:number)=>void;
    index: number;
}

interface TurnSquareProps {
  isSelected: boolean;
  children: ReactNode;
}

export const Square = ({children, updateBoard, index}:SquareProps ) =>{
    const handleClick = ()=>{
      updateBoard(index)
    }
  
    return(
      <div onClick={handleClick} className = 'square'>
        {children}
      </div>
    )
  }

export const TurnSquare  = ({children, isSelected}:TurnSquareProps ) =>{
    const className = `square ${isSelected ? "is-selected" : ""}`
  
    return(
      <div className = {className}> {children} </div>
    )
  }