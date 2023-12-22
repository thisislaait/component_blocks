import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

// Separate component for the search bar
const SearchBarOne = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search w-full flex items-center justify-between">
      <input
        type="text"
        placeholder="Enter city name"
        spellCheck="false"
        className="bg-[#ebfffc] text-[#555] px-6 h-[42px] rounded-2xl mr-4 text-sm flex-1 outline-none border-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-[#ebfffc] rounded-full w-10 h-10 cursor-pointer"
        onClick={handleSearch}
      >
        <MdSearch className="text-[#555] flex items-center w-8 h-8 pl-2.5" />
      </button>
    </div>
  );
};

export default SearchBarOne;