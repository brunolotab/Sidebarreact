import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Navpage from './Navpage'

function Mainpage() {
  return (
    <>
    {/* heading section */}
    <section >
        <div >
            <Navbar/>
        </div>
    </section>


    {/* sidebar section */}
    <section  style={{paddding:'10px 0px 0px 0px'}}>
        <div style={{display:'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap:'0px', gridAutoRows:'82vh', marginTop:'0px'}}>
            <div style={{background:'black', gridColumnStart:'1', gridColumnEnd: '3', color:'white'}}>
                <Sidebar/>
            </div>
            <div style={{gridColumnStart:'3', gridColumnEnd:'20', background:'green'}}>
                <Navpage />
            </div>
        </div>
    </section>
    </>
  )
}

export default Mainpage