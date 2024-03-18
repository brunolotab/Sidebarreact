import React from 'react'
import Mainpage from './Components/Mainpage'
import { BrowserRouter } from 'react-router-dom'

function SideBarApp() {
  return (
    <>
    <BrowserRouter>
    <Mainpage/>
    </BrowserRouter>
    
    </>
  )
}

export default SideBarApp