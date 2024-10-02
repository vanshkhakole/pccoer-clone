import React from 'react'


function Navbar() {
  return (
    
        <nav className='bg-slate-300 firstnav justify-evenly flex h-[30px]'>
      
                <div className=' bg-slate-300 justify-center flex gap-3'>
                <ul className='flex gap-2 justify-center'>
                <li className=''> 8237238080 </li>
                <li className=''>|pccoer.ravet@gmail.com</li>
                </ul>
                </div>
                <div>
                <ul className='  flex gap-3 justify-center '>
                <li className=' international bg-blue-500  text-white font-bold left-[10vw] gap-[6vw]  h-[30px] p-1 '>International Admission Enquiry</li>
                <li>|</li>
                <li className='bg-orange-400 text-white font-bold  h-[30px] p-1'>Admission Enquiry</li>
                <li className=''>| Media </li>
                <li>| Our Journal </li>
                <li>| IIC </li>
                <li>| Events</li>
                </ul>
                </div>
               
                
              

           
        </nav>
  )
}

export default Navbar