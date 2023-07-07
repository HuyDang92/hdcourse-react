// import * as React from 'react';
// import useAutocomplete from '@mui/base/useAutocomplete';
// import { styled } from '@mui/system';
import { useState, useEffect } from 'react';
import IonIcon from '@reacticons/ionicons';
import className from 'classnames/bind';
import styles from './InputSearch.module.scss';
const cx = className.bind(styles);

// const options = ['Firefox', 'Google Chrome', 'Microsoft Edge', 'Safari', 'Opera'];

// export default function InputSearch() {
//   const [isInputFocused, setInputFocused] = useState<boolean>(false);
//   const [value, setValue] = React.useState<string | null>(options[0]);
//   const [inputValue, setInputValue] = React.useState('');

//   const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
//     useAutocomplete({
//       id: 'controlled-state-demo',
//       options,
//       value,
//       onChange: (event, newValue) => setValue(newValue),
//       inputValue,
//       onInputChange: (event, newInputValue) => setInputValue(newInputValue),
//     });

//   return (
//     <Layout>
//       <StyledAutocomplete>
//         <StyledInputRoot
//           className={`flex items-center overflow-hidden rounded-full border-2 ${
//             isInputFocused ? 'border-org' : 'border-gray-200'
//           }`}
//           {...getRootProps()}
//         >
//           <IonIcon
//             name="search"
//             className={`
//               icon-search
//               px-2
//               py-1
//               ps-3
//               pt-2
//               text-3xl
//               text-gray-400
//               transition-all
//               hover:bg-gray-200
//               hover:text-org
//               ${isInputFocused ? 'text-org' : ''}`}
//           />
//           <input
//             className={`${cx(
//               'searchInput'
//             )} w-80 border-0 px-0 font-medium text-darkLight placeholder-gray-400 outline-none focus:border-transparent focus:ring-0`}
//             type="text"
//             name="nameSearch"
//             id="nameSearch"
//             placeholder="Tìm kiếm khóa học"
//             onFocus={() => {
//               setInputFocused(true);
//             }}
//             onBlur={() => setInputFocused(false)}
//             {...getInputProps()}
//           />
//         </StyledInputRoot>
//         {groupedOptions.length > 0 && (
//           <StyledListbox {...getListboxProps()}>
//             {(groupedOptions as string[]).map((option, index) => (
//               <StyledOption {...getOptionProps({ option, index })}>{option}</StyledOption>
//             ))}
//           </StyledListbox>
//         )}
//       </StyledAutocomplete>
//     </Layout>
//   );
// }

// const blue = {
//   100: '#DAECFF',
//   200: '#99CCF3',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   900: '#003A75',
// };

// const grey = {
//   50: '#f6f8fa',
//   100: '#eaeef2',
//   200: '#E5E7EB',
//   300: '#afb8c1',
//   400: '#8c959f',
//   500: '#6e7781',
//   600: '#57606a',
//   700: '#424a53',
//   800: '#32383f',
//   900: '#24292f',
// };

// const StyledAutocomplete = styled('div')`
//   position: relative;
// `;

// const StyledInputRoot = styled('div')(
//   ({ theme }) => `
//   font-weight: 400;
//   border-radius: 30px;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
//   display: flex;
//   gap: 5px;
//   padding-right: 5px;
//   overflow: hidden;
//   width: 320px;

// `
// );

// const StyledListbox = styled('ul')(
//   ({ theme }) => `
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   max-width: 320px;
//   border-radius: 12px;
//   overflow: auto;
//   outline: 0px;
//   max-height: 300px;
//   z-index: 1;
//   position: absolute;
//   left: 0;
//   right: 0;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
//   `
// );

// const StyledOption = styled('li')(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &:hover {
//     cursor: pointer;
//   }

//   &[aria-selected=true] {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.Mui-focused,
//   &.Mui-focusVisible {
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }

//   &.Mui-focusVisible {
//     box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
//   }

//   &[aria-selected=true].Mui-focused,
//   &[aria-selected=true].Mui-focusVisible {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }
//   `
// );

// const Layout = styled('div')``;
function InputSearch() {
  const [isInputFocused, setInputFocused] = useState<boolean>(false);
  return (
    <div
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
    </div>
  );
}

export default InputSearch;
