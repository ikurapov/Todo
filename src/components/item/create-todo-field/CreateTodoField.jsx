import { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs'

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')
    
    const addTodo = () => {
        setTodos(prev => [
          {
            id: new Date(),
            title: title,
            isCompleted:false,
          },
          ...prev,
        ])
        setTitle('')
      }

    return (
        <div className="flex text-clip px-4 py-3 mt-10 items-center text-white border-2 border-zinc-700 rounded-2xl text-lg font-normal w-full trans">
            <button onClick={() => addTodo(title)}>
                <BsPlusCircle 
                    size={18}
                    className='h-7 min-w-[28px] text-pink-400 hover:fill-white'     
                />
            </button>
            <input 
                className='bg-inherit outline-0 w-full px-2 mx-2'
                type="text" 
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={e => e.key === 'Enter' && addTodo(title) }
            />
        </div>
    );
}

export default CreateTodoField;
