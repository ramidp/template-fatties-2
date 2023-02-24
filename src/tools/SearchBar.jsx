import React, { useState } from 'react';
import TagList from '../context/Tags'

const SearchBar = ({ tags, onSearch }) => {


  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by tag"
        value={searchTerm}
        onChange={handleChange}
      />
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default SearchBar;