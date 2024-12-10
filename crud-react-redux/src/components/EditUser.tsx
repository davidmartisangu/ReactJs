import { Button, Card, TextInput, Title } from "@tremor/react";
import {useUserActions} from "../hooks/useUserActions"
import React from "react";
import { UserId } from "../store/users/slice";

interface EditUserProp{
    id: UserId
    onEditComplete:()=>void
}

export function EditNewUser({id, onEditComplete}:EditUserProp){
    const {editExistingUser} = useUserActions()

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const form = event.target as HTMLFormElement
        const formData = new FormData(form)

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const github = formData.get("github") as string

        editExistingUser(id, {name, email, github})
        form.reset()
        onEditComplete() // Llama a la función una vez completada la edición
    }

    return (
        <Card style={{marginTop:"16px"}}>
            <Title>Edit new user</Title>
            <form onSubmit={handleSubmit}>
                <TextInput
                        name="name"
                        placeholder="Aquí el nombre"
                    />
                    <TextInput
                        name="email"
                        placeholder="Aquí el email"
                    />
                    <TextInput
                        name="github"
                        placeholder="Aquí el github"
                    />
                    <div>
                        <Button type="submit" style={{marginTop:"16px"}}>
                            Editar usuario
                        </Button>
                    </div>
            </form>
        </Card>
    )
}