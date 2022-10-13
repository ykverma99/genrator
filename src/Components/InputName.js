import React, { useContext } from 'react'
import { Context } from '../context/GlobalContext'

const InputName = ({name,value}) => {
  const {theme} = useContext(Context)
  return (
    <div className='flex justify-between items-end'>
        <p className={`font-semibold ${theme ? 'text-gray-400':'text-gray-500'}`}>{name}</p>
        <p className='text-blue-500'>{value}</p>
    </div>
  )
}

export default InputName