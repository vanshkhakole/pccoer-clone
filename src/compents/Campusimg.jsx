import React from 'react'

function Campusimg() {
    return (

        <div className=' 2xl:flex justify-center gap-2 md:m-5 flex justify-center gap-2'>

            <div className='overflow-hidden '>
                <img className='rounded-lg hover:scale-125' src="https://www.pccoer.com/images/about-pcet.png" alt="" />
                <div>
                    <h1 className='text-blue-900 font-bold text-2xl my-3'>ABOUT PCET</h1>
                    <p className=' 2xl:w-80 md:w-56'>Pimpri Chinchwad Education Trust(PCET) was established by Late Shri. S. B. Patil in the year 1990 with a vision to provide value added educational platform to society in multiple dimensions right from Nursery to Doctoral programs in all professional ..</p>
                    <button className='border-radius-2px bg-blue-400 rounded-xl my-3 w-[6vw] hover:bg-blue-600 text-white'>Read more</button>
                </div>
            </div>
            <div className='second overflow-hidden'>
                <img className='rounded-lg hover:scale-125 ' src="https://www.pccoer.com/images/about-pccoer.webp" alt="" />
                <div>
                    <h1 className='text-blue-900 font-bold text-2xl my-3'>ABOUT PCCOE&R</h1>
                    <p className='2xl:w-80 md:w-56 '>Pimpri Chinchwad College of Engineering & Research (PCCOER), Ravet was established in 2014 under the aegis of Pimpri Chinchwad Education Trust (PCET).Presently the Institute offers Undergraduate (UG) Programmes in four disciplines viz. Civil Engineering ..</p>
                    <button className='border-radius-2px bg-blue-400 rounded-xl my-3 w-[6vw] hover:bg-blue-600  text-white'>Read more</button>
                </div>
            </div>
            <div className='third overflow-hidden'>
                <img className='rounded-lg hover:scale-125 ' src="https://www.pccoer.com/images/principal-desk.png" alt="" />
                <div>
                    <h1 className='text-blue-900 font-bold text-2xl my-3'>PRINCIPAL'S DESK</h1>
                    <p className='2xl:w-80 md:w-56'>At the very outset, I extend a very warm welcome to all of you! It is indeed an honor and pleasure as the Principal, to introduce you to Pimpri Chinchwad Education Trust’s (PCET’s) Pimpri Chinchwad College of Engineering & Research (PCCOER).</p>
                    <button className=' 2xl:border-radius-2px bg-blue-400 rounded-xl my-3 w-[6vw] hover:bg-blue-600 text-white'>Read more</button>
                </div>
            </div>






        </div>
    )
}

export default Campusimg