import React from 'react'
import Card from './card';

//https://github.com/codeit-bootcamp-frontend/FE-ADV-Practice/blob/ea917c6779c5d04fccae8f0b9f4a5b5e01da3da7/components/MarqueeLeftToRight.tsx

function Slideanimation() {
  return (
    <div className='flex flex-col justify-center items-center max-w-[80rem] m-auto py-[8rem]'>
      <div className='mb-10 py-5'>
        <div className='text-3xl mb-4'>Everyone is changing their life with Pocket.</div>
        <div className='text-text_gray'>Thousands of people have doubled their net-worth in the last 30 days.</div>
      </div>

      <div className='flex gap-5'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Slideanimation;