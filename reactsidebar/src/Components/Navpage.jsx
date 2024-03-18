import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Java from '../Pages/Java'
import Css from '../Pages/Css'
import Php from '../Pages/Php'
import Git from '../Pages/Git'
import Reacts from '../Pages/React'
import Home from '../Pages/Home'
import Angular from '../Pages/Anugular'

function Navpage() {
  return (
    <>
        <section>
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/java' element={<Java />} />
            <Route path='/css' element={<Css />} />
            <Route path='/php' element={<Php />} />
            <Route path='/git' element={<Git />} />
            <Route path='/reacts' element={<Reacts />} />
            <Route path='/angular' element={<Angular />} />
            </Routes> 
        </section>
    </>
  )
}

export default Navpage