'use client';
import React, { useState } from 'react';
import { SearchManufacturer } from './SearchManufacturer';

export const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('');
  const handleSearch = () => {};
  return (
    <form action='' className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        {/* <SearchButton otherClasses='sm:hidden' /> */}
      </div>
    </form>
  );
};
