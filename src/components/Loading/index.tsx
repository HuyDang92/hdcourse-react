import React from 'react';
import { GridSpinner } from 'react-spinners-kit';

const MyComponent = ({ children }: any) => {
  return (
    <div className="">
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-60"></div>
      <div className="absolute left-[45rem] top-72 z-10">
        <GridSpinner className="" loading={true} size={60} color="#ff6600" />
        <h1 className="-ms-2 mt-3 font-medium text-white">{children}</h1>
      </div>
    </div>
  );
};

export default MyComponent;
