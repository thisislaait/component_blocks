import { useState } from 'react';
import SearchButtonOne from '../Buttons/SearchButtonOne';

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
      <SearchButtonOne onClick={handleSearch} />
    </div>
  );
};

export default SearchBarOne;