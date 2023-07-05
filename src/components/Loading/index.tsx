import React from 'react';
import { GridSpinner } from 'react-spinners-kit';

const MyComponent = ({ children }: any) => {
  return (
    <div className="">
      <div className="fixed bottom-0 left-0 z-10 right-0 top-0 bg-black opacity-60"></div>
      <div className="absolute z-10 top-72 left-[45rem]">
        <GridSpinner className="" loading={true} size={60} color="#ff6600" />
        <h1 className="mt-3 -ms-2 font-medium text-white">{children}</h1>
      </div>
    </div>
  );
};

export default MyComponent;
