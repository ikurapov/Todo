import { useState } from 'react'
import TodoItem from './components/item/TodoItem'
import CreateTodoField from './components/item/create-todo-field/CreateTodoField'
// import AddItem from './components/item/AddItem'

const data = [
  {
      id: '1',
      title: 'watch "Happy Together"',
      isCompleted: false,
  },
  {
      id: '2',
      title: 'Order breakfast',
      isCompleted: false,
  },
  {
      id: '13',
      title: 'Buy water',
      isCompleted: false,
  },
  {
      id: '14',
      title: 'Sign up for a barbershop',
      isCompleted: true,
  },
  {
      id: '15',
      title: 'Go to a sex shop',
      isCompleted: false,
  },
]
const App = () => {
  const [todos, setTodos] = useState(data);
  
  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }
  const removeTodo = id => setTodos([...todos].filter(t => t.id != id))
  
  return (
    <div className='text-white m-auto'>
      <h1 className='p-5 m-10 text-4xl text-center font-bold'>To-Do List</h1>
        {todos.map(todo => (
          <TodoItem  
            key={todo.id} 
            todo={todo} 
            changeTodo={changeTodo}
            removeTodo={removeTodo}  
          />
        ))}
        <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default App
