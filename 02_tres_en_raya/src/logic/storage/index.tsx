import {Turns} from '../../constants'

type Board = Array<"x"|"o"|null>

interface saveGameToStorageProps{
    newBoard: Board;
    newTurn: Turns
}

export const saveGameToStorage = ({newBoard, newTurn}:saveGameToStorageProps)=>{
    //Guardamos la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}