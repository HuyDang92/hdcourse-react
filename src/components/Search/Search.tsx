import React from 'react';
import SearchProject from './SearchProject';
import SearchLevel from './SearchLevel';

const Search = () => {
  return (
    <div className="flex w-full flex-col gap-8 bg-white md:flex-row">
      <SearchProject />
      <SearchLevel />
    </div>
  );
};

export default Search;
