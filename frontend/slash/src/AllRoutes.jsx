import React from 'react'

import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import Author from './Components/Author'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/author' element={<Author/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes