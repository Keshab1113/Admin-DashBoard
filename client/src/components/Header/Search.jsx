import React, { useState, useEffect, useRef } from 'react'
import "./Search.css"
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const menuRef = useRef(null);
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsActive(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleSearch = () => {
        setIsActive(!isActive);
        if (searchValue !== "") {
            return (
                <div className="search-data">
                    You just typed <span style={{ fontWeight: 500 }}>{searchValue}</span>
                </div>
            );
        }
    };
  return (
      <div className={`search-box mr-4 sm:flex hidden ${isActive ? 'active' : ''}`} ref={menuRef}>
          <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={`search-input dark:text-white h-full w-full bg-white dark:bg-slate-600 ${isActive ? 'active' : ''}`}
              placeholder="Search..."
          />
          <button className={`search-icon bg-white dark:bg-slate-700 text-[#664AFF] dark:text-white flex justify-center items-center ${isActive ? 'active' : ''}`}
              onClick={handleSearch}>
              <FaSearch/>
              </button>
      </div>
  )
}

export default Search
