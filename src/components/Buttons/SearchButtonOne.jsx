import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchButtonOne = ({onClick}) => {
   
  return (
    <button
        className="bg-[#ebfffc] rounded-full w-10 h-10 cursor-pointer"
        onClick={onClick}
      >
        <MdSearch className="text-[#555] flex items-center w-8 h-8 pl-2.5" />
      </button>
  )
}

export default SearchButtonOne