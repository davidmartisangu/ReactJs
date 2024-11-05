import { useState } from "react"
import{ Todos } from "./components/Todos"
import { FilterValue, TodoId, TodoTitle, Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  {
    id: '1',
    title: 'Ver un Twitch de React de Midu',
    completed: true
  },
  {
    id: '2',
    title: 'Practicar React con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Encontrar trabajo como FullStack',
    completed: false
  },
]

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}:TodoId)=>{
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const handleCompleted = ({id, completed}: Pick<TodoType, 'id'|'completed'> ) =>{
    const newTodos = todos.map(todo =>{
      if(todo.id== id){
        return{
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter:FilterValue)=>{
    setFilterSelected(filter)
  }

  const handleRemoveCompleted =()=>{
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleSaveTodo = ({title}:TodoTitle)=>{
    const newTodo={
      id:crypto.randomUUID(),
      title,
      completed:false
    }

    const newTodos=[...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo=>!todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo =>{
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Header
      onAddTodo={handleSaveTodo}
      />
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}/>
      
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveCompleted}
      />
    </div>
  )
}

export default App
