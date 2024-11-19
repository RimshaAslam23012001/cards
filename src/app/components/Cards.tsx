import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-wrap -mx-2'>
        <div className='w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4'>
          <div className='items-center border rounded-lg shadow-2xl shadow-black'>
            <div className='flex justify-around'>
              <Image
                src="/little.jpg"
                alt="teddy bear"
                height={180}
                width={180}
                className='w-full h-auto rounded-lg'
              />
            </div>
            <p className='text-center py-2'>Little Teddy Bear</p>
            <p className='text-center py-2'>Rs:800</p>
            <div className='flex justify-center'>
              <button className='bg-blue-600 text-white py-1 px-4 rounded'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4'>
          <div className='items-center border rounded-lg shadow-2xl shadow-black'>
            <div className='flex justify-around'>
            <Image
                src="/teddy.jpg"
                alt="pink teddy"
                height="140"
                width="140"
                className='w-full h-auto rounded-lg'
              />
            </div>
            <p className='text-center py-2'>Teddy Bear</p>
            <p className='text-center py-2'>Rs:1000</p>
            <div className='flex justify-center'>
              <button className='bg-blue-600 text-white py-1 px-4 rounded'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4'>
          <div className='items-center border rounded-lg shadow-2xl shadow-black'>
          <div className='flex justify-around'>
            <Image
                src="/giant.jpg"
                alt=" giant teddy"
                height="170"
                width="170"
                className='w-full h-auto rounded-lg'
              />
            </div>
            <p className='text-center py-2'>Giant Teddy Bear</p>
            <p className='text-center py-2'>Rs:1200</p>
            <div className='flex justify-center'>
              <button className='bg-blue-600 text-white py-1 px-4 rounded'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
     </div>
    </div>
    
  );
}

export default Cards;
