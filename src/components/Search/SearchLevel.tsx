import React from 'react';

const SearchLevel = () => {
  return (
    <div className="max-h-[3.125rem] w-full sm:w-1/4">
      <select
        id="level"
        className="text-gray-900 block h-full w-full rounded-xl border-none bg-white py-2.5 pl-[1.875rem] pr-8 text-sm text-black shadow-border-full focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="all">Level dự án</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};

export default SearchLevel;
