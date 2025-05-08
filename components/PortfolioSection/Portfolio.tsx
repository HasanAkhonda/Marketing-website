import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
    return (
        <section id='portfolio'
            className="w-full bg-[#21184a]"

        >
            <div className=" text-white rounded shadow-md max-w-5xl mx-5 md:mx-auto  md:my-24 ">
                <h2 className="font-bold md:text-center  text-[32px] sm:text-[40px] my-8 md:text-[48px] text-start">
                    Our Portfolio
                </h2>
                
                <section className='flex flex-col md:flex-row m-auto gap-20'>
                    <div className="flex m-auto w-full md:w-1/3 border-8 border-white/40 rounded-3xl">
                        <Image
                            className="aspect-square  w-full h-full object-cover rounded-2xl"
                            src="/Portfolio1.jpg"
                            width={30000}
                            height={20000}
                            alt="profilepic"
                        />
                    </div>

                    <div className='md:w-2/3 w-full'>
                        <h2 className="flex flex-start font-bold text-center  text-[32px] sm:text-[40px] md:text-[48px] mb-12">
                            Portfolio
                        </h2>
                        <p > Ergonomics Advance specializes in providing ergonomic assessments and evaluations to enhance workplace comfort and reduce injuries.  Their certified specialists analyze employees' behaviors, office spaces, and equipment to offer tailored recommendations aimed at improving productivity and minimizing discomfort.  Services include office ergonomic assessments, industrial ergonomics, dental ergonomics, and ergonomics training.  They serve various locations across California, including Beverly Hills, El Segundo, Hollywood, and Studio City.</p>
                        <a
                            href="#sass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 bg-white text-[#1A0542] px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition mb-6"
                        >
                            View Website
                        </a>
                    </div>
                </section>
                <span className="flex items-center">
                    <span className="h-px flex-1 bg-white/30"></span>
                </span>
                <section className='flex flex-col md:flex-row m-auto gap-20'>
                    <div className="flex m-auto w-full md:w-1/3 border-8 border-white/40 mt-6 rounded-3xl">
                        <Image
                            className="aspect-square  w-full h-full object-cover rounded-2xl"
                            src="/Portfolio1.jpg"
                            width={30000}
                            height={20000}
                            alt="profilepic"
                        />
                    </div>

                    <div className='md:w-2/3 w-full'>
                        <h2 className="flex flex-start font-bold text-center  text-[32px] sm:text-[40px] md:text-[48px] mb-12">
                            Portfolio
                        </h2>
                        <p > Ergonomics Advance specializes in providing ergonomic assessments and evaluations to enhance workplace comfort and reduce injuries.  Their certified specialists analyze employees' behaviors, office spaces, and equipment to offer tailored recommendations aimed at improving productivity and minimizing discomfort.  Services include office ergonomic assessments, industrial ergonomics, dental ergonomics, and ergonomics training.  They serve various locations across California, including Beverly Hills, El Segundo, Hollywood, and Studio City.</p>
                        <a
                            href="#sass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 bg-white text-[#1A0542] px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition mb-6"
                        >
                            View Website
                        </a>
                    </div>
                </section>
                <span className="flex items-center">
                    <span className="h-px flex-1 bg-white/30"></span>
                </span>
                <section className='flex flex-col md:flex-row m-auto gap-20'>
                    <div className="flex m-auto w-full md:w-1/3 border-8 border-white/40 rounded-3xl mt-6">
                        <Image
                            className="aspect-square  w-full h-full object-cover rounded-2xl"
                            src="/Portfolio1.jpg"
                            width={30000}
                            height={20000}
                            alt="profilepic"
                        />
                    </div>

                    <div className='md:w-2/3 w-full'>
                        <h2 className="flex flex-start font-bold text-center  text-[32px] sm:text-[40px] md:text-[48px] mb-12">
                            Portfolio
                        </h2>
                        <p > Ergonomics Advance specializes in providing ergonomic assessments and evaluations to enhance workplace comfort and reduce injuries.  Their certified specialists analyze employees' behaviors, office spaces, and equipment to offer tailored recommendations aimed at improving productivity and minimizing discomfort.  Services include office ergonomic assessments, industrial ergonomics, dental ergonomics, and ergonomics training.  They serve various locations across California, including Beverly Hills, El Segundo, Hollywood, and Studio City.</p>
                        <a
                            href="#sass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 bg-white text-[#1A0542] px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition mb-6"
                        >
                            View Website
                        </a>
                    </div>
                </section>                
            </div>
        </section>

    )
}

export default Portfolio
