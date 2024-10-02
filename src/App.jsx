import { useState } from 'react'

import './App.css'
import Navbar from './compents/Navbar'
import Navbar2 from './Navbar2'
import Navbar3 from './Navbar3'
import Campusvideo from './compents/Campusvideo'
import Campusimg from './compents/Campusimg'
import Popularcourse from './compents/Popularcourse'
import Lifeoncampus from './compents/Lifeoncampus'
import Circle from './compents/Circle'
import Footer from './compents/Footer'
import Footer2 from './compents/Footer2'
import Ourrecruiters from './compents/Ourrecruiters'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <div>
        <span className='font-bold  text-blue-700'>Highlights:</span>
      </div>
      <Campusvideo />
      <div className='text-center'>
        <div class="text-center mb-4">
          <div>

          </div>
          <div class=" flex  justify-center  mt-10">
            <span class="bg-gray-400 w-[3vw] h-0.5 "></span>
            <h1 class="bg-blue-700 w-[4vw] h-1.1"></h1>
            <span class="bg-gray-400 w-[3vw] h-0.5"></span>
          </div>

        </div>
        <span className='text-blue-900  text-3xl font-bold text-m-2 my-6 inline-block  relative bottom-[1vw]'>About Us</span>
      </div>
      <Campusimg />

      <Popularcourse />

      <div class=" flex  justify-center my-10 ">
        <span class="bg-gray-400 w-[3vw] h-0.5 "></span>
        <h1 class="bg-blue-700 w-[4vw] h-1.1"></h1>
        <span class="bg-gray-400 w-[3vw] h-0.5"></span>
      </div>

      <div className='text-center'>
        <span className='text-blue-900  text-3xl font-bold text-m-2 my-6 inline-block  relative bottom-[3vw]'>Life on Campus</span>
      </div>
      <Lifeoncampus />
      <Circle />

      <div class=" flex  justify-center my-10  ">
        <span class="bg-gray-400 w-[3vw] h-0.5 "></span>
        <h1 class="bg-blue-700 w-[4vw] h-1.1"></h1>
        <span class="bg-gray-400 w-[3vw] h-0.5"></span>
      </div>
      <div className='text-center'>
        <span className='text-blue-900  text-3xl font-bold text-m-2 my-6 inline-block  relative bottom-[3vw]'>Our Recruiters</span>
      </div>
      <Ourrecruiters />
      <Footer />
      <Footer2 />
    </>
  )
}

export default App



