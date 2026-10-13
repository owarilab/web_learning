import { Routes, Route } from 'react-router'
import './App.css'
import NotFound from './pages/notfound.jsx'
import Index from './pages/index.jsx'
import MyPage from './pages/mypage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
