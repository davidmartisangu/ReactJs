import { type ListOftodos } from "../types"
import { Todo } from "./Todo"
import { TodoId, Todo as TodoType } from "../types"

interface Props {
    todos: ListOftodos
    onRemoveTodo:({id}:TodoId)=>void
    onToggleCompleteTodo:({id, completed}: Pick<TodoType, "id"|"completed">)=>void
}

export const Todos:React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo})=>{
    return(
        <ul className="todo-list">
            {todos.map((todo)=>(
                <li key={todo.id}
                className={`${todo.completed ? "completed" : ""}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
}
