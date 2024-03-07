import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <hr className='border-t-2 border-gray-600 '></hr>
      <footer className=" text-gray-600 body-font ">
        <div className="container px-5 py-8 gap-5 flex justify-center items-center ">
          <input type='checkbox' className="  text-gray-900" />
          <span className='text-lg text-gray-500'>Select All</span>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500">
              Speed Test:
            </a>
            <a className="ml-3 text-gray-500 inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              10.55 Mbs
            </a>
            <a className="ml-3 inline-flex text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              6.30 Mbs
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer