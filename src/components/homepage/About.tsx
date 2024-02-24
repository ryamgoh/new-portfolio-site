'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <h1 className='text-center text-4xl'>Welcome to my Next.js project</h1>
      <h2 className='text-center text-2xl'>
        This is a Next.js project with Tailwind CSS
      </h2>
      <h3 className='text-center text-xl'>
        This is a Next.js project with Tailwind CSS
      </h3>
      <p className='text-center text-lg'>
        This is a Next.js project with Tailwind CSS
      </p>
      <Image
        className='img'
        src='/profile.webp'
        alt='Next.js Logo'
        width={300}
        height={300}
      />
      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </div>
  );
};

export default About;
