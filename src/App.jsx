import React from 'react'
import Home from './pages/routes/mhome'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Layout from './layout/layout'
import Child from './pages/routes/child'
import Found from './pages/routes/found'

const App = () => {
  const {id} =useParams();
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element ={<Home />}/>
          <Route path='/About/:id' element ={<Child />} />
      </Route>
      <Route>
        <Route path='*' element={<Found />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App