import React from 'react'
import { GoFileSubmodule } from 'react-icons/go';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Engineering = () => {
    return (
        <div className='mt-14 mb-[80px] flex gap-20'>
            <div className='bg-gray-300 h-[480px] w-[230px]'>
                <h2 className='text-2xl text-center pt-[30px]'>Engineering</h2>
            </div>
            <div>
                <div className='mt-4 flex gap-8'>
                    <div>
                        <div className='flex gap-2 items-center py-5'>
                            <a className='text-3xl text-[#F98400]'><GoFileSubmodule /></a>
                            <span className='text-2xl'>Frontend engineering</span>
                        </div>
                        <p className='text-[18px] w-[400px] pb-5'>
                            Web development that focuses on the presentation aspect of your website,
                            enabling your users to visualise data, interact with it and connect.
                        </p>
                        <a className='flex items-center gap-2 text-[18px] text-[#F98400] hover:text-[#AE5C01] duration-300s cursor-pointer'>
                            VIEW FRONTEND ENGINEERING SERVICES <AiOutlineArrowRight />
                        </a>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center py-5'>
                            <a className='text-3xl text-[#F98400]'><GoFileSubmodule /></a>
                            <span className='text-2xl'>Frontend engineering</span>
                        </div>
                        <p className='text-[18px] w-[400px] pb-5'>
                            Web development that focuses on the presentation aspect of your website,
                            enabling your users to visualise data, interact with it and connect.
                        </p>
                        <a className='flex items-center gap-2 text-[18px] text-[#F98400] hover:text-[#AE5C01] duration-300s cursor-pointer'>
                            VIEW FRONTEND ENGINEERING SERVICES <AiOutlineArrowRight />
                        </a>
                    </div>
                </div>
                <div className='flex gap-8 pt-14'>
                    <div>
                        <div className='flex gap-2 items-center py-5'>
                            <a className='text-3xl text-[#F98400]'><GoFileSubmodule /></a>
                            <span className='text-2xl'>Frontend engineering</span>
                        </div>
                        <p className='text-[18px] w-[400px] pb-5'>
                            Web development that focuses on the presentation aspect of your website,
                            enabling your users to visualise data, interact with it and connect.
                        </p>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center py-5'>
                            <a className='text-3xl text-[#F98400]'><GoFileSubmodule /></a>
                            <span className='text-2xl'>Frontend engineering</span>
                        </div>
                        <p className='text-[18px] w-[400px] pb-5'>
                            Web development that focuses on the presentation aspect of your website,
                            enabling your users to visualise data, interact with it and connect.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Engineering