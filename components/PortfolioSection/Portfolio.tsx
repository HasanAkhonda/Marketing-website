import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
    return (
        <section id='portfolio'
            className="w-full bg-[#21184a]"
 
        >
            <div className=" text-gray-50 rounded shadow-md max-w-5xl mx-5 md:mx-auto  md:my-24 ">
                <h2 className="font-bold text-white md:text-center  text-[32px] sm:text-[40px] my-6 md:text-5xl text-start">
                    Our Portfolio
                </h2>
                
                <section className='flex flex-col md:flex-row md: justify-center gap-16'>
                    <div className="flex m-auto w-full md:w-1/3 border-8 border-white/40 rounded-3xl">
                        <Image
                            className="aspect-square  w-full h-full object-cover rounded-2xl"
                            src="/Portfolio1.jpg"
                            width={30000}
                            height={20000}
                            alt="profilepic"
                        />
                    </div>

                    <div className='md:w-2/3 w-full h-fit my-auto'>
                        <h2 className="flex flex-start font-semibold text-center my-6 text-4xl sm:text-[40px] md:text-5xl">
                            Portfolio
                        </h2>
                        <p className='font-light '> Ergonomics Advance specializes in providing ergonomic assessments and evaluations to enhance workplace comfort and reduce injuries.  Their certified specialists analyze employees' behaviors, office spaces, and equipment to offer tailored recommendations aimed at improving productivity and minimizing discomfort.  Services include office ergonomic assessments, industrial ergonomics, dental ergonomics, and ergonomics training.  They serve various locations across California, including Beverly Hills, El Segundo, Hollywood, and Studio City.</p>
                        <a
                            href="#sass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-fit bg-white my-6 text-[#1A0542] px-5 py-3 rounded-sm font-semibold hover:bg-gray-100 transition"
                        >
                            View Website
                        </a>
                    </div>
                </section>
                <span className="flex items-center my-6">
                    <span className="h-px flex-1 bg-white/30"></span>
                </span>
                <section className='flex flex-col md:flex-row md: justify-center gap-16'>
                    <div className="flex m-auto w-full md:w-1/3 border-8 border-white/40 rounded-3xl">
                        <Image
                            className="aspect-square  w-full h-full object-cover rounded-2xl"
                            src="/Portfolio1.jpg"
                            width={30000}
                            height={20000}
                            alt="profilepic"
                        />
                    </div>

                    <div className='md:w-2/3 w-full h-fit my-auto'>
                        <p className='font-light '> Ergonomics Advance specializes in providing ergonomic assessments and evaluations to enhance workplace comfort and reduce injuries.  Their certified specialists analyze employees' behaviors, office spaces, and equipment to offer tailored recommendations aimed at improving productivity and minimizing discomfort.  Services include office ergonomic assessments, industrial ergonomics, dental ergonomics, and ergonomics training.  They serve various locations across California, including Beverly Hills, El Segundo, Hollywood, and Studio City.</p>
                        <a
                            href="#sass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-fit bg-white my-6 text-[#1A0542] px-5 py-3 rounded-sm font-semibold hover:bg-gray-100 transition"
                        >
                            View Website
                        </a>
                    </div>
                </section>
                <span className="flex items-center my-6">
                    <span className="h-px flex-1 bg-white/30"></span>
                </span>
                <section className='flex flex-col md:flex-row md: justify-center gap-16'>
                    <div className="flex m-auto w-full md:w-1/3 border-8 border-white/40 rounded-3xl">
                        <Image
                            className="aspect-square  w-full h-full object-cover rounded-2xl"
                            src="/Portfolio1.jpg"
                            width={300}
                            height={200}
                            alt="profilepic"
                        />
                    </div>

                    <div className='md:w-2/3 w-full h-fit my-auto'>
                        <p className='font-light '> Ergonomics Advance specializes in providing ergonomic assessments and evaluations to enhance workplace comfort and reduce injuries.  Their certified specialists analyze employees' behaviors, office spaces, and equipment to offer tailored recommendations aimed at improving productivity and minimizing discomfort.  Services include office ergonomic assessments, industrial ergonomics, dental ergonomics, and ergonomics training.  They serve various locations across California, including Beverly Hills, El Segundo, Hollywood, and Studio City.</p>
                        <a
                            href="#sass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-fit bg-white my-6 text-[#1A0542] px-5 py-3 rounded-sm font-semibold hover:bg-gray-100 transition"
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
