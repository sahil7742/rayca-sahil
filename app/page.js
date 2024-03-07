
import React from 'react'
import SideBar from './component/SideBar'
import Footer from './component/Footer'
import Header2 from './component/Header2'

const page = () => {
  return (
    <>
      <div className="flex h-screen text-gray-200 body-font">
        {/* Sidebar */}
        <div className="w-64  p-2 text-gray-200  ">
          <SideBar/>
        </div>
        <div className="w-0.5 bg-gray-600 bg-opacity-80  h-full"></div>
        {/* Main Content */}
        <div className="flex-1 ">
          {/* Add your main content here */}
          <Header2/>
          <div>
          <div className="w-full text-gray-200 p-4 shadow-md rounded-md">
    <table className="min-w-full divide-y divide-gray-200 items-center justify-center">
      <thead>
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Left</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modification</th>
        </tr>
      </thead>
      <tbody className=" divide-y divide-gray-200">
        
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap"><input type='checkbox'/> File 1</td>
          <td className="px-6 py-4 whitespace-nowrap">2 MB</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
          <td className="px-6 py-4 whitespace-nowrap">2024-03-04 12:30 PM</td>
        </tr>

        
      </tbody>
    </table>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default page