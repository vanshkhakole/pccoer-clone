import React from 'react'

function Navbar3() {
  return (
    <div className='container bg-blue-300	 h-24 p-15  m-0 my-9 mt-5'>

      <nav >
        <ul className='flex gap-4 justify-center m-4 p-3 font-bold text-white'>
          <li className='hover:bg-blue-700'>HOME</li>
          <li className='hover:bg-blue-700'>ABOUT US</li>
          <li className='hover:bg-blue-700'>DEPARTMENT</li>
          <li className='hover:bg-blue-700'>T&P</li>
          <li className='hover:bg-blue-700'>GOVERNANCE</li>
          <li className='hover:bg-blue-700'>ADMISSION</li>
          <li className='hover:bg-blue-700'>STUDENT CORNER</li>
          <li className='hover:bg-blue-700'>R&I</li>
          <li className='hover:bg-blue-700'>RANKING/ACCREDITATION</li>
          <li className='hover:bg-blue-700'>NAAC</li>
          <li className='hover:bg-blue-700'>ERP</li>

        </ul>
      </nav>

      <nav>
        <ul className='flex gap-4 mx-[15vw] pb-16 font-bold text-white relative bottom-3'>
          <li className='hover:bg-blue-700'>CONTACT US</li>
        </ul>
      </nav>


    </div>
  )
}

export default Navbar3