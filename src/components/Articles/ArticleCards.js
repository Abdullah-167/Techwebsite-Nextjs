import React from 'react'
import Image from "next/image";
import Handshake from '../../../public/handshake.jpg'

const ArticleCards = () => {
  return (
    <div className='w-full my-20'>
      <div className='main-container'>
        <div className='flex gap-6'>
          <div className='bg-[#565656] w-[580px] h-[67s0px] rounded-lg'>
            <Image
              className="article-img w-fulls rounded-t-lg"
              src={Handshake}
              alt="Will Squire Discovery"
            />
            <h2 className='text-3xl mt-5 mx-5 text-white'>
              3 best way to outsource web development
            </h2>
            <p className='text-[17px] text-white mx-5 pt-3'>22nd August 2021 . 9 min read</p>
            <p className='text-[17px] text-white mx-5 pt-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <div className="flex flex-wrap items-center gap-1 mx-5 py-7">
              <span className="px-3 py-1 border border-gray-300 rounded-full cursor-pointer text-sm text-white">
                <a>Outsourcing</a>
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full cursor-pointer text-sm text-white">
                <a>Web Development</a>
              </span>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default ArticleCards