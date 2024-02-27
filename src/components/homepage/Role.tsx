import React from 'react';
import Globe from '../globe/Globe';

interface RoleProps {
  forwardedRef: (el: HTMLDivElement | null) => void;
}

const Role = ({ forwardedRef }: RoleProps) => {
  return (
    <section
      ref={forwardedRef}
      id='about'
      className='flex select-none flex-col items-center justify-center overflow-hidden py-10 md:my-[12%]'
      aria-label=''
    >
      <div className='flex w-full items-center space-x-20'>
        <h1 className='text-heading-1 font-medium leading-[1.25em] text-secondary-400 md:leading-[1.08em]'>
          I create elevating digital experiences that inspire and connect with
          people through development and design.
        </h1>
      </div>
    </section>
  );
};

export default Role;
