import { deleteUserById, UserId, addNewUser, editUser, UserWithId } from "../store/users/slice"
import { useAppDispatch } from "./store"
import { User } from "../store/users/slice"

export const useUserActions = ()=> {

    const dispatch = useAppDispatch()

    const addUser = ({name, email, github}:User)=>{
        dispatch(addNewUser({name, email, github}))
    }

    const editExistingUser = (id: UserId, {name, email, github}: Omit<UserWithId, 'id'>)=>{
        dispatch(editUser({id, name, email, github}))
    }

    const removeUser = (id:UserId)=>{
        dispatch(deleteUserById(id))
    }

    return {removeUser, addUser, editExistingUser}
}