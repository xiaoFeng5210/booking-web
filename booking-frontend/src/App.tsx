import { Routes, Route } from 'react-router-dom';
import Welcome from '~/pages/Welcome';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} /> {/* 👈 Renders at /app/ */}
    </Routes>
  )
}

export default App
