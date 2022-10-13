import React, { useContext } from 'react'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io';
import { Context } from '../context/GlobalContext';

const Menu = ({children,onClick,isActive,name}) => {
    const {theme} = useContext(Context)
  return (
    <div className='max-w-2xl mx-auto space-y-5'>
        <div onClick={onClick} className={`flex items-center justify-between px-5 shadow-md h-14 w-full border rounded-md cursor-pointer ${theme ? 'bg-gray-900 border-gray-600 shadow-lg shadow-slate-900 text-white': 'bg-white text-black shadow-gray-400'}`}>
            <p className='font-medium'>{name}</p>
            {!isActive ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20} />}
        </div>
        {isActive && <div>{children}</div>}
    </div>
  )
}

export default Menu