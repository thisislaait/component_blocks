import React from 'react'
import ProfileImg from "../assets/image12.jpg";

const MediumScreen = () => {
  return (
    <div className="hidden lg:hidden md:block">
          <div className=" secondary flex gap-48 mt-12 ml-12 mr-20 items-center">
            <h1>Hello!</h1>
            <div className="flex justify-center items-center">
              <h1 >I'm Laait</h1>
              <img src={ ProfileImg } alt="" srcset="" className="w-28 h-28 rounded-full" />
            </div>
          </div>
          <div className="secondary">
              <p className=" hero ml-40 flex gap-48">And I help <span> brands </span></p>
             
              <p className=" hero ml-[75px] flex gap-40">show Up <span className="italics">online (empathy) </span></p>
              <p className=" hero ml-48">authentically</p>
              
          
          </div>
          <div className="flex justify-center mb-20">
            <button className="mt-10 py-10 px-60 rounded-[4.5rem] border border-black">
              <p className="primary text-2xl font-medium">view portfolio</p>
            </button>
          </div>
    </div>
  )
}

export default MediumScreen