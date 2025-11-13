import './App.css'

import NavBar from './NavBar/NavBar'
import ProjectBlock from './Introduction/Introduction'
import CardCollection from './Cards/Cards'
import Atlas from './Atlas/atlas'

import { Route, Routes } from 'react-router-dom'

function App(props) {
 return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/atlas" element={<NavBar />} />
            <Route path="/papers" element={<NavBar />} />
            <Route path="/dev" element={<NavBar />} />
        </Routes>
        <Routes>
            <Route path="/" element={<ProjectBlock />} />
        </Routes>
        <Routes>
            <Route path="/" element={<CardCollection />} />
        </Routes>
        <Routes>
            <Route path="/atlas" element={<Atlas />} />
        </Routes>
    </div>
 )
}

export default App
