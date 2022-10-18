import React, { useState } from 'react';
import { SearchbarStyled } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import propTypes from 'prop-types';


export default function Searchbar ({onSubmit}) {
  const [search, setSearch] = useState('')

  const handleInputSearch = ({ target }) => {
    setSearch(target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    if (search.trim() === '') return alert('You do not write anything :(');
      onSubmit(search);
    setSearch('');
  };


    return (
      <SearchbarStyled>
        <form onSubmit={submitForm}>
          <button type="submit">
            <AiOutlineSearch stroke="black" size={25} />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange={handleInputSearch}
          />
        </form>
      </SearchbarStyled>
    );
  }

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

