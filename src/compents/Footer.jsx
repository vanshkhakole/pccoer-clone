import React from 'react'

function Footer() {
    return (
        
        <div className=' main bg-blue-950 w-full h-[18vw] flex mt-11'>
            <div className=' m-10 p-10'>
                <p className='font-bold text-white-900 text-blue-800 text-2xl'>About PCCOE&R</p>
                <p className='w-[15vw]  text-white mt-5'>Pimpri Chinchwad College of Engineering & Research, Ravet was established in 2014 under the aegis of Pimpri Chinchwad Education Trust (PCET).</p>
            </div>

            <div className='m-10 p-10'>
                <p className='font-bold text-white-900 text-blue-800 text-2xl'>Quick Links</p>
                <ul className=' text-white mt-5'>
                    <li>&gt;Home</li>
                    <li>&gt;About </li>
                    <li>&gt;Research</li>
                    <li>&gt;Admission</li>
                </ul>
            </div >
       


         <div className=' m-10 p-10'> 
                <p className='font-bold text-white-900 text-blue-800 text-2xl '>Get in Touch</p>
                <p className='w-[15vw]  text-white mt-5 '>  Plot No. B, Sector no. 110,
                    Gate no.1; Laxminagar, Ravet, Haveli, Pune - 412101
                    8237238080
                    pccoer.ravet@gmail.com</p>
            </div>

            <div className='m-10 p-10'>
                <p className='font-bold text-white-900 text-blue-800 text-2xl'>Visitor Number</p>
                <p className='w-[15vw]  text-white mt-5'>website counter
                    (From January 1st, 2023 Onwards)

                </p>
            </div> 




        </div>
    )
}

export default Footer
