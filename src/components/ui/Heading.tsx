interface HeadingProps {
  title: string;
}

export default function Heading({ title }: HeadingProps) {
  return (
    <>
      <div className='section-heading select-none'>
        <div className='heading flex translate-y-56 items-center justify-center space-x-[3%]'>
          <h2 className='w-fit text-5xl font-medium uppercase text-secondary-600 sm:text-heading-2'>
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}
