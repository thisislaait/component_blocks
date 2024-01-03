import React from 'react'
import ProfileImg from "../assets/image12.jpg";

const BigScreen = () => {
  return (
    <div className="hidden md:hidden lg:block">
          <div className=" secondary flex gap-60 mt-12 ml-12 mr-20 items-center">
            <div>
              <h1>Hello!</h1>
            </div>
            <div className="flex gap-10">
              <h1 >I'm Laait</h1>
              <img src={ ProfileImg } alt="" srcset="" className="w-40 h-40 rounded-full z-10" />
            </div>
          </div>
          <div className="secondary">
              <p className=" hero text-center ml-96 -z-30">And I help (empathetically)</p>
          
              <p className=" hero ml-56">brands show <span className="italics">Up</span></p>
              
              <p className="text-end hero mr-36 ">online authentically ... </p>
          </div>
          <div className="flex justify-center mb-20">
            <button className="mt-10 py-10 px-60 rounded-[4.5rem] border border-black circle-btn-2">
              <p className="primary text-2xl font-medium">view portfolio</p>
            </button>
          </div>
    </div>
  )
}

export default BigScreen