import React from 'react';

const CircleMenu = ({onClick}) => {
  return (
    <button
        className="bg-[#c2c2c2] rounded-full w-16 h-16 cursor-pointer circle-button mt-2 ml-4"
        onClick={onClick}
      >
        <div className='w-28 h-12 m-10 relative -top-[68.5px] -left-5 -rotate-[45deg]'>
          
          <span className='w-4 h-[1.8px] mt-2.5 bg-black rounded-sm block' style={{transform: 'translate(-50%, 5px)'}}></span>
          <span className='w-5 h-[1.8px] mt-2.5 bg-black rounded-sm block' style={{transform: 'translate(-90%, 5px)'}}></span>
          <span className='w-4 h-[2.8px] mt-2.5 bg-black rounded-sm block' style={{transform: 'translate(-50%, 5px)'}}></span>
          
        </div>
      </button>
  )
}

export default CircleMenu