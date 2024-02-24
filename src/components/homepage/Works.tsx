import React from 'react';

interface WorksProps {
  forwardedRef: (el: HTMLDivElement | null) => void;
}

const Works = ({ forwardedRef }: WorksProps) => {
  return (
    <section
      ref={forwardedRef}
      id='works'
      className='nav-change my-[10%] overflow-hidden'
    >
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
      <p>Work</p>
    </section>
  );
};

export default Works;
