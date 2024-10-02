import React from 'react'

function Campusvideo() {
  return (
    <div className='m-2 p-2'>
        <video width="100%" loop autoPlay muted>
        <source
          src="https://www.pccoer.com/pccoer-website-introductory-cover-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Campusvideo