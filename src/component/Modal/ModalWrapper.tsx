import React, { MouseEventHandler, ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ModalWrapper = ({ children, onModalClose }: { children: ReactNode, onModalClose: MouseEventHandler}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 z-[500] p-5 overflow-auto">
        <div className="flex flex-col justify-center items-center h-full">
            { children }
            <button className='fixed top-0 right-0 m-4 p-2 bg-primary-maroon rounded-full' onClick={onModalClose}>
                <CloseIcon className='text-white' />
            </button>
        </div>
    </div>
  )
}

export default ModalWrapper