import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AdminCrud } from './pages/AdminCrud'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
export default function App (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CRUD' element={<AdminCrud />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}
