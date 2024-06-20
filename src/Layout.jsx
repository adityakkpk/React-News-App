import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout