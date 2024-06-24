import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AdminCrud } from './pages/AdminCrud'
export default function App (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CRUD' element={<AdminCrud />} />
      </Routes>
    </>
  )
}
