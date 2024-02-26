import React from 'react';
import { IoArrowUp } from 'react-icons/io5';

const Footer = () => {
  function toTop() {
    window.scrollTo(0, 0);
  }
  return (
    <footer className='mt-14 flex items-end justify-between px-5 py-4 text-body-4 md:text-body-3'>
      <div className='flex flex-col justify-between md:w-[62.5vw] md:flex-row lg:w-[57.5vw]'>
        <div className='flex space-x-1'>
          <span>&copy;</span>
          <span>2024</span>
          <span className='font-extrabold uppercase'>Ryann Goh</span>
        </div>
        <div>
          <span className='text-body-4 2xl:text-body-3'>
            Site designed and coded with 🧤
          </span>
        </div>
      </div>
      <button
        onClick={toTop}
        className='group col-span-2 flex w-fit items-center space-x-2 2xl:text-body-1'
      >
        <span className='uppercase duration-200 hover:font-black'>
          BACK TO TOP
        </span>
        <span className='duration-300 ease-in-out group-hover:-translate-y-3'>
          <IoArrowUp />
        </span>
      </button>
    </footer>
  );
};

export default Footer;
