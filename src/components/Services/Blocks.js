import React from 'react'

const Blocks = () => {
    return (
        <div className='w-full mx-auto'>
            <div className='main-container'>
                <div className='absolute top-[540px] left-[220px] flex justify-center gap-6'>
                    <div className='bg-white rounded-md w-[278px]'>
                        <h2 className='flex justify-center mx-auto pt-[29px] pb-4 mb-10 text-3xl border-b-gray-300 border-b-[1px] w-[200px]'>
                            Small
                        </h2>
                        <p className='text-center px-2 text-[18px]'>
                            Beautifully simple brochure styled site or landing pages.
                        </p>
                        <div className=' block-bg h-[110px] w-[275px] bg-gray-500'>
                            <div className='mt-12 mx-6 py-5'>
                                <button className=' w-[165px] h-[43px] bg-[#F98400] rounded-[5px] cursor-pointer text-sm text-white ml-8 hover:bg-[#AE5C01] duration-300"'>FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-md w-[278px]'>
                        <h2 className='flex justify-center mx-auto pt-[29px] pb-4 mb-10 text-3xl border-b-gray-300 border-b-[1px] w-[200px]'>
                            Medium
                        </h2>
                        <p className='text-center px-2 text-[18px]'>
                            Beautifully simple brochure styled site or landing pages.
                        </p>
                        <div className=' block-bg h-[110px] w-[275px] bg-gray-500'>
                            <div className='mt-12 mx-6 py-5'>
                                <button className=' w-[165px] h-[43px] bg-[#F98400] rounded-[5px] cursor-pointer text-sm text-white ml-8 hover:bg-[#AE5C01] duration-300"'>FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-white rounded-md w-[278px]'>
                        <h2 className='flex justify-center mx-auto pt-[29px] pb-4 mb-10 text-3xl border-b-gray-300 border-b-[1px] w-[200px]'>
                            Large
                        </h2>
                        <p className='text-center px-2 text-[18px]'>
                            Beautifully simple brochure styled site or landing pages.
                        </p>
                        <div className=' block-bg h-[110px] w-[275px] bg-gray-500'>
                            <div className='mt-12 mx-6 py-5'>
                                <button className=' w-[165px] h-[43px] bg-[#F98400] rounded-[5px] cursor-pointer text-sm text-white ml-8 hover:bg-[#AE5C01] duration-300"'>FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blocks