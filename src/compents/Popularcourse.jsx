import React from 'react'

function Popularcourse() {
    return (
        <div className='  flex flex-col justify-center  mx-auto border-40 border-solid red bg-gray-100 w-full h-[25vw] m-12 '>
            <div class="  flex  justify-center ">
                <span class="bg-gray-400 w-[3vw] h-0.5 "></span>
                <h1 class="bg-blue-700 w-[4vw] h-1.1"></h1>
                <span class="bg-gray-400 w-[3vw] h-0.5"></span>
            </div>

            <div className='2xl:text-blue-900 font-bold text-3xl inline-block my-9 bg-bl text-center relative bottom-6  '>Popular Courses</div>
            <div className=' flex gap-5 justify-center relative bottom-6 '>
                {/* first */}



                <div className='overflow-hidden '>
                    <img className='2xl: w-[11vw]  h-[8vw] rounded-lg ' src="https://www.pccoer.com/images/mechanical-engineering.webp" alt="" />
                    <p className='  2xl: text-blue-900 text-xl font-bold'>Mechanical</p>
                    <p className='2xl: text-blue-900 text-xl font-bold'>Engineering</p>
                </div>
                <div className='overflow-hidden'>
                    <img className=' 2xl:w-[11vw]  h-[8vw] rounded-lg  ' src="https://www.pccoer.com/images/entc-engineering.webp" alt="" />
                    <p className='  2xl: mx-5 text-blue-900 text-xl font-bold '>E&TC </p>
                    <p className=' 2xl: mx-5 text-blue-900 text-xl font-bold'>Engineering</p>
                </div>


                {/* first */}

                {/* <div className='flex'>
                    <div className='md:overflow-hidden '>
                        <img className='md:w-[50vw] h-[30vw] rounded-lg' src="https://www.pccoer.com/images/mechanical-engineering.webp" alt="" />
                        <p className='   md:mx-5 text-blue-900 text-xl font-bold'>Mechanical</p>
                        <p className='  md: mx-5 text-blue-900 text-xl font-bold'>Engineering</p>
                    </div>
                    <div className=' md:overflow-hidden'>
                        <img className='  md:md:w-[50vw] h-[30vw] ' src="https://www.pccoer.com/images/entc-engineering.webp" alt="" />
                        <p className='  md: mx-5 text-blue-900 text-xl font-bold '>E&TC </p>
                        <p className='  md:mx-5 text-blue-900 text-xl font-bold'>Engineering</p>
                    </div>
                </div> */}



                <div className='overflow-hidden'>
                    <img className='w-[11vw]  h-[8vw] rounded-lg ' src="https://www.pccoer.com/images/computer-engineering.webp" alt=" " />
                    <p className='    mx-5 text-blue-900 text-xl font-bold'>Computer </p>
                    <p className='  mx-5 text-blue-900 text-xl font-bold'>Engineering</p>
                </div>
                <div className='overflow-hidden'>
                    <img className='w-[11vw]  h-[8vw] rounded-lg ' src="https://www.pccoer.com/images/civil-engineering.webp" alt=" " />
                    <p className='   mx-5 text-blue-900 text-xl font-bold' >Civil </p>
                    <p className='  mx-5 text-blue-900 text-xl font-bold'>Engineering</p>
                </div>
                <div className='overflow-hidden'>
                    <img className=' w-[11vw]  h-[8vw] rounded-lg' src="https://www.pccoer.com/images/it-engineering.webp" alt="" />
                    <p className='   mx-5 text-blue-900 text-xl font-bold'>IT Engineering </p>

                </div>
                <div className='overflow-hidden'>
                    <img className='w-[11vw]  h-[8vw] rounded-lg' src="https://www.pccoer.com/images/bba-and-bca.webp" alt="" />
                    <p className='     mb-[2vw]mx-5 text-blue-900 text-xl font-bold'>BBA/BCA </p>
                </div>
            </div>

        </div>
    )
}

export default Popularcourse