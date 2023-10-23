// import React from 'react';
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'



const Check = ({ isCompleted }) => {
    return (
        <div className={cn(`border-2 rounded-lg border-pink-400 h-7 min-w-[28px] transition     duration-200 hover:ease-in `, 
        {'bg-pink-400': isCompleted})}
        >
            {isCompleted && <BsCheck size={24} className='text-gray-900  '/>}
        </div>
    );
}

export default Check;

