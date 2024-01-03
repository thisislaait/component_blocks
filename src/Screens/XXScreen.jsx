import React from 'react'
import ProfileImg from "../assets/image12.jpg";

const XXScreen = () => {
  return (
    <div className="md:hidden">
        <div className="flex justify-between">
          <div className=" secondary mt-12 ">
            <h1>Hello!</h1>
          </div>
          <div className="relative">
            <img src={ ProfileImg } alt="" srcset="" className="w-28 h-28 rounded-full absolute top-20" />
            <h1 className=" secondary mt-[105px]">I'm Laait</h1>
          </div>
          
        </div>
        <div className="secondary">
            <p className=" hero text-center ">And I</p>
            <p className="hero sm:ml-10 sm:flex sm:gap-72">help <span>brands</span></p>
            <p className=" hero flex gap-3 ml-20 sm:ml-36 mb-12">show Up <span className="sm:block "> Online</span></p>
            <p className="text-end hero ">authentically ... </p>
        </div>
        <div className="flex justify-center mb-20">
          <button className="mt-10 py-10 px-20 rounded-[4.5rem] border border-black circle-btn-2">
            <p className="primary text-2xl font-medium">view portfolio</p>
          </button>
        </div>
    </div>
  )
}

export default XXScreen