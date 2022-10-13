import React from "react";
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({children,onClick,toggleModal}) => {
  return (
    <div className="fixed bg-black flex justify-center items-center h-screen top-0 left-0 w-full bg-opacity-30 z-40">
      <div className="bg-white w-1/3 h-fil p-8 space-y-5">
        <div className="flex flex-col items-end">
        <AiOutlineClose onClick={toggleModal} className="cursor-pointer" size={20} />
        </div>
        <div className="bg-bg-css">{children}</div>
        <div>
            <button onClick={onClick} className="text-white bg-blue-500 font-semibold  w-full py-3 rounded">Copy to clipboard</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
