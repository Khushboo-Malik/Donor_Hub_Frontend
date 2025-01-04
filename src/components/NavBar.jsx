//Used as alternative for a tag to ensure client side refresh
import {NavLink} from 'react-router-dom'
import React from 'react'
import logo from '../assets/images/logo (1).png';

//All dynamic parts of code enclosed woth curly braces
const NavBar = () => {
  return (
    <>
    <nav className="border-b" style={{ backgroundColor: '#e7424b' }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/*<!-- Logo -->*/}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-14 w-auto"
                src={logo}
                alt="Donor Hub"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Donor Hub</span
              >
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={({isActive})=>isActive?'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2':'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'}
                  >Home</NavLink>
                <NavLink
                  to="/donate"
                  className={({isActive})=>isActive?'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2':'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'}
                  >Donate</NavLink>
                <NavLink
                  to="/organize"
                  className={({isActive})=>isActive?'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2':'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'}
                  >Organize</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar