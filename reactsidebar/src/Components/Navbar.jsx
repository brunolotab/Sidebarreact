import React from 'react'
import {BsBook} from 'react-icons/bs'

function Navbar() {


  return (
    <>
    <section>
        <div style={{backgroundColor:'black', padding:'10px', width:'100%' , display:'flex', alignItems:'center',gap:'30px'}}>
            <div>
                <BsBook style={{color:'white', fontSize:'35px'}}/>
            </div>
            <div>
                <p style={{color:'#fff', fontSize:'18px'}}> My coding Book</p>
            </div>
        </div>

    </section>

    </>
  )
}

export default Navbar


