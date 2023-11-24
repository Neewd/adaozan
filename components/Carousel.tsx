'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Carousel({ images }: { images: string[] }) {
  const [curentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-cream-100 h-full w-full relative">
      <Image
        key={curentIndex}
        src={images[curentIndex - 1]}
        alt=""
        fill={true}
        className="hidden"
      />
      <Image
        key={curentIndex}
        src={images[curentIndex]}
        alt=""
        fill={true}
        priority={true}
        className="object-cover min-h-full w-full"
      />
      <Image
        key={curentIndex}
        src={images[curentIndex + 1]}
        alt=""
        fill={true}
        className="hidden"
      />

      <div className="absolute inset-0 flex items-center justify-between px-4 h-full">
        <div className="hover:cursor-pointer" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="hover:cursor-pointer" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
