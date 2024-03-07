import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-200 body-font ">
      <div className="container mx-auto flex flex-col p-5  md:flex-row  items-center">
        <nav className="flex lg:w-4/6 flex-wrap items-center text-base md:ml-5">
          <Link href="" className="mr-5 hover:text-gray-600">Tasks</Link>
          <Link href="" className="mr-5 hover:text-gray-600">File</Link>
          <Link href="" className="mr-5 hover:text-gray-600">Downloads</Link>
          <Link href="" className="mr-5 hover:text-gray-600">View</Link>
          <Link href="" className="mr-5 hover:text-gray-600">Help</Link>
        </nav>
        <div className="lg:w-2/6 inline-flex lg:justify-end ml-5 lg:ml-0">
          <input type='search' placeholder="serach from list"
            className="inline-flex items-center  bg-gray-700 border-0 py-3 px-2 rounded-xl focus:outline-none text-gray-200
           text-base mt-4 md:mt-0 " />
        </div>
      </div>
      <hr className='border-t-2 border-gray-600 '></hr>
    </header>
  )
}

export default Header