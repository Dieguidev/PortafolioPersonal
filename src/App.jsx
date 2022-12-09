import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MainProjectsDetail from './components/MainProjectsDetail'


function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<MainProjectsDetail />}/>
        {/* <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexId />} />
        </Route> */}
      </Routes>

    </HashRouter>
  )
}

export default App
