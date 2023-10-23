// import React from 'react'; 
import Check from "./Check";
import { BsTrash3 } from 'react-icons/bs'
// import cn from 'classnames'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div 
            className="text-clip px-4 py-4 mb-3 items-center text-white flex justify-between bg-zinc-700 rounded-xl text-lg font-normal w-full"
        >
            <button 
                className='flex'
                onClick={() => changeTodo(todo.id)}
            >
                <Check isCompleted={todo.isCompleted}/>
                <span className={`truncate hover:text-clip ml-3 ${todo.isCompleted ? 'line-through text-gray-400 transition duration-500 hover:ease-in-out' :''}`}>{todo.title}</span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <BsTrash3 
                    size={22} 
                    className='text-gray-400 hover:text-red-700 transition-color duration-500 hover:ease-in-out'
                />
            </button>
        </div>
    );
}


export default TodoItem;

