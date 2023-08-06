import { useState, useEffect } from 'react';
import IonIcon from '@reacticons/ionicons';
import className from 'classnames/bind';
import styles from './InputSearch.module.scss';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

const cx = className.bind(styles);
function InputSearch() {
  const navigate = useNavigate();
  const [isInputFocused, setInputFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    const convertedValue = slugify(search, {
      replacement: '-',
      lower: true,
      strict: true,
    });
    navigate(`/categories/${convertedValue}`);
    setSearch('');
  };
  return (
    <form
      onSubmit={handleSearch}
      className={`flex items-center overflow-hidden rounded-full border-2 ${
        isInputFocused ? 'border-org' : 'border-gray-200'
      }`}
    >
      <input
        className={`${cx(
          'searchInput'
        )} w-72 rounded-full border-0 ps-4 font-medium text-darkLight placeholder-gray-400 outline-none focus:border-transparent focus:ring-0`}
        type="text"
        name="nameSearch"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="nameSearch"
        placeholder="Tìm kiếm khóa học"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <IonIcon
        name="search"
        className={cx(
          'px-2',
          'py-2',
          'text-2xl',
          'text-gray-400',
          'icon-search',
          'transition-all',
          'hover:text-org',
          'hover:bg-gray-200',
          `${isInputFocused ? 'text-org' : ''}`
        )}
      />
    </form>
  );
}

export default InputSearch;
