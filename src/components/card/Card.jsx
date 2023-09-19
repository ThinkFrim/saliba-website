import React from "react";

const Card = ({ img, text, subtext }) => {
  return (
    <div className='flex items-center justify-center p-4'>
      <div className='text-center'>
        <img src={img} alt='' className='mx-auto' />
        <h3 className='mt-2 text-xl'>{text}</h3>
        <p className='mt-1 text-sm'>{subtext}</p>
      </div>
    </div>
  );
};

export default Card;
