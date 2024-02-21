import React from 'react'
import Image from 'next/image'
const rightdbleftdiv = () => {
  return (
    <div className='w-[30%] h-[90%] bg-[#111729] rounded-2xl overflow-visible'>
      <div className='relative flex flex-col justify-center items-center mb-8'>
        <Image src="/icons/Ellipse 4.png" width={100} height={100} />
        <div className='w-[70px] h-[70px] rounded-[50%] bg-[#FCD5D8] absolute'>
          <Image src="/images/image6.png" alt='image6' width={50} height={50} />
        </div>
        <h1>Aliam Colter</h1>
        <small>The Physician</small>
      </div>
    </div>
  )
}

export default rightdbleftdiv