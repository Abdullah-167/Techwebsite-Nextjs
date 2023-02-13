import React from 'react'
import Image from "next/image";
import ReactPic from '../../../public/react.svg'
import TypeScript from '../../../public/typeScript.svg'
import JavascriptPic from '../../../public/js.svg'
import NextPic from '../../../public/nextjs.svg'
import CssPic from '../../../public/Css.svg'
import HtmlPic from '../../../public/html.svg'
import GitPic from '../../../public/git.svg'


const Technologies = () => {
    return (
        <div className='w-full'>
            <div className='main-container'>
                <h1 className='text-center whitespace-normal text-4xl pt-40 font-medium'>Technologies</h1>
                <p className='text-center text-2xl pt-8'>Looking for frontend development services using specific technologies?<br></br>
                    Here’s some of the core tech we use:</p>
                <div className='flex mt-20 gap-11 justify-center'>
                    <div className='flex gap-5'>
                        <Image className='mb-16' src={ReactPic} width={45} />
                        <div>
                            <span className='text-xl'>React.js</span>
                            <p className='text-sm pt-6 w-[280px]'>Create robust interfaces using Facebook's React.js framework.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Image className='mb-12' src={TypeScript} width={45} />
                        <div>
                            <span className='text-xl'>Typescript</span>
                            <p className='text-sm pt-6 w-[280px]'>Engineer apps with increased safety using Microsoft's Typescript.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Image className='mb-12' src={JavascriptPic} width={45} />
                        <div>
                            <span className='text-xl'>Javascript</span>
                            <p className='text-sm pt-6 w-[280px]'>Engineer apps with increased safety using Microsoft's Typescript.</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-20 gap-11 justify-center'>
                    <div className='flex gap-5'>
                        <Image className='mb-16' src={NextPic} width={45} />
                        <div>
                            <span className='text-xl'>Next.js</span>
                            <p className='text-sm pt-6 w-[280px]'>Create robust interfaces using Facebook's React.js framework.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Image className='mb-12' src={CssPic} width={45} />
                        <div>
                            <span className='text-xl'>CSS</span>
                            <p className='text-sm pt-6 w-[280px]'>Engineer apps with increased safety using Microsoft's Typescript.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Image className='mb-12' src={HtmlPic} width={45} />
                        <div>
                            <span className='text-xl'>HTML</span>
                            <p className='text-sm pt-6 w-[280px]'>Engineer apps with increased safety using Microsoft's Typescript.</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 justify-center mt-20'>
                    <Image className='mb-12 ' src={GitPic} width={50} />
                    <div>
                        <span className='text-xl'>HTML</span>
                        <p className='text-sm pt-6 w-[280px]'>Engineer apps with increased safety using Microsoft's Typescript.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies