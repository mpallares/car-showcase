import React from 'react';
import Image from 'next/image';

interface SearchButtonProps {
  otherClasses: string;
}

export const SearchButton = ({ otherClasses }: SearchButtonProps) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={'/magnifying-glass.svg'}
        alt={'magnifying glass'}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );
};
