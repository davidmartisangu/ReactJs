import { SortBy, type User } from '../type.d'

interface Props {
    changeSorting:(sort: SortBy)=>void
    deleteUser:(email:string)=>void
    users: User[]
    showColors: boolean
}

export function UserList({users, showColors, deleteUser, changeSorting}:Props){
    return(
        <table width="100%">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th className='pointer' onClick={()=>changeSorting(SortBy.NAME)}>Nombre</th>
                    <th className='pointer' onClick={()=>changeSorting(SortBy.LAST)}>Apellido</th>
                    <th className='pointer' onClick={()=>changeSorting(SortBy.COUNTRY)}>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>{
                        const backgroundColor = index % 2 === 0 ? "#333" : "#555"
                        const color = showColors ? backgroundColor : "transparent"
                        const colorLetter = showColors ? "white" :"#213457"
                        return(
                            <tr key={user.email} style={{backgroundColor: color, color: colorLetter}}>
                                <td>
                                    <img src={user.picture.medium}/>
                                </td>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.location.country}</td>
                                <td><button onClick={()=>deleteUser(user.email)}>Borrar</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}