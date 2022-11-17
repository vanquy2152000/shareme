import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <ThreeDots ariaLabel='three-dots-loading' height={50} width={120} visible={true} color={"#20dece"} className="m-5" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default Spinner