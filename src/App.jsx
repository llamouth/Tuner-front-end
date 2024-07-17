import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// PAGES
import Home from './Pages/Home'
import Edit from './Pages/Edit'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'


// COMPONENTS
import Header from './Components/Navbar';

function App() {

  return (
    <div className='container'>
      <Header/>
      <div className="main-display">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/songs' element={<Index />}/>
          <Route path='/new' element={<New />}/>
          <Route path='/songs/:id' element={<Show />}/>
          <Route path='/songs/:id/edit' element={<Edit />}/>
        </Routes> 
      </div>
    </div>
  )
}

export default App
