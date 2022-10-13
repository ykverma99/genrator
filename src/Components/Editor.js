import React from 'react'

const Editor = ({name,onClick}) => {
  return (
    <div className='flex items-center justify-between'>
        <p className='font-semibold'>{name} Editor</p>
        <button onClick={onClick} className='bg-blue-500 px-10 rounded py-3 text-white font-semibold'>Get CSS</button>
    </div>
  )
}

export default Editor