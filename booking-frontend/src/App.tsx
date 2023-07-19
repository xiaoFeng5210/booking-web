import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
    </Routes>
  )
}

export default App
