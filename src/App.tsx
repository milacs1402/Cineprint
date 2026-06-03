import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.tsx'
import Profile from './pages/profile.tsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
