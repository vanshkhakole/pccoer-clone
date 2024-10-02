import React from 'react'

function Circle() {
    return (
        <div className='flex gap-9 justify-center bg-gray-100  my-[6vw] h-[20vw] w-full'>
            {/* <img  className=' opacity-0.5 'src="	https://www.pccoer.com/images/about-pccoer.webp" alt="" />
        */}
            
            <div >
                <button className='rounded-full w-[10vw] h-[10vw] bg-blue-400 my-[50px] font-bold text-white text-2xl'>353</button>
                <p className=' mx-11 relative bottom-4 text-blue-800  font-bold'>PATENTS</p>
            </div>
            <div>
                <button className='rounded-full w-[10vw] h-[10vw] bg-blue-400 my-[50px] font-bold text-white text-2xl'>365</button>
                <p className=' mx-11 relative bottom-4 text-blue-800 font-bold'>COPYRIGHTS</p>
            </div>
            <div>
                <button className='rounded-full w-[10vw] h-[10vw] bg-blue-400 my-[50px] font-bold text-white text-2xl'>188</button>
                <p className=' mx-11 relative bottom-4 text-blue-800 font-bold'>PAPER</p>
                <p className='   mx-11 relative bottom-4 text-blue-800 font-bold'>PUBLICATIONS</p>
            </div>
            <div>
                <button className='rounded-full w-[10vw] h-[10vw] bg-blue-400 my-[50px] font-bold text-white text-2xl'>48</button>
                <p className=' mx-11 relative bottom-4 text-blue-800 font-bold'>PRODUCTS</p>
            </div>
            <div>
                <button className='rounded-full w-[10vw] h-[10vw] bg-blue-400 my-[50px] font-bold text-white text-2xl'>36</button>
                <p className=' mx-11 relative bottom-4 text-blue-800 font-bold '>MoUs</p>
            </div>

        </div>
    )
}

export default Circle