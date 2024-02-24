'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';

const About = () => {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: 'top 800px',
      // markers: true,
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 },
          0.2
        ),

      toggleActions: 'play none none none',
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    <section ref={aboutSection} aria-label='about me'>
      <Heading title='about me' />
      <div className='mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 '>
        <div className='top-28 overflow-hidden rounded-md md:sticky md:w-1/2'>
          <Image
            ref={profile}
            loading='lazy'
            className='aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto'
            src='/profile.webp'
            width='600'
            height='800'
            alt='portrait image of Huy standing in front of a tree and foliage'
          />
        </div>
        <div className='top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32'>
          <div className='w-full space-y-4 2xl:space-y-10'>
            <h3
              ref={heading}
              className='translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl'
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className=' translate-y-10 text-body-1 opacity-0 2xl:text-4xl'
            >
              I am an independent frontend developer and designer based in
              Singapore. I specialize in crafting elevated, intuitive, and
              minimalistic designs for startups and small businesses to help
              them stand out in the digital landscape with a powerful impact. 😎
              <br></br>
              <br></br>
              When I am not developing or designing, I enjoy creating videos
              that talk about frontend development, productivity and design
              on&nbsp;
              <a
                className='underline duration-300 ease-in-out hover:text-secondary-700'
                href='https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA'
                target='_blank'
              >
                YouTube📸
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
