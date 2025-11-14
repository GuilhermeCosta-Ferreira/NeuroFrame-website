import { NavBar } from '@/components/NavBar'        // or default import if exported default
import { ProjectBlock } from '@/components/Introduction'
import { CardCollection } from '@/components/Cards'
import { Atlas } from '@/pages/Atlas'
import { Routes, Route } from 'react-router-dom'

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
