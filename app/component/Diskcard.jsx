import React from 'react'

const Diskcard = () => {
  return (
    <>
      <section className="text-white-600  bg-slate-700 rounded-lg flex flex-col justify-between items-center">
        <div className="container p-2 mx-auto">
          <div className="mb-1">
            <div className=" w-full mb-6 lg:mb-0 flex flex-row items-center justify-between">
              <h1 className="sm:text-xl text-sm mb-2 text-white">Disk Space</h1>
              <h1 className="sm:text-xl text-sm mb-2 text-white">...</h1>
            </div>
            <div className=''>emoji</div>
            <button className=" w-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-lg px-1 py-2 mt-20">Disk Cleaner</button>
            </div>
          </div>
      </section>
    </>
  )
}

export default Diskcard