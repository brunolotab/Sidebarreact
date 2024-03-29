import React from 'react'
import { Sidebardata } from '../data/Sidebardata'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Sidebar() {
    
  return (
    
    <Div>
        <section>
            <div style={{color:'white'}}>
                {
                Sidebardata.map((item, index)=>{
                    return(
                        <div key={index}>
                            <NavLink to={item.path} className='hovering' style={{display:'flex',justifyContent:'start', border:'1px solid #444', alignItems:'center',lineHeight:'2.1rem', fontSize:'20px', fontWeight:'bold', gap:'10px', padding:'10px 6px 20px 5px'}}>
                           
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                           
                            </NavLink>
                        </div>
                    )
                }) 
                }
            </div>
        </section>
    </Div>
  )
}

export default Sidebar

const Div = styled.div`
a.active {
    background: blue;
    color: #bbb;
}
`

