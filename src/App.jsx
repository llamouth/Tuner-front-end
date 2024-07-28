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
import Playlist from './Pages/Playlist';


// COMPONENTS
import Header from './Components/Navbar';
import NewPlaylist from './Components/NewPlaylist';

function App() {

  const [currentPlaylist, setCurrentPlaylist] = useState(null)

  return (
    <div className='container'>
      <Header setCurrentPlaylist={setCurrentPlaylist} currentPlaylist={currentPlaylist}/>
      <div className="main-display">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/songs' element={<Index currentPlaylist={currentPlaylist}/>}/>
          <Route path='/new' element={<New />}/>
          <Route path='/songs/:id' element={<Show />}/>
          <Route path='/songs/:id/edit' element={<Edit />}/>
          <Route path='/playlist/:id' element={ <Playlist currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist} />  }/>
          <Route path='/playlist/new' element={<NewPlaylist />}/>
        </Routes> 
      </div>
    </div>
  )
}

export default App
